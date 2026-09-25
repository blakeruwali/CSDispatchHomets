# Role-based access, driven by Architect

## What people will experience
- On sign-in, the app looks up the person's role in Architect and shows only the tabs for that role.
- Tabs they don't have are hidden from the menu. Opening one directly shows a "You don't have access" page with a **Request access** button and an optional note.
- Admins get an **Access requests** page: approve or deny. Approvals add that one tab for that person, on top of their Architect role.
- Anyone with no role (or only `interested`) in Architect sees "Your role hasn't been set up in Architect yet — ask your manager."
- Role changes in Architect take effect on next sign-in (or a "Refresh my access" button).

## Role to tab mapping (draft — please correct)

| Architect role | Tabs |
|---|---|
| admin | Everything + Access requests + Rubric seed |
| customer-success | CSM, Leads, Dispatch, Membership, Insurance, Reviews, Checklist |
| technician | Field, Sales guide, Membership, Reviews, Insurance, Checklist |
| sales | Sales guide, Sales deck, Projects, Membership, Checklist |
| vendor-management | Projects |
| marketing | Leads, Reviews |
| hr | Read-all (no admin) |
| user (legacy staff) | Home only until upgraded |

Open point: Architect has no **Dispatch** role today. Until one is added there, dispatchers need to be `customer-success` (as above) or get Dispatch via an approved request.

## Technical details
- **Architect side (one small addition in that project):** a `role-lookup` backend function that takes an email, checks a shared secret header, and returns that email's roles from `user_roles`. I can't edit Architect from here — I'll give you the exact code to paste into that project.
- **This app:**
  - Secret `ARCHITECT_ROLE_API_KEY` (same value in both apps) + Architect function URL.
  - Backend function `sync-my-role`: validates the caller's sign-in, calls Architect with their verified email, writes the result into a local `staff_roles` table (service role only). Browser never talks to Architect.
  - Tables: `staff_roles` (user_id, role, synced_at), `access_requests` (user_id, tab, note, status, reviewed_by), `tab_grants` (user_id, tab, granted_by). GRANTs + RLS; security-definer `has_role()` and `can_view_tab()`; admins manage requests/grants.
  - Tighten existing policies: rubric seeding and suggestion review become admin-only.
  - Frontend: `useAccess` hook (roles + grants), one `TAB_ACCESS` map in code, menu filtering in `DocsLayout`/`Index`, `RequireTab` wrapper on every route in `App.tsx`, `NoAccess` page with request form, `/admin/access` page.
  - Preview bypass stays: in the editor preview everyone is treated as admin, plus a role switcher to test each view.
