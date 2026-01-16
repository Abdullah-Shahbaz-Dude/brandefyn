import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "../ui/Modal";
import VideoPlayer from "../ui/VideoPlayer";
import { TESTIMONIALS, CLIENT_TESTIMONIALS } from "../../utils/constants";
import testimonialImg1 from "../../assets/images/testimonials/testimonial-1.jpg";
import testimonialImg2 from "../../assets/images/testimonials/testimonial-2.jpg";
import testimonialImg3 from "../../assets/images/testimonials/testimonial-3.jpg";

const testimonialImages = [testimonialImg1, testimonialImg2, testimonialImg3];

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    isYouTube: boolean;
  } | null>(null);
  
  // Carousel state management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Use CLIENT_TESTIMONIALS for text testimonials
  const testimonials = CLIENT_TESTIMONIALS.slice(0, 3).map((testimonial, index) => ({
    ...testimonial,
    image: testimonialImages[index] || testimonialImages[0],
    video: TESTIMONIALS[index]?.video || "",
    isYouTube: TESTIMONIALS[index]?.isYouTube || false,
  }));

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // Calculate card width and offset for transform
  // On desktop: show full card (973px) + peek of next card (~300px) = ~1273px visible
  // On mobile: show single card
  const cardWidthDesktop = 973; // md:w-[973px]
  const gap = 24; // gap-6 = 24px
  const translateX = currentIndex * (cardWidthDesktop + gap);

  return (
    <section className="relative py-24 purple-glow-bg-medium "> 
      {/* Purple Glow Orbs - Right Side, extending into Reviews section - Reduced intensity */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/12 rounded-full blur-[120px] -z-10" />
      <div className="absolute right-0 -bottom-20 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[120px] -z-10" />
      {/* Additional glow for connection with TrustedBy */}
      <div className="absolute -top-20 left-0 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Testimonials
          </h2>
        </motion.div>

        {/* Auto-Playing Carousel */}
        <div 
          className="relative overflow-hidden w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Container that shows full card on mobile, full card + peek on desktop */}
          <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: -translateX }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ willChange: 'transform' }}
            >
              {testimonials.map((testimonial) => (
                <div
                      key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-[973px] md:max-w-[calc(100vw-2rem)]"
                >
                {/* Outer Container with Border */}
                <div className="rounded-[35px] border border-[#828282] p-6 min-h-[441px] card-glow-hover w-full">
                  {/* Horizontal Layout: Image Left, Text Right */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Section - Video Thumbnail */}
                    <div className="flex-shrink-0">
                      <div className="glass-card glass-card-glow rounded-[36px] p-6 relative overflow-hidden">
                        <div className="relative w-full md:w-[440px] h-[340px]">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover rounded-[23px]"
                          />
                          {/* Play Button Overlay - Purple Ellipse with White Triangle */}
                          {testimonial.video && (
                            <div
                              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/30 transition-colors"
                        onClick={() =>
                          setSelectedVideo({
                            url: testimonial.video,
                            isYouTube: testimonial.isYouTube || false,
                          })
                        }
                      >
                              {/* Purple Ellipse */}
                              <div className="w-20 h-20 bg-[#271E51] rounded-full flex items-center justify-center relative">
                                {/* White Triangle Play Icon */}
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  className="ml-1"
                                >
                                  <path
                                    d="M6 4L14 9L6 14V4Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Text Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      {/* Headline */}
                      <div className="mb-4">
                        <h3 className="text-white font-bold text-lg md:text-xl leading-tight">
                          {testimonial.headline || "Client Success Story"}
                        </h3>
                      </div>

                      {/* Large Quote Icon */}
                      <div className="mb-4">
                        <svg
                          className="w-12 h-12 text-white opacity-50"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                          </div>

                      {/* Testimonial Quote Text */}
                      <div className="mb-6 flex-1">
                        <p className="text-white text-base leading-relaxed">
                          {testimonial.quote}
                        </p>
                        </div>

                      {/* Author Attribution */}
                      <div className="mt-auto">
                        <p className="text-white font-bold text-sm mb-1">
                            {testimonial.name}
                        </p>
                        <p className="text-white text-xs opacity-70">
                            {testimonial.company}
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))}
                    </motion.div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8 h-2"
                    : "bg-white/30 w-2 h-2 hover:bg-white/50"
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
