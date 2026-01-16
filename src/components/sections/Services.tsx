import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { SERVICES } from "../../utils/constants";
import ppcImage from "../../assets/home/EMOJIES/ppc-removebg-preview.png";
import bmImage from "../../assets/home/EMOJIES/Bm.png";
import launchImage from "../../assets/home/EMOJIES/cpg.webp";

export default function Services() {
  return (
    <section className="relative py-24 purple-glow-bg-medium overflow-x-hidden overflow-y-visible">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-white font-bold">
            Comprehensive Amazon management solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl bg-gradient-to-br ${
                index % 2 === 0
                  ? "from-gray-900 to-gray-800"
                  : "from-gray-900 via-purple-950/30 to-gray-800"
              } border border-gray-800 shadow-xl shadow-purple-500/20 p-10 min-h-[320px] card-glow-hover hover:border-purple-500/50 transition-all hover:scale-[1.02] relative overflow-hidden`}
              style={
                service.title === "Amazon PPC Management"
                  ? {
                      backgroundImage: `url(${ppcImage})`,
                      backgroundSize: "350px 350px",
                      backgroundPosition: "center right",
                      backgroundRepeat: "no-repeat",
                      backgroundBlendMode: "overlay",
                    }
                  : service.title === "Brand Management"
                  ? {
                      backgroundImage: `url(${bmImage})`,
                      backgroundSize: "350px 350px",
                      backgroundPosition: "center right",
                      backgroundRepeat: "no-repeat",
                      backgroundBlendMode: "overlay",
                    }
                  : service.title === "Launch CPG Brand"
                  ? {
                      backgroundImage: `url(${launchImage})`,
                      backgroundSize: "350px 350px",
                      backgroundPosition: "center right",
                      backgroundRepeat: "no-repeat",
                      backgroundBlendMode: "overlay",
                    }
                  : {}
              }
            >
              {(service.title === "Amazon PPC Management" ||
                service.title === "Brand Management" ||
                service.title === "Launch CPG Brand") && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90 pointer-events-none"></div>
              )}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white mb-8 font-semibold text-lg">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-4">
                      <div className="w-5 h-5 bg-purple-500 mt-0.5 flex-shrink-0 flex items-center justify-center shadow-lg shadow-purple-500/50">
                        <FaCheck className="text-white text-xs font-bold" />
                      </div>
                      <span className="text-white font-semibold leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
