import type { ContentDoc } from "@/lib/content";

export type Locale = "en" | "es";

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

/**
 * Translations are authored, reviewed and committed — never generated at read
 * time.
 *
 * A governing document translated on demand is a different document for every
 * reader: nobody reviewed the Spanish, two technicians can be shown different
 * wording of the same clause, and a translation of a safety table can be wrong
 * with nobody in a position to notice. So Spanish lives in `*.es.md` files
 * beside the English, is produced once when the English is written or revised,
 * and goes through the same review as anything else here.
 *
 * The consequence is that a translation can be *missing*, and that is a state
 * this module reports honestly rather than papering over.
 */

export type TranslationState =
  /** An authored, current translation for this version of the document. */
  | "authored"
  /** A translation exists but was made from an earlier version — not shown. */
  | "stale"
  /** No translation has been written yet. */
  | "missing"
  /** Reading in English; nothing to resolve. */
  | "source";

export interface Translation {
  /** The markdown to render — always English when the state is not "authored". */
  markdown: string;
  state: TranslationState;
  /** The English version a stale translation was made from, e.g. "1". */
  translatedFrom?: string;
}

/**
 * Resolve a document into the reading language.
 *
 * Synchronous by design. There is no network call, no cache and no fallback
 * chain — either the reviewed Spanish for this exact version is bundled, or
 * the reader gets English and is told why.
 */
export function resolveDoc(doc: ContentDoc, locale: Locale): Translation {
  if (locale === "en") return { markdown: doc.body, state: "source" };

  const authored = doc.translations[locale];
  if (!authored) return { markdown: doc.body, state: "missing" };

  // Version-scoped for the same reason acknowledgements are: a translation of
  // v1 says nothing about v2, and showing it would be showing text that no
  // longer matches the document it claims to be.
  if (authored.sourceVersion !== doc.version) {
    return { markdown: doc.body, state: "stale", translatedFrom: authored.sourceVersion };
  }

  return { markdown: authored.markdown, state: "authored" };
}
