import { useState } from "react";
import { motion } from "framer-motion";
import logo1 from "../../assets/home/logo/logo-1.svg";
import logo2 from "../../../src/assets/home/logo/logo-2.svg";
import logo3 from "../../../src/assets/home/logo/logo-3.svg";
import logo4 from "../../../src/assets/home/logo/logo-4.svg";
import logo5 from "../../../src/assets/home/logo/logo-5.svg";
import logo6 from "../../../src/assets/home/logo/logo-6.svg";
import logo7 from "../../../src/assets/home/logo/logo-7.svg";

const CLIENT_LOGOS = [
  { name: "Client 1", src: logo1 },
  { name: "Client 2", src: logo2 },
  { name: "Client 3", src: logo3 },
  { name: "Client 4", src: logo4 },
  { name: "Client 5", src: logo5 },
  { name: "Client 6", src: logo6 },
  { name: "Client 7", src: logo7 },
];

const MARQUEE_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function TrustedBy() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-24 purple-glow-bg-subtle ">
      {/* Additional glow for smooth transition from Metrics - Reduced intensity */}
      {/* Glow extending into Testimonials section */}
      <div className="container  mx-auto max-w-[1400px] ">
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
                  className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
