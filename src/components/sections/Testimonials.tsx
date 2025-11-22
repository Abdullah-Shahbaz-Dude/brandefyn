import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal from "../ui/Modal";
import VideoPlayer from "../ui/VideoPlayer";
import VideoThumbnail from "../ui/VideoThumbnail";
import { TESTIMONIALS } from "../../utils/constants";

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    isYouTube: boolean;
  } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Testimonials / Case Studies
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all glow-purple-hover"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-white text-lg" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all glow-purple-hover"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-white text-lg" />
          </button>

          {/* Carousel */}
          <div ref={carouselRef} className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              <AnimatePresence mode="wait">
                {TESTIMONIALS.map((testimonial, index) => {
                  if (index !== currentIndex) return null;

                  return (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div
                        className={`rounded-xl bg-gradient-to-br ${
                          index % 2 === 0
                            ? "from-gray-900 to-gray-800"
                            : "from-gray-900 via-purple-950/30 to-gray-800"
                        } border border-gray-800 shadow-xl shadow-purple-500/20 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-500/50 transition-all hover:scale-[1.02] max-w-2xl mx-auto`}
                        onClick={() =>
                          setSelectedVideo({
                            url: testimonial.video,
                            isYouTube: testimonial.isYouTube || false,
                          })
                        }
                      >
                        {/* Video Thumbnail */}
                        <div className="relative aspect-video bg-black overflow-hidden">
                          {"videoSource" in testimonial &&
                          testimonial.videoSource ? (
                            <VideoThumbnail
                              src={testimonial.videoSource as string}
                              alt={`${testimonial.name} testimonial`}
                              className="w-full h-full"
                              fallback={testimonial.thumbnail}
                            />
                          ) : (
                            <img
                              src={testimonial.thumbnail}
                              alt={`${testimonial.name} testimonial`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              onError={(e) => {
                                // Fallback to hqdefault if maxresdefault fails
                                const target = e.target as HTMLImageElement;
                                const videoId =
                                  testimonial.video.match(
                                    /embed\/([^?]+)/
                                  )?.[1];
                                if (
                                  videoId &&
                                  target.src.includes("maxresdefault")
                                ) {
                                  target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                }
                              }}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 hover:from-black/70 hover:via-black/30 hover:to-black/10 transition-all flex items-center justify-center group">
                            {/* Animated rings */}
                            <motion.div
                              className="absolute w-24 h-24 border-2 border-purple-500/50 rounded-full"
                              animate={{
                                scale: [1, 1.3, 1.5],
                                opacity: [0.5, 0.3, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut",
                              }}
                            />
                            <motion.div
                              className="absolute w-20 h-20 border-2 border-purple-400/40 rounded-full"
                              animate={{
                                scale: [1, 1.2, 1.4],
                                opacity: [0.4, 0.2, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: 0.3,
                              }}
                            />

                            {/* Play button with icon */}
                            <motion.div
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.95 }}
                              className="relative z-10 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 glow-purple-hover group-hover:from-purple-400 group-hover:to-purple-500 transition-all"
                            >
                              <FaPlay className="text-white text-2xl ml-1" />
                              {/* Inner glow */}
                              <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-xl group-hover:bg-purple-300/30 transition-all" />
                            </motion.div>

                            {/* Corner decorations */}
                            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-purple-500/30 group-hover:border-purple-400/50 transition-all" />
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-500/30 group-hover:border-purple-400/50 transition-all" />
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-500/30 group-hover:border-purple-400/50 transition-all" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-500/30 group-hover:border-purple-400/50 transition-all" />

                            {/* Click to play text */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              whileHover={{ opacity: 1, y: 0 }}
                              className="absolute bottom-6 text-white text-sm font-semibold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
                            >
                              Click to Play
                            </motion.div>
                          </div>
                        </div>

                        {/* Testimonial Info */}
                        <div className="p-8">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {testimonial.name}
                          </h3>
                          <p className="text-base text-white mb-2 font-semibold">
                            {testimonial.company}
                          </p>
                          <p className="text-sm text-white font-medium">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-purple-500 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Video Modal */}
        <Modal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          className="max-w-4xl"
        >
          {selectedVideo && (
            <div className="w-full">
              {selectedVideo.isYouTube ? (
                <div className="relative aspect-video w-full">
                  <iframe
                    src={selectedVideo.url}
                    title="Testimonial video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <VideoPlayer
                  src={selectedVideo.url}
                  className="w-full"
                  autoplay
                />
              )}
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
