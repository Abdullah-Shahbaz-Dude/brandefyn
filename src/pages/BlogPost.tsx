import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import LazyImage from "../components/ui/LazyImage";
import { getPostBySlug } from "../api/wordpress";
import type { WpPost } from "../types/wordpress";

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

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WpPost | null | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setPost(null);
      return;
    }
    let cancelled = false;
    setError(null);
    setPost(undefined);
    getPostBySlug(slug)
      .then((data) => {
        if (!cancelled) setPost(data ?? null);
      })
      .catch(() => {
        if (!cancelled) {
          setError("Failed to load post.");
          setPost(null);
        }
      });
    return () => {
      cancelled = true;
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
          <Link to="/blog" className="text-purple-400 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (post === null) {
    return (
      <div className="min-h-[60vh] purple-glow-bg flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Post not found
          </h1>
          <Link to="/blog" className="text-purple-400 hover:underline">
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
          to="/blog"
          className="inline-block text-white/70 hover:text-white mb-8 transition-colors"
        >
          ← Back to Blog
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-white/70 text-sm md:text-base mb-2">
            {formatDate(post.date)}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-shadow-lg">
            {title}
          </h1>
        </motion.header>

        {imgUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden mb-10"
          >
            <LazyImage
              src={imgUrl}
              alt={title}
              className="w-full h-auto object-cover max-h-[480px]"
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="post-content text-white/90 text-lg leading-relaxed [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_a]:text-purple-400 [&_a]:underline [&_a:hover]:text-purple-300 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-1 [&_img]:rounded-lg [&_img]:max-w-full [&_img]:h-auto"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </article>
  );
}
