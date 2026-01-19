import { motion } from "framer-motion";
import trustpilotLogo from "../../assets/home/testimonials/images.png";
import googleLogo from "../../assets/home/testimonials/Google_2015_logo.svg";

const reviews = [
  {
    platform: "Trustpilot",
    logo: trustpilotLogo,
    rating: "4.7",
    stars: 5,
    reviewCount: "6,442 reviews",
  },
  {
    platform: "Google",
    logo: googleLogo,
    rating: "4.9",
    stars: 5,
    reviewCount: "6,442 reviews",
  },
];

export default function Reviews() {
  return (
    <section className="relative py-24 purple-glow-bg-medium ">
      {/* Additional glows for seamless connection with Testimonials - Reduced intensity */}
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute -top-30 left-0 w-[550px] h-[550px] bg-purple-900/12 rounded-full blur-[120px] -z-10" />
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
            Reviews
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card  card-glow-hover rounded-[50px] p-8 text-center"
            >
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <img
                  src={review.logo}
                  alt={`${review.platform} logo`}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>

              {/* Rating and Stars */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-5xl md:text-6xl font-bold text-white">
                  {review.rating}
                </span>
                <div className="flex text-yellow-400 text-2xl">
                  {"⭐".repeat(review.stars)}
                </div>
              </div>

              {/* Review Count */}
              <p className="text-white text-sm font-semibold">
                {review.reviewCount}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
