import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REVIEWS, CLIENT_TESTIMONIALS } from "../../utils/constants";
import trustpilotLogo from "../../assets/home/testimonials/images.png";
import googleLogo from "../../assets/home/testimonials/Google_2015_logo.svg";

const logoMap: Record<string, string> = {
  Trustpilot: trustpilotLogo,
  Google: googleLogo,
};

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % CLIENT_TESTIMONIALS.length
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-lg bg-gradient-to-br ${
                index % 2 === 0
                  ? "from-gray-900 to-gray-800"
                  : "from-gray-900 via-purple-950/30 to-gray-800"
              } border border-gray-800 shadow-xl shadow-purple-500/20 p-10 text-center min-h-[280px] hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-500/50 transition-all hover:scale-105`}
            >
              <div className="flex justify-center mb-6">
                <img
                  src={logoMap[review.platform]}
                  alt={`${review.platform} logo`}
                  className="h-12 md:h-16 w-auto object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    (e.target as HTMLImageElement).style.display = "none";
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent && !parent.querySelector(".fallback-text")) {
                      const fallback = document.createElement("h3");
                      fallback.className =
                        "text-2xl md:text-3xl font-bold text-white fallback-text";
                      fallback.textContent = review.platform;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-6xl md:text-7xl font-bold text-white glow-purple-hover">
                  {review.rating}
                </span>
                <div className="flex text-yellow-400 text-4xl">
                  {"⭐".repeat(review.stars)}
                </div>
              </div>
              <p className="text-white font-bold text-lg">
                {review.count.toLocaleString()} reviews
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sliding Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mt-16"
        >
          <div className="relative rounded-xl bg-gradient-to-br from-gray-900 via-purple-950/30 to-gray-800 border border-gray-800 shadow-xl shadow-purple-500/20 p-10 overflow-hidden h-[350px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col h-full"
              >
                <div className="flex-grow flex items-center">
                  <p className="text-xl md:text-2xl text-white italic font-semibold leading-relaxed">
                    "{CLIENT_TESTIMONIALS[currentIndex].quote}"
                  </p>
                </div>
                <div className="flex items-center gap-5 mt-auto pt-6">
                  <div className="w-14 h-14 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {CLIENT_TESTIMONIALS[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">
                      {CLIENT_TESTIMONIALS[currentIndex].name}
                    </p>
                    <p className="text-base text-white font-semibold">
                      {CLIENT_TESTIMONIALS[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {CLIENT_TESTIMONIALS.map((_, index) => (
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
        </motion.div>
      </div>
    </section>
  );
}
