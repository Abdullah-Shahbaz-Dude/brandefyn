import { useState } from "react";
import { motion } from "framer-motion";

const IMAGE_EXT = /\.(jpg|jpeg|png|svg|webp|avif)$/i;

const logo2Modules = import.meta.glob<{ default: string }>("../../assets/home/logo2/*.{jpg,jpeg,png,svg,webp,avif}", {
  eager: true,
});

const CLIENT_LOGOS = Object.entries(logo2Modules)
  .filter(([path]) => IMAGE_EXT.test(path))
  .map(([path, module]) => {
    const name = path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "Client";
    return { name, src: module.default };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const MARQUEE_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function TrustedBy() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-24 purple-glow-bg-subtle px-0">
      {/* Additional glow for smooth transition from Metrics - Reduced intensity */}
      {/* Glow extending into Testimonials section - full width from edges */}
      <div className="w-full px-0">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className=" text-white font-bold text-4xl">Clients we work with</p>
        </motion.div>

        {/* Logo Marquee - infinite horizontal scroll */}
        <div
          className="w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex items-center gap-8 md:gap-12 flex-shrink-0 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: isPaused ? 1e6 : 30,
                ease: "linear",
              },
            }}
          >
            {MARQUEE_LOGOS.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 sm:h-12 md:h-16 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
