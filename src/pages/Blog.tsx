import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero/hero-2.png";
import LazyImage from "../components/ui/LazyImage";
import amazonLine from "../assets/images/hero/hero-amzon.png";
import borderImage from "../assets/images/hero/border.svg";
import { getPosts, getCategories } from "../api/wordpress";
import type { WpPost, WpCategory } from "../types/wordpress";

const POSTS_PER_PAGE = 9;

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

/** Get category and tag names from post _embedded wp:term (categories first, then tags) */
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

export default function BlogPage() {
  const [posts, setPosts] = useState<WpPost[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [categories, setCategories] = useState<WpCategory[]>([]);

  const fetchPage = useCallback(
    async (pageNum: number, append: boolean) => {
      const opts = {
        per_page: POSTS_PER_PAGE,
        page: pageNum,
        ...(searchQuery.trim() && { search: searchQuery.trim() }),
        ...(categoryId !== null && { categories: [categoryId] }),
      };
      const result = await getPosts(opts);
      return { ...result, append };
    },
    [searchQuery, categoryId]
  );

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(() => {});
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setPage(1);
    fetchPage(1, false)
      .then(({ posts: nextPosts, total: t, totalPages: tp }) => {
        if (!cancelled) {
          setPosts(nextPosts);
          setTotal(t);
          setTotalPages(tp);
          setPage(1);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("Unable to load posts. Please try again later.");
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
    // Intentionally re-run when filters change; sync state reset is required for loading UX.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, categoryId]);

  const loadMore = () => {
    const nextPage = page + 1;
    if (nextPage > totalPages || loadingMore) return;
    setLoadingMore(true);
    fetchPage(nextPage, true)
      .then(({ posts: nextPosts, total: t, totalPages: tp }) => {
        setPosts((prev) => [...prev, ...nextPosts]);
        setTotal(t);
        setTotalPages(tp);
        setPage(nextPage);
        setLoadingMore(false);
      })
      .catch(() => {
        setLoadingMore(false);
      });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput.trim());
  };

  return (
    <>
      {/* Hero Section - match Resources styling */}
      <div className="relative w-full min-h-[700px] sm:min-h-[800px] md:min-h-[900px] md:h-[900px] py-12 md:py-24 flex flex-col items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 z-0 w-full max-w-full h-full object-cover object-center"
        />
        <img
          src={borderImage}
          alt=""
          aria-hidden
          className="absolute inset-0 z-0 w-full max-w-full h-full object-cover object-center mt-[300px] sm:mt-[400px] md:mt-[500px] scale-150 sm:scale-125 md:scale-100 pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        />
        <div className="absolute -bottom-[50px] left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -z-20" />
        <div className="absolute inset-0 stars-bg z-0" />

        <div className="max-w-5xl mx-auto text-center mt-[-180px] sm:mt-[-200px] md:mt-[-240px] px-4 sm:px-6 relative z-40 flex-1 flex flex-col justify-center overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-2 mt-4 sm:mt-6 px-2 sm:px-4 text-[42px] sm:text-[60px] md:text-[87.34px] leading-[1.4] sm:leading-[1.3] md:leading-[1.25] tracking-tight"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              opacity: 1,
            }}
          >
            <span className="block">Brandefyn</span>
            <span className="relative inline-block mt-1 sm:mt-2 md:mt-3 mr-2 sm:mr-4">
              Blogs
              <img
                src={amazonLine}
                alt=""
                aria-hidden
                className="absolute left-0 w-full max-w-full h-auto object-contain pointer-events-none"
                style={{ top: "0.1.2em" }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed mt-6"
          >
            Insights, strategies, and updates to help you grow on Amazon.
          </motion.p>
        </div>
      </div>

      <div className="py-24 purple-glow-bg">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-shadow-lg leading-tight tracking-tight mb-8">
              Latest Posts
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap p-4 rounded-xl bg-white/5 border border-white/10">
              <form onSubmit={handleSearch} className="flex gap-2 flex-1 min-w-0 max-w-md">
                <input
                  type="search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search posts…"
                  className="flex-1 min-w-0 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus-visible:ring-2 focus-visible:ring-white/30"
                  aria-label="Search posts"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg border border-white/50 text-white hover:bg-white/10 transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
                >
                  Search
                </button>
              </form>
              <select
                value={categoryId ?? ""}
                onChange={(e) => setCategoryId(e.target.value === "" ? null : Number(e.target.value))}
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50 focus-visible:ring-2 focus-visible:ring-white/30 max-w-xs"
                aria-label="Filter by category"
              >
                <option value="">All categories</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center lg:justify-items-start">
            {loading &&
              [...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-full rounded-2xl border border-white/20 bg-white/[0.06] shadow-lg shadow-black/20 animate-pulse"
                  style={{
                    maxWidth: "409px",
                    minHeight: "441px",
                    padding: "15px",
                  }}
                >
                  <div className="w-full h-48 sm:h-52 md:h-56 lg:h-[258px] rounded-2xl bg-white/10 mb-6" />
                  <div className="h-6 w-3/4 bg-white/10 rounded mb-4" />
                  <div className="h-4 w-full bg-white/10 rounded" />
                  <div className="h-4 w-5/6 bg-white/10 rounded mt-2" />
                </div>
              ))}

            {!loading && error && (
              <div className="col-span-full text-center py-12">
                <p className="text-white/90 text-lg mb-4">{error}</p>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="px-6 py-2 rounded-full border border-white/50 text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
                >
                  Try again
                </button>
              </div>
            )}

            {!loading && !error && posts.length === 0 && (
              <div className="col-span-full text-center py-12 text-white/80 text-lg">
                {searchQuery || categoryId !== null
                  ? "No posts match your filters. Try a different search or category."
                  : "No posts yet. Check back soon."}
              </div>
            )}

            {!loading &&
              !error &&
              posts.map((post, index) => {
                const imgUrl = getFeaturedImageUrl(post);
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="relative flex flex-col w-full transition-all duration-300 border border-white/20 rounded-2xl bg-white/[0.06] shadow-lg shadow-black/20 hover:border-white/40 hover:shadow-xl hover:shadow-black/30"
                    style={{
                      maxWidth: "409px",
                      minHeight: "441px",
                      padding: "15px",
                    }}
                  >
                    <Link
                      to={`/blogs/${post.slug}`}
                      className="flex flex-col flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-2xl"
                    >
                      <motion.div
                        className="relative w-full mb-4 flex justify-center overflow-hidden rounded-2xl bg-white/10"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {imgUrl ? (
                          <LazyImage
                            src={imgUrl}
                            alt={stripHtml(post.title.rendered)}
                            className="rounded-2xl object-cover w-full max-w-[379px] h-48 sm:h-52 md:h-56 lg:h-[258px]"
                          />
                        ) : (
                          <div className="w-full max-w-[379px] h-48 sm:h-52 md:h-56 lg:h-[258px] rounded-2xl bg-white/10 flex items-center justify-center text-white/50 text-sm">
                            No image
                          </div>
                        )}
                      </motion.div>
                      <div className="flex-1 flex flex-col px-2">
                        {getPostTermNames(post).length > 0 && (
                          <p className="text-white/60 text-xs mb-2 flex flex-wrap gap-1">
                            {getPostTermNames(post).map((name) => (
                              <span
                                key={name}
                                className="px-2 py-0.5 rounded-lg bg-white/10"
                              >
                                {name}
                              </span>
                            ))}
                          </p>
                        )}
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 text-shadow-lg line-clamp-2">
                          {stripHtml(post.title.rendered)}
                        </h3>
                        <p className="text-base md:text-lg text-white/85 leading-relaxed line-clamp-3 mb-3">
                          {stripHtml(post.excerpt.rendered)}
                        </p>
                        <p className="text-white/60 text-sm mt-auto">
                          {formatDate(post.date)}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
          </div>

          {!loading && !error && posts.length > 0 && page < totalPages && (
            <div className="mt-12 text-center">
              <p className="text-white/70 text-sm mb-4">
                Showing {posts.length} of {total} posts
              </p>
              <button
                type="button"
                onClick={loadMore}
                disabled={loadingMore}
                className="px-8 py-3 rounded-full border border-white/50 text-white hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
              >
                {loadingMore ? "Loading…" : "Load more"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
