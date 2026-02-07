/**
 * Reddit Ads conversion pixel – matches Reddit's official "Install the Pixel" snippet.
 * Pixel ID from import.meta.env.VITE_REDDIT_PIXEL_ID (Reddit Ads Manager → Conversion tracking).
 * See: Reddit Help → Install the Pixel (stub + init + PageVisit, optional match keys).
 */

const REDDIT_PIXEL_SCRIPT_URL =
  'https://www.redditstatic.com/ads/pixel.js';

/** Optional match keys for init (Step 3 in Reddit docs) – improves attribution when using Event Setup Tool. */
export interface RedditMatchKeys {
  email?: string;
  phoneNumber?: string;
  externalId?: string;
  idfa?: string;
  aaid?: string;
}

declare global {
  interface Window {
    rdt?: (cmd: string, ...args: unknown[]) => void;
  }
}

let pixelInitialized = false;

function getPixelId(): string | undefined {
  const id = import.meta.env.VITE_REDDIT_PIXEL_ID;
  return typeof id === 'string' && id.trim() !== '' ? id.trim() : undefined;
}

/**
 * Install Reddit's rdt stub (exact pattern from official snippet).
 * Uses closure variable p so sendEvent/callQueue work when rdt() is called as window.rdt().
 */
function installRedditStub(): void {
  if (typeof window === 'undefined' || window.rdt) return;
  const p = (window.rdt = function (...args: unknown[]) {
    const q = p as unknown as { sendEvent?: (...a: unknown[]) => void; callQueue: unknown[][] };
    if (q.sendEvent) {
      q.sendEvent.apply(q, args);
    } else {
      q.callQueue.push(args);
    }
  } as unknown as { sendEvent?: (...a: unknown[]) => void; callQueue: unknown[][] });
  p.callQueue = [];
}

/**
 * Injects the Reddit pixel script and initializes with the configured Pixel ID.
 * Matches Reddit's official snippet: stub first, load script, then init + PageVisit (queued if script not ready).
 * Optional matchKeys (Step 3) improve attribution when using Event Setup Tool.
 * Idempotent: safe to call multiple times; script is only added once.
 */
export function initRedditPixel(matchKeys?: RedditMatchKeys): void {
  const pixelId = getPixelId();
  if (!pixelId) return;

  const existing = document.querySelector(
    `script[src="${REDDIT_PIXEL_SCRIPT_URL}"]`
  );
  if (existing) {
    pixelInitialized = true;
    if (typeof window.rdt === 'function') {
      if (matchKeys && Object.keys(matchKeys).length > 0) {
        window.rdt('init', pixelId, matchKeys);
      } else {
        window.rdt('init', pixelId);
      }
    }
    return;
  }

  installRedditStub();
  const script = document.createElement('script');
  script.src = REDDIT_PIXEL_SCRIPT_URL;
  script.async = true;
  script.onload = () => {
    pixelInitialized = true;
  };
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
  // Official snippet: init (queued until pixel.js loads). PageVisit is fired per-route in RedditPixel.
  if (matchKeys && Object.keys(matchKeys).length > 0) {
    window.rdt!('init', pixelId, matchKeys);
  } else {
    window.rdt!('init', pixelId);
  }
}

/**
 * Track a conversion event. No-op if pixel is not configured.
 * Uses rdt() so events are queued if script not loaded yet. Event names from Reddit Ads Manager (e.g. 'Lead', 'SignUp').
 */
export function trackRedditEvent(eventName: string): void {
  if (!getPixelId()) return;
  if (typeof window.rdt === 'function') {
    window.rdt('track', eventName);
  }
}
