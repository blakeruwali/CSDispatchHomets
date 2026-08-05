import type { Locale } from "@/lib/translate";

/**
 * Interface copy for the documentation surfaces. Document *content* is
 * translated at read time; this is only the furniture around it.
 */
const STRINGS = {
  search: { en: "Search…", es: "Buscar…" },
  clear: { en: "Clear", es: "Borrar" },
  contents: { en: "Open contents", es: "Abrir contenido" },
  onThisPage: { en: "On this page", es: "En esta página" },
  suggestEdit: { en: "Suggest an edit", es: "Sugerir un cambio" },
  previous: { en: "Previous", es: "Anterior" },
  next: { en: "Next", es: "Siguiente" },
  part: { en: "Part", es: "Parte" },
  results: { en: "results", es: "resultados" },
  result: { en: "result", es: "resultado" },
  noMatches: { en: "No matching documents", es: "No hay documentos que coincidan" },
  backToGuide: { en: "Dispatch Guide", es: "Guía de Despacho" },
  darkMode: { en: "Dark mode", es: "Modo oscuro" },
  lightMode: { en: "Light mode", es: "Modo claro" },
  translating: { en: "Translating…", es: "Traduciendo…" },
  machineNotice: {
    en: "Spanish translation generated from the English document. English is the governing version.",
    es: "Traducción al español generada del documento en inglés. La versión en inglés es la que rige.",
  },
  translationFailed: {
    en: "Translation unavailable — showing the English document.",
    es: "Traducción no disponible — mostrando el documento en inglés.",
  },
  retry: { en: "Try again", es: "Reintentar" },
  language: { en: "Language", es: "Idioma" },
} as const;

export type StringKey = keyof typeof STRINGS;

export function t(key: StringKey, locale: Locale): string {
  return STRINGS[key][locale] ?? STRINGS[key].en;
}

/** Part titles and descriptions, by section id. */
const SECTIONS: Record<string, { title: string; description: string }> = {
  foundations: {
    title: "Fundamentos",
    description: "Función, cobertura, herramientas, estándares de comunicación, KPIs",
  },
  interaction: {
    title: "Interacción con el Cliente",
    description: "Saludo, escucha, perfiles, triaje de emergencias, escalamiento",
  },
  intake: {
    title: "Toma de Datos",
    description: "Datos requeridos, tipo de servicio y sistema, síntomas, origen del cliente",
  },
  booking: {
    title: "Agendamiento",
    description: "Disponibilidad, área de servicio, tarifas, membresía, objeciones",
  },
  channels: {
    title: "Guías por Canal",
    description: "Velocidad de respuesta, marketplaces, llamadas, LSA, web, Posh, SMS",
  },
  "post-booking": {
    title: "Post-Agendamiento y Retención",
    description: "Tickets, entrega a despacho, seguimiento, garantía, retención",
  },
  governance: {
    title: "Gobernanza",
    description: "Cómo se emiten, se firman y se cambian estos documentos",
  },
  "field-standards": {
    title: "En Cada Trabajo",
    description: "Lo que ocurre en cada visita, antes e independientemente del trabajo",
  },
  "field-safety": {
    title: "Seguridad",
    description: "Seguridad en el sitio, equipo de protección, manejo de riesgos",
  },
  "field-documentation": {
    title: "Documentación",
    description: "Fotos, notas y lo que debe estar en ServiceTitan antes de cerrar",
  },
};

export function sectionTitle(id: string, fallback: string, locale: Locale): string {
  if (locale === "en") return fallback;
  return SECTIONS[id]?.title ?? fallback;
}

export function sectionDescription(id: string, fallback: string, locale: Locale): string {
  if (locale === "en") return fallback;
  return SECTIONS[id]?.description ?? fallback;
}
