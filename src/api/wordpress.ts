import type { WpPost, WpCategory, WpTag } from "../types/wordpress";

const WP_FETCH_TIMEOUT_MS = 15000;

export function getBaseUrl(): string {
  const url = import.meta.env.VITE_WP_API_URL ?? "";
  if (!url && import.meta.env.DEV) {
    console.warn(
      "[Brandfy] VITE_WP_API_URL is not set. Blog posts will not load. Set it in .env to /api/blog (dev proxy) or the full WP API URL."
    );
  }
  return url;
}

export interface WpFetchOptions {
  signal?: AbortSignal;
  timeout?: number;
}

/**
 * Central fetch for WordPress REST API: applies timeout and optional AbortSignal.
 */
async function wpFetch(
  url: string,
  options: WpFetchOptions = {}
): Promise<Response> {
  const { signal, timeout = WP_FETCH_TIMEOUT_MS } = options;
  const controller = new AbortController();
  let timeoutId: ReturnType<typeof setTimeout> | null = setTimeout(() => {
    timeoutId = null;
    controller.abort();
  }, timeout);
  if (signal) {
    signal.addEventListener("abort", () => {
      if (timeoutId !== null) clearTimeout(timeoutId);
      controller.abort();
    });
  }
  const effectiveSignal = controller.signal;

  try {
    const res = await fetch(url, { signal: effectiveSignal });
    if (timeoutId !== null) clearTimeout(timeoutId);
    return res;
  } catch (e) {
    if (timeoutId !== null) clearTimeout(timeoutId);
    throw e;
  }
}

export interface GetPostsOptions {
  per_page?: number;
  page?: number;
  search?: string;
  categories?: number[];
  tags?: number[];
  signal?: AbortSignal;
}

export interface GetPostsResult {
  posts: WpPost[];
  total: number;
  totalPages: number;
}

export async function getPosts(
  options: GetPostsOptions = {}
): Promise<GetPostsResult> {
  const base = getBaseUrl();
  if (!base) {
    return { posts: [], total: 0, totalPages: 0 };
  }
  const per_page = options.per_page ?? 10;
  const page = options.page ?? 1;
  const params = new URLSearchParams({
    _embed: "",
    per_page: String(per_page),
    page: String(page),
  });
  if (options.search?.trim()) {
    params.set("search", options.search.trim());
  }
  if (options.categories?.length) {
    params.set("categories", options.categories.join(","));
  }
  if (options.tags?.length) {
    params.set("tags", options.tags.join(","));
  }
  const url = `${base.replace(/\/$/, "")}/wp/v2/posts?${params.toString()}`;
  const res = await wpFetch(url, { signal: options.signal });
  if (!res.ok) {
    throw new Error("Failed to load posts");
  }
  const data = (await res.json()) as WpPost[];
  const posts = Array.isArray(data) ? data : [];
  const total = parseInt(res.headers.get("X-WP-Total") ?? "0", 10) || posts.length;
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") ?? "1", 10) || 1;
  return { posts, total, totalPages };
}

export interface GetPostBySlugOptions {
  signal?: AbortSignal;
}

export async function getPostBySlug(
  slug: string,
  options: GetPostBySlugOptions = {}
): Promise<WpPost | null> {
  const base = getBaseUrl();
  if (!base) {
    return null;
  }
  const url = `${base.replace(/\/$/, "")}/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`;
  const res = await wpFetch(url, { signal: options.signal });
  if (!res.ok) {
    return null;
  }
  const data = (await res.json()) as WpPost[];
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }
  return data[0];
}

export interface GetCategoriesOptions {
  per_page?: number;
  signal?: AbortSignal;
}

export async function getCategories(
  options: GetCategoriesOptions = {}
): Promise<WpCategory[]> {
  const base = getBaseUrl();
  if (!base) {
    return [];
  }
  const per_page = options.per_page ?? 100;
  const url = `${base.replace(/\/$/, "")}/wp/v2/categories?per_page=${per_page}`;
  const res = await wpFetch(url, { signal: options.signal });
  if (!res.ok) {
    return [];
  }
  const data = (await res.json()) as WpCategory[];
  return Array.isArray(data) ? data : [];
}

export interface GetTagsOptions {
  per_page?: number;
  signal?: AbortSignal;
}

export async function getTags(options: GetTagsOptions = {}): Promise<WpTag[]> {
  const base = getBaseUrl();
  if (!base) {
    return [];
  }
  const per_page = options.per_page ?? 100;
  const url = `${base.replace(/\/$/, "")}/wp/v2/tags?per_page=${per_page}`;
  const res = await wpFetch(url, { signal: options.signal });
  if (!res.ok) {
    return [];
  }
  const data = (await res.json()) as WpTag[];
  return Array.isArray(data) ? data : [];
}
