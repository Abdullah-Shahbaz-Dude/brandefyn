/**
 * Reddit Ads conversion pixel – matches Reddit's official "Install the Pixel" snippet.
 * Pixel ID from import.meta.env.VITE_REDDIT_PIXEL_ID (Reddit Ads Manager → Conversion tracking).
 * See: Reddit Help → Install the Pixel (stub + init + PageVisit, optional match keys).
 */

const REDDIT_PIXEL_SCRIPT_URL = "https://www.redditstatic.com/ads/pixel.js";

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
    rdt?: (...args: unknown[]) => void;
  }
}

/** Reads the pixel ID from .env. Returns undefined if not set (pixel is disabled). */
function getPixelId(): string | undefined {
  const id = import.meta.env.VITE_REDDIT_PIXEL_ID;
  return typeof id === "string" && id.trim() !== "" ? id.trim() : undefined;
}

/**
 * STUB: A temporary "rdt" function we put on window BEFORE the real Reddit script loads.
 * - When you call rdt('init', id) or rdt('track', 'Lead'), the real script might not be loaded yet.
 * - The stub pushes those calls into a queue (callQueue).
 * - When the real pixel.js loads, it replaces this stub and runs all queued calls.
 * So we can call rdt(...) immediately without waiting for the script to load.
 */
type RedditStub = ((...args: unknown[]) => void) & {
  sendEvent?: (...a: unknown[]) => void;
  callQueue: unknown[][];
};

function installRedditStub(): void {
  if (typeof window === "undefined" || window.rdt) return;
  const stub: RedditStub = function (...args: unknown[]) {
    if (stub.sendEvent) {
      stub.sendEvent(...args);
    } else {
      stub.callQueue.push(args);
    }
  } as RedditStub;
  stub.callQueue = [];
  window.rdt = stub;
}

/**
 * INIT: Load the Reddit script and tell Reddit "this site is using pixel ID X".
 * - If VITE_REDDIT_PIXEL_ID is not in .env, we do nothing (pixel off).
 * - If the script is already on the page (e.g. user navigated), we just call init again.
 * - Otherwise we: (1) install the stub, (2) add a <script src="...pixel.js">, (3) call rdt('init', pixelId).
 *   The init call is "queued" by the stub until pixel.js loads.
 */
export function initRedditPixel(matchKeys?: RedditMatchKeys): void {
  const pixelId = getPixelId();
  if (!pixelId) return;

  const existing = document.querySelector(
    `script[src="${REDDIT_PIXEL_SCRIPT_URL}"]`,
  );
  if (existing) {
    if (typeof window.rdt === "function") {
      if (matchKeys && Object.keys(matchKeys).length > 0) {
        window.rdt("init", pixelId, matchKeys);
      } else {
        window.rdt("init", pixelId);
      }
    }
    return;
  }

  installRedditStub();
  const script = document.createElement("script");
  script.src = REDDIT_PIXEL_SCRIPT_URL;
  script.async = true;
  const firstScript = document.getElementsByTagName("script")[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
  // Official snippet: init (queued until pixel.js loads). PageVisit is fired per-route in RedditPixel.
  if (matchKeys && Object.keys(matchKeys).length > 0) {
    window.rdt!("init", pixelId, matchKeys);
  } else {
    window.rdt!("init", pixelId);
  }
}

/** Options for track (Prepare for deduplication – use conversionId so Reddit can dedupe with Conversions API). */
export interface RedditTrackOptions {
  conversionId?: string;
}

/**
 * Track a conversion event. No-op if pixel is not configured.
 * Pass options.conversionId (unique per conversion, e.g. transaction ID) for deduplication.
 * Event names from Reddit Ads Manager (e.g. 'Lead', 'SignUp').
 */
export function trackRedditEvent(
  eventName: string,
  options?: RedditTrackOptions,
): void {
  if (!getPixelId()) return;
  if (typeof window.rdt !== "function") return;
  if (options?.conversionId) {
    window.rdt("track", eventName, { conversionId: options.conversionId });
  } else {
    window.rdt("track", eventName);
  }
}
