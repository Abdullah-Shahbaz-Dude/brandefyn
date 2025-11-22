import { motion } from "framer-motion";
import AnimatedCounter from "../ui/AnimatedCounter";
import Button from "../ui/Button";
import { METRICS } from "../../utils/constants";

export default function Metrics() {
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
            Our Numbers Speak
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: index * 0.1,
              }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl font-bold text-primary mb-6 glow-purple-hover">
                <AnimatedCounter end={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-xl md:text-2xl text-white font-bold">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.4,
          }}
          className="text-center"
        >
          <a href="#free-audit">
            <Button size="lg" className="text-lg px-8 py-4">
              Get Free Audit →
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
