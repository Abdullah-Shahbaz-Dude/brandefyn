import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import LazyImage from "../components/ui/LazyImage";
import "../styles/post-content.css";
import { getPostBySlug } from "../api/wordpress";
import type { WpPost } from "../types/wordpress";
import { sanitizePostContent } from "../utils/sanitizeHtml";

function stripHtml(html: string): string {
  if (typeof document === "undefined") return html.replace(/<[^>]*>/g, "");
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent ?? div.innerText ?? "";
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getFeaturedImageUrl(post: WpPost): string | null {
  const media = post._embedded?.["wp:featuredmedia"];
  if (Array.isArray(media) && media[0]?.source_url) return media[0].source_url;
  return null;
}

function getPostTermNames(post: WpPost): string[] {
  const termArrays = post._embedded?.["wp:term"];
  if (!Array.isArray(termArrays)) return [];
  const names: string[] = [];
  for (const arr of termArrays) {
    if (Array.isArray(arr)) {
      for (const t of arr) {
        if (t?.name) names.push(t.name);
      }
    }
  }
  return names;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WpPost | null | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    const controller = new AbortController();
    getPostBySlug(slug, { signal: controller.signal })
      .then((data) => setPost(data ?? null))
      .catch((err) => {
        if (err?.name === "AbortError") return;
        setError("Failed to load post.");
        setPost(null);
      });
    return () => {
      controller.abort();
      setPost(undefined);
      setError(null);
    };
  }, [slug]);

  useEffect(() => {
    if (post?.title?.rendered) {
      document.title = stripHtml(post.title.rendered) + " | Brandefyn";
    }
    return () => {
      document.title = "Brandefyn";
    };
  }, [post]);

  if (error) {
    return (
      <div className="min-h-[60vh] purple-glow-bg flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-white/90 text-lg mb-4">{error}</p>
          <Link
            to="/blogs/"
            className="text-purple-400 hover:underline focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none rounded"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!slug || post === null) {
    return (
      <div className="min-h-[60vh] purple-glow-bg flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Post not found
          </h1>
          <Link
            to="/blogs/"
            className="text-purple-400 hover:underline focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none rounded"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (post === undefined) {
    return (
      <div className="min-h-[60vh] purple-glow-bg flex items-center justify-center px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <p className="text-white/80">Loading…</p>
        </div>
      </div>
    );
  }

  const imgUrl = getFeaturedImageUrl(post);
  const title = stripHtml(post.title.rendered);

  return (
    <article className="purple-glow-bg min-h-screen">
      <div className="container mx-auto px-4 max-w-[900px] py-12 md:py-20">
        <Link
          to="/blogs/"
          className="inline-flex items-center rounded-full px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/15 bg-white/10 transition-colors mb-8 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus:outline-none"
        >
          ← Back to Blog
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/70 mb-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {getPostTermNames(post).length > 0 && (
              <>
                <span className="text-white/40" aria-hidden>
                  ·
                </span>
                <span className="flex flex-wrap gap-2">
                  {getPostTermNames(post).map((name) => (
                    <span
                      key={name}
                      className="px-2 py-1 rounded-lg bg-white/10 text-white/80"
                    >
                      {name}
                    </span>
                  ))}
                </span>
              </>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug text-shadow-lg max-w-[85ch]">
            {title}
          </h1>
        </motion.header>

        {imgUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden mb-10 shadow-xl shadow-black/30"
          >
            <LazyImage
              src={imgUrl}
              alt={title}
              className="w-full h-auto object-cover max-h-[480px]"
            />
          </motion.div>
        )}

        {/* Post body styles: src/styles/post-content.css */}
        <div className="border-t border-white/10 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="post-content max-w-[65ch] overflow-x-auto"
            dangerouslySetInnerHTML={{
              __html: sanitizePostContent(post.content.rendered),
            }}
          />
        </div>
      </div>
    </article>
  );
}
