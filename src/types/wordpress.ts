/** wp/v2 category term */
export interface WpCategory {
  id: number;
  name: string;
  slug: string;
  count?: number;
}

/** wp/v2 tag term */
export interface WpTag {
  id: number;
  name: string;
  slug: string;
  count?: number;
}

/** WordPress REST API (wp/v2) post with optional _embed for featured media and terms */
export interface WpPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  categories?: number[];
  tags?: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text?: string }>;
    /** First array: categories, second: tags (when _embed is used) */
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
}
