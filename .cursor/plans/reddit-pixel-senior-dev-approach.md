# Reddit Pixel – Senior Developer Implementation

## Recommended approach (best practice)

Use a **single, env-driven pixel loader** with a **small API** for tracking. Keep the pixel ID out of the repo, load the script only when configured, and fire conversion events from the same abstraction.

```mermaid
flowchart LR
  subgraph env [Config]
    VITE_REDDIT_PIXEL_ID
  end
  subgraph app [App]
    RedditPixelProvider[RedditPixel init]
    EmailForm[EmailCapture / HeroEmailForm]
    ScheduleCall[ScheduleCall]
  end
  VITE_REDDIT_PIXEL_ID --> RedditPixelProvider
  RedditPixelProvider -->|track "Lead"| EmailForm
  RedditPixelProvider -->|track "Schedule" optional| ScheduleCall
```

---

## 1. Config (env + types)

- **`.env`**  
  Add `VITE_REDDIT_PIXEL_ID=your_pixel_id` (no quotes; leave empty or omit in dev if you don’t want the pixel to run).

- **`src/vite-env.d.ts`**  
  Extend `ImportMetaEnv` with `readonly VITE_REDDIT_PIXEL_ID?: string;` so TypeScript and IDE know the variable.

Result: pixel ID is never committed; each environment can use its own ID or disable by not setting it.

---

## 2. Single pixel module (init + track)

Create one place that owns the Reddit script and event API:

- **Option A – Hook + component**  
  - `src/utils/redditPixel.ts` (or `src/analytics/redditPixel.ts`):  
    - `initRedditPixel(): void` – reads `import.meta.env.VITE_REDDIT_PIXEL_ID`, and if present injects Reddit’s script and calls their init (e.g. `rdt('init', pixelId)`).  
    - `trackRedditEvent(eventName: string): void` – if pixel was inited, calls e.g. `rdt('track', eventName)` (or the exact API from Reddit’s docs).  
  - `src/components/RedditPixel.tsx`: a component that runs `initRedditPixel()` once in `useEffect` and renders nothing. Mount it in `App.tsx` next to `<Router>` (or inside it, at the top).

- **Option B – Pure util, init at app entry**  
  - Same `redditPixel.ts` with `initRedditPixel()` and `trackRedditEvent()`.  
  - In `main.tsx` (or `App.tsx` in a `useEffect`), call `initRedditPixel()` once when the app boots.

Senior preference: **Option A** keeps “analytics init” as a React concern and makes it easy to add consent later (e.g. only call `initRedditPixel()` when consent is given). Use a small `RedditPixel.tsx` that only runs the init.

---

## 3. Where to init and where to track

- **Init once**  
  In [App.tsx](src/App.tsx), render `<RedditPixel />` (or call `initRedditPixel()` once from `main.tsx`). No need to put the script in `index.html`; keeping it in app code allows env-based and consent-based control.

- **Page views**  
  Reddit’s script often tracks automatic page views on a SPA. If their docs say to send a page view on route change, call `trackRedditEvent('PageVisit')` (or the event name they specify) from a layout/route effect when `location.pathname` changes.

- **Conversion events**  
  Call `trackRedditEvent('Lead')` (or the exact conversion event name from Reddit Ads Manager) only on real conversions:
  - [EmailCapture.tsx](src/components/forms/EmailCapture.tsx) and [HeroEmailForm.tsx](src/components/forms/HeroEmailForm.tsx): inside the submit handler, after a successful API response (so you don’t track failed or duplicate submits).
  - [ScheduleCall.tsx](src/components/sections/ScheduleCall.tsx): if Calendly exposes a “scheduled” or “closed” callback, fire a “Schedule” or “Lead” event there; otherwise skip or use a weaker event (e.g. “ViewedScheduleSection”) to avoid double-counting.

Use the **exact event names** you create in Reddit Ads Manager (e.g. “Lead”, “SignUp”, “Contact”) so reporting matches.

---

## 4. Script injection (senior details)

- **Idempotent init**  
  In `initRedditPixel()`, check if the script is already on the page (e.g. `document.querySelector('script[src*="redditstatic.com/ads/pixel"]')`) before injecting. Prevents double load on strict mode or hot reload.

- **No script in repo**  
  Don’t paste the raw pixel snippet into `index.html` with a hardcoded ID. Always use the env var and inject from JS so dev/staging can disable or use a test pixel.

- **Type the global**  
  Reddit’s snippet usually exposes something like `window.rdt`. Add a small `declare global { interface Window { rdt?: (...args: unknown[]) => void } }` in the pixel util or a `reddit-pixel.d.ts` so you don’t get type errors when calling `rdt('track', ...)`.

---

## 5. Optional: consent (GDPR)

If you need cookie/marketing consent later:

- Do **not** call `initRedditPixel()` until the user has accepted marketing/tracking.
- Store consent in state or a cookie; in the component that runs init, only call `initRedditPixel()` when consent is true. Optionally call `trackRedditEvent('ConsentGiven')` once after init if Reddit supports it.

This keeps the same implementation; you only change when init runs.

---

## 6. Files to add/change (summary)

| Action | File |
|--------|------|
| Add env var | `.env` – `VITE_REDDIT_PIXEL_ID=...` |
| Add type | `src/vite-env.d.ts` – `VITE_REDDIT_PIXEL_ID?: string` |
| Add pixel API | `src/utils/redditPixel.ts` (or `src/analytics/redditPixel.ts`) – init + track, script inject, idempotent |
| Add component (optional) | `src/components/RedditPixel.tsx` – useEffect that calls init, render null |
| Mount init | `src/App.tsx` – render `<RedditPixel />` or call init once in useEffect |
| Track conversions | `EmailCapture.tsx`, `HeroEmailForm.tsx` – after successful submit call `trackRedditEvent('Lead')` |
| Optional | `ScheduleCall.tsx` – Calendly callback → `trackRedditEvent('Schedule')` |
| Optional | Route effect – on pathname change call `trackRedditEvent('PageVisit')` if required by Reddit |

Use Reddit’s official snippet and event names from Ads Manager → Conversion tracking; the exact `rdt(...)` signature may differ slightly from the examples above.
