import type { Locale } from "@/lib/translate";

/**
 * Interface copy for the documentation surfaces. Document *content* is
 * translated at authoring time into committed `*.es.md` files; this is only
 * the furniture around it.
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
  translationMissing: {
    en: "No Spanish translation has been written for this document yet — showing English.",
    es: "Todavía no se ha escrito una traducción al español de este documento — mostrando la versión en inglés.",
  },
  translationStale: {
    en: "This document was revised after its Spanish translation was written — showing English until the translation is updated.",
    es: "Este documento se revisó después de escribirse su traducción al español — mostrando la versión en inglés hasta que se actualice la traducción.",
  },
  language: { en: "Language", es: "Idioma" },
  ackHeading: { en: "Acknowledgement", es: "Confirmación de lectura" },
  ackChecking: { en: "Checking your record…", es: "Consultando tu registro…" },
  ackDone: { en: "Acknowledged", es: "Confirmado" },
  ackOnRecord: {
    en: "On record against your name. If this document is revised, the version you signed no longer covers you and you will be asked again here.",
    es: "Queda registrado a tu nombre. Si se revisa este documento, la versión que firmaste deja de cubrirte y se te pedirá firmar de nuevo aquí.",
  },
  ackWhy: {
    en: "This document sets a standard you are expected to work to. Recording that you have read it is how we know the standard reached you — and it is the reason nobody has to be asked twice whether they were told.",
    es: "Este documento fija un estándar según el cual se espera que trabajes. Registrar que lo has leído es como sabemos que el estándar llegó hasta ti — y es la razón por la que a nadie hay que preguntarle dos veces si se le informó.",
  },
  ackSignIn: {
    en: "to acknowledge — a signature has to carry a name.",
    es: "para confirmar — una firma tiene que llevar un nombre.",
  },
  ackSignInLink: { en: "Sign in", es: "Inicia sesión" },
  ackButton: { en: "Acknowledge", es: "Confirmar lectura" },
  ackButtonAgain: { en: "Re-acknowledge", es: "Confirmar de nuevo" },
  ackSaving: { en: "Recording…", es: "Registrando…" },
  ackFinePrint: {
    en: "Recorded with your name, the version, and today's date. It cannot be edited or removed afterwards.",
    es: "Se registra con tu nombre, la versión y la fecha de hoy. No se puede editar ni eliminar después.",
  },
  ackUnavailable: {
    en: "Acknowledgements aren't available in this build.",
    es: "Las confirmaciones no están disponibles en esta versión.",
  },
  ackNeedSignIn: {
    en: "Sign in first — an acknowledgement has to carry a name.",
    es: "Inicia sesión primero — una confirmación tiene que llevar un nombre.",
  },
  ackFailed: {
    en: "Could not record the acknowledgement.",
    es: "No se pudo registrar la confirmación.",
  },
} as const;

export type StringKey = keyof typeof STRINGS;

/**
 * The re-acknowledgement notice, which has to interpolate two versions and a
 * date and so cannot live in the flat string table.
 */
export function ackSupersededNotice(
  signedVersion: string,
  signedOn: string,
  currentVersion: string,
  locale: Locale,
): string {
  if (locale === "es") {
    return `Confirmaste la v${signedVersion} el ${signedOn}. Esta es la v${currentVersion} — ha cambiado desde entonces, así que léela de nuevo y vuelve a confirmar.`;
  }
  return `You acknowledged v${signedVersion} on ${signedOn}. This is v${currentVersion} — it has changed since, so please read it again and re-acknowledge.`;
}

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
  "leads-recovery": {
    title: "Recuperación de Clientes Potenciales",
    description: "Llamadas perdidas, estimaciones canceladas y traer de vuelta a los clientes que se fueron",
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
