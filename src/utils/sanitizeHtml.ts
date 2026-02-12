import DOMPurify from "dompurify";

/**
 * Allowed tags for WordPress post body content.
 * Keeps styling predictable and avoids XSS from raw HTML.
 */
const ALLOWED_TAGS = [
  "p",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "strong",
  "em",
  "b",
  "i",
  "a",
  "ul",
  "ol",
  "li",
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "th",
  "td",
  "img",
  "blockquote",
  "br",
  "hr",
  "span",
  "div",
];

const ALLOWED_ATTR: Record<string, string[]> = {
  a: ["href", "title", "target", "rel"],
  img: ["src", "alt", "width", "height"],
  th: ["scope", "colspan", "rowspan"],
  td: ["colspan", "rowspan"],
};

/**
 * Sanitize WordPress post content HTML before rendering with dangerouslySetInnerHTML.
 * Uses an allowlist of tags and attributes for security and predictable DOM for CSS.
 */
export function sanitizePostContent(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS,
    ALLOWED_ATTR: Object.values(ALLOWED_ATTR).flat(),
    ADD_ATTR: ["target"], // allow target="_blank" for external links
  });
}
