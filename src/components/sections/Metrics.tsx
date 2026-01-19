import { motion } from "framer-motion";
import { METRICS } from "../../utils/constants";

export default function Metrics() {
  return (
    <section className="relative py-24 purple-glow-bg-subtle ">
      {/* Additional Purple Glow Orbs for seamless flow - Reduced intensity */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] -z-10" />
      {/* Glow extending into TrustedBy section */}
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
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
            Our Number Speaks
          </h2>
        </motion.div>

        {/* Glass Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card  card-glow-hover rounded-[36px] p-8 text-center"
            >
              <p className="text-[52px] font-extrabold leading-none mb-2 tracking-tighter text-white">
                {metric.prefix || ""}
                {metric.value}
                {metric.suffix}
              </p>
              <p className="text-[14px] font-semibold tracking-tight text-white">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
