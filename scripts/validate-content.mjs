#!/usr/bin/env node
/**
 * Validates content/**\/*.md against the rules in content/README.md.
 *
 *   node scripts/validate-content.mjs
 *
 * Exits non-zero on any error, so it can gate a build or a pre-commit hook.
 * Warnings (stale docs, unresolved ids that are only planned) do not fail.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const CONTENT = "content";
const TOKENS_FILE = join(CONTENT, "pricing", "tokens.md");

// Files that describe the system rather than being SOP docs.
const EXEMPT = new Set(["README.md", "INDEX.md"]);

/**
 * Notes about the migration itself — reconciliation registers, status, form
 * reviews. They are working documents for whoever is building the SOP, never
 * rendered to staff, so they carry no frontmatter by design. A rule rather
 * than a list, so adding the next register does not mean editing this file.
 */
const isWorkingNote = (file) => file.includes("/_migrated/");

/** A translated sibling, e.g. `diagnostics.es.md`. */
const LOCALE_FILE = /\.([a-z]{2})\.md$/;

const REQUIRED_FRONTMATTER = [
  "id", "title", "department", "owner",
  "status", "version", "last_reviewed", "review_cadence_days",
];
const VALID_STATUS = ["draft", "draft-needed", "in-review", "published", "archived"];
const ID_PATTERN = /`((?:sop|script|protocol|playbook|governance|people|pricing|reference)\.[a-z0-9.-]+)`/g;
const TOKEN_PATTERN = /\{\{price:([a-z0-9_]+)\}\}/g;

const errors = [];
const warnings = [];

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (entry.endsWith(".md")) out.push(full);
  }
  return out;
}

function parseFrontmatter(text) {
  const match = /^---\n([\s\S]*?)\n---/.exec(text);
  if (!match) return null;
  const fm = {};
  for (const line of match[1].split("\n")) {
    const kv = /^([a-z_]+):\s*(.*)$/.exec(line);
    if (kv) fm[kv[1]] = kv[2].trim();
  }
  fm._raw = match[1];
  fm._body = text.slice(match[0].length);
  return fm;
}

function listValue(fm, key) {
  const m = new RegExp(`^${key}:\\s*\\[(.*?)\\]`, "m").exec(fm._raw);
  if (!m) return [];
  return m[1].split(",").map((s) => s.trim()).filter(Boolean);
}

const files = walk(CONTENT);

// ---- 1. Collect defined price tokens -------------------------------------
const tokensText = readFileSync(TOKENS_FILE, "utf8");
const definedTokens = new Set(
  [...tokensText.matchAll(/^\|\s*`([a-z0-9_]+)`/gm)].map((m) => m[1]),
);

// ---- 2. Collect declared doc ids ------------------------------------------
const docs = new Map(); // id -> path
const docVersions = new Map(); // id -> declared version, for translation drift
/**
 * Translations are authored once, when the English is written or revised, and
 * committed — nothing translates at read time. That only works if a revision
 * cannot quietly leave the Spanish behind, so a translated file declares the
 * English version it was made from and this check enforces the match.
 */
const translations = [];

for (const file of files) {
  const base = file.split("/").pop();
  const text = readFileSync(file, "utf8");
  const fm = parseFrontmatter(text);

  if (LOCALE_FILE.test(file)) {
    const locale = LOCALE_FILE.exec(file)[1];
    if (!fm) {
      errors.push(`${file}: a translation must declare 'translation_of' and 'source_version'`);
    } else if (!fm.translation_of || !fm.source_version) {
      errors.push(`${file}: translation missing 'translation_of' or 'source_version'`);
    } else {
      translations.push({ file, locale, of: fm.translation_of, from: String(fm.source_version) });
    }
    continue;
  }

  if (!fm) {
    if (!EXEMPT.has(base) && !isWorkingNote(file)) {
      errors.push(`${file}: missing YAML frontmatter`);
    }
    continue;
  }

  for (const key of REQUIRED_FRONTMATTER) {
    if (!(key in fm)) errors.push(`${file}: frontmatter missing '${key}'`);
  }
  if (fm.status && !VALID_STATUS.includes(fm.status)) {
    errors.push(`${file}: invalid status '${fm.status}' (expected ${VALID_STATUS.join(" | ")})`);
  }
  if (fm.id) {
    if (docs.has(fm.id)) {
      errors.push(`${file}: duplicate id '${fm.id}' (also in ${docs.get(fm.id)})`);
    }
    docs.set(fm.id, file);
    docVersions.set(fm.id, String(fm.version ?? ""));
  }

  // Staleness is a warning, never an error.
  if (fm.last_reviewed && fm.review_cadence_days) {
    const due = new Date(fm.last_reviewed);
    due.setDate(due.getDate() + Number(fm.review_cadence_days));
    if (due < new Date()) {
      warnings.push(`${file}: stale — due for review ${due.toISOString().slice(0, 10)}`);
    }
  }
}

// ---- 3. Validate tokens and cross-references ------------------------------
// INDEX.md deliberately references docs that are planned but unwritten.
const PLANNED_OK = new Set(["INDEX.md"]);

for (const file of files) {
  const base = file.split("/").pop();
  const text = readFileSync(file, "utf8");
  const fm = parseFrontmatter(text);
  const body = fm ? fm._body : text;

  // These files document the {{price:...}} syntax itself using placeholder
  // names, so their tokens are illustrative rather than references to resolve.
  const documentsSyntax = EXEMPT.has(base) || isWorkingNote(file) || base === "tokens.md";
  if (!documentsSyntax) {
    for (const [, token] of body.matchAll(TOKEN_PATTERN)) {
      if (!definedTokens.has(token)) {
        errors.push(`${file}: undefined price token '{{price:${token}}}'`);
      }
    }
  }

  // Cross-references in the body.
  if (!PLANNED_OK.has(base) && !EXEMPT.has(base) && !isWorkingNote(file)) {
    for (const [, id] of body.matchAll(ID_PATTERN)) {
      if (!docs.has(id)) errors.push(`${file}: broken reference to '${id}'`);
    }
  }

  // Cross-references in frontmatter lists.
  if (fm) {
    for (const key of ["related", "supersedes"]) {
      for (const id of listValue(fm, key)) {
        if (!docs.has(id)) errors.push(`${file}: frontmatter '${key}' points at unknown id '${id}'`);
      }
    }
  }
}

// ---- 4. Report ------------------------------------------------------------
const unusedTokens = [...definedTokens].filter((t) => {
  return !files.some((f) => readFileSync(f, "utf8").includes(`{{price:${t}}}`));
});
for (const t of unusedTokens) warnings.push(`pricing/tokens.md: token '${t}' is defined but never used`);

// Translations are checked once every document is known, so the English
// version a translation claims can be compared against the English document.
for (const tr of translations) {
  if (!docs.has(tr.of)) {
    errors.push(`${tr.file}: 'translation_of' points at unknown id '${tr.of}'`);
    continue;
  }
  const current = docVersions.get(tr.of);
  if (current !== tr.from) {
    errors.push(
      `${tr.file}: translated from v${tr.from}, but ${tr.of} is now v${current}. ` +
        `Re-translate and update 'source_version' — a stale translation of a ` +
        `governing document is never shown to readers.`,
    );
  }
}

console.log(`Checked ${files.length} files — ${docs.size} documents, ${definedTokens.size} price tokens.\n`);

if (warnings.length) {
  console.log(`⚠  ${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`   ${w}`);
  console.log("");
}

if (errors.length) {
  console.error(`✗ ${errors.length} error(s):`);
  for (const e of errors) console.error(`   ${e}`);
  process.exit(1);
}

console.log("✓ All checks passed.");
