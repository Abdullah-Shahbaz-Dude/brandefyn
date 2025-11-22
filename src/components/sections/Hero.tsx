import { motion } from "framer-motion";
import { INDUSTRIES } from "../../utils/constants";
import heroVideo from "../../assets/home/hero/220941_small (1).mp4";
import HeroEmailForm from "../forms/HeroEmailForm";

export default function Hero() {
  return (
    <section className="relative bg-black py-24 lg:py-40 overflow-hidden min-h-screen flex items-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-[1]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-shadow-xl"
          >
            Guaranteed Growth or It's Free! Brandefyn guarantees a 20% boost in
            your Amazon CPG sales—or you don't pay.
          </motion.h1>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <HeroEmailForm />
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="text-3xl font-bold text-white text-shadow-lg">
              4.9
            </span>
            <div className="flex text-yellow-400 text-2xl">
              {"⭐".repeat(5)}
            </div>
            <span className="text-white font-semibold">
              out of 6,442 reviews
            </span>
          </motion.div>

          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-white mb-4 font-bold">We work with:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {INDUSTRIES.map((industry, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-950 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all hover:bg-gray-900"
                >
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
