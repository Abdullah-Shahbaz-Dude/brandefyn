import type { WpPost } from "../types/wordpress";

export function getBaseUrl(): string {
  return import.meta.env.VITE_WP_API_URL ?? "";
}

export interface GetPostsOptions {
  per_page?: number;
  page?: number;
}

export async function getPosts(options: GetPostsOptions = {}): Promise<WpPost[]> {
  const base = getBaseUrl();
  if (!base) {
    return [];
  }
  const per_page = options.per_page ?? 10;
  const page = options.page ?? 1;
  const url = `${base.replace(/\/$/, "")}/wp/v2/posts?_embed&per_page=${per_page}&page=${page}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to load posts");
  }
  const data = (await res.json()) as WpPost[];
  return Array.isArray(data) ? data : [];
}

export async function getPostBySlug(slug: string): Promise<WpPost | null> {
  const base = getBaseUrl();
  if (!base) {
    return null;
  }
  const url = `${base.replace(/\/$/, "")}/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`;
  const res = await fetch(url);
  if (!res.ok) {
    return null;
  }
  const data = (await res.json()) as WpPost[];
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }
  return data[0];
}
