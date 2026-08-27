/**
 * Google sign-in has to start and finish on the Lovable host, then hand the
 * session back to the company domain.
 *
 * The broker lives at `/~oauth/initiate`, a server route only Lovable's
 * hosting serves. GitHub Pages is static files, so `process.hometsair.com`
 * cannot answer it and cannot be an approved callback origin either. Sign-in
 * therefore runs on `homets-shine-deck.lovable.app` and returns there.
 *
 * That leaves the session on the wrong origin. `localStorage` is per-origin,
 * so a session written on the Lovable host is invisible to the company domain
 * — the user finishes signed in somewhere they did not start.
 *
 * The return origin travels in the OAuth `state` parameter rather than in
 * `redirect_uri`, which stays exactly the approved value. If the broker ever
 * stops echoing `state`, the flow degrades to what it does today rather than
 * breaking.
 */

export const MANAGED_APP_URL = "https://homets-shine-deck.lovable.app/";

/**
 * Origins the tokens may be forwarded to. This is an allowlist and must stay
 * one: forwarding a fragment containing an access token to an origin supplied
 * by the caller would be an open redirect that leaks credentials.
 */
const RETURN_ORIGINS = ["https://process.hometsair.com"];

/** True on a host that can serve the broker route itself. */
export function isManagedHost(hostname: string = window.location.hostname): boolean {
  return (
    hostname.endsWith(".lovable.app") ||
    hostname.endsWith(".lovableproject.com") ||
    hostname === "localhost"
  );
}

/**
 * The origin to send the session back to, or null if it is not allowed.
 *
 * The broker returns `state` percent-encoded a second time — an observed
 * callback carried `https%253A%252F%252Fprocess.hometsair.com`, which is one
 * decode short of an origin after URLSearchParams has already decoded once.
 * So decode until it stops changing, bounded, and compare the result. Matching
 * on the raw value silently failed the allowlist and skipped the handoff.
 */
export function returnOriginFor(candidate: string | null | undefined): string | null {
  if (!candidate) return null;

  let value = candidate;
  for (let i = 0; i < 3; i += 1) {
    let decoded: string;
    try {
      decoded = decodeURIComponent(value);
    } catch {
      break; // malformed escape — judge what we have
    }
    if (decoded === value) break;
    value = decoded;
  }

  return RETURN_ORIGINS.includes(value) ? value : null;
}
