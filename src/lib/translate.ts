import { supabase } from "@/integrations/supabase/client";
import type { ContentDoc } from "@/lib/content";

export type Locale = "en" | "es";

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

/**
 * Cached against the document version, so a translation is discarded the
 * moment the English clause it was made from changes. A stale translation of a
 * governing document is worse than no translation.
 */
function cacheKey(doc: ContentDoc, locale: Locale): string {
  return `homets.translation.${locale}.${doc.id}.v${doc.version}`;
}

function readCache(doc: ContentDoc, locale: Locale): string | null {
  try {
    return window.localStorage.getItem(cacheKey(doc, locale));
  } catch {
    return null;
  }
}

function writeCache(doc: ContentDoc, locale: Locale, markdown: string) {
  try {
    window.localStorage.setItem(cacheKey(doc, locale), markdown);
  } catch {
    // Storage full or blocked — translation still shows for this session.
  }
}

export type TranslationSource = "authored" | "cache" | "machine";

export interface Translation {
  markdown: string;
  source: TranslationSource;
}

/**
 * Resolution order: a hand-authored `*.es.md` sibling, then a cached machine
 * translation, then the AI gateway. Authored files always win — once a human
 * has signed off on the Spanish, nothing regenerates it.
 */
export async function translateDoc(doc: ContentDoc, locale: Locale): Promise<Translation> {
  if (locale === "en") return { markdown: doc.body, source: "authored" };

  const authored = doc.translations[locale];
  if (authored) return { markdown: authored, source: "authored" };

  const cached = readCache(doc, locale);
  if (cached) return { markdown: cached, source: "cache" };

  const { data, error } = await supabase.functions.invoke("translate-doc", {
    body: { markdown: doc.body, title: doc.title, target: locale },
  });

  if (error) {
    const details =
      typeof (error as { context?: { text?: () => Promise<string> } }).context?.text === "function"
        ? await (error as { context: { text: () => Promise<string> } }).context.text()
        : error.message;
    throw new Error(details || "Translation failed");
  }

  const markdown = (data as { markdown?: string } | null)?.markdown;
  if (!markdown) throw new Error("Translation returned nothing");

  writeCache(doc, locale, markdown);
  return { markdown, source: "machine" };
}
