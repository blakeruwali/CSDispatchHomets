/**
 * Auth bypass for the Lovable preview / local dev environment only.
 *
 * The SOPs are gated behind a hometsair.com sign-in, which cannot be completed
 * inside the Lovable editor preview while we are still building. This lets the
 * gate open on preview and localhost hosts only. It never applies to the
 * published site or the company domain, and it changes nothing server-side:
 * row-level security still keys on `public.is_homets_user()`, so unauthenticated
 * preview sessions simply see no rows rather than protected data.
 */
const PREVIEW_HOST_SUFFIXES = [
  ".lovable.app",
  ".lovableproject.com",
  ".lovableproject-dev.com",
  ".gpt-eng.com",
  ".gptengineer.run",
];

export function isPreviewEnvironment(
  hostname: string = typeof window === "undefined" ? "" : window.location.hostname,
): boolean {
  if (hostname === "localhost" || hostname === "127.0.0.1") return true;
  return PREVIEW_HOST_SUFFIXES.some((suffix) => hostname.endsWith(suffix));
}
