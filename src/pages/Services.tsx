import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { SERVICES } from "../utils/constants";
import Button from "../components/ui/Button";
import ppcImage from "../assets/home/EMOJIES/ppc-removebg-preview.png";
import bmImage from "../assets/home/EMOJIES/Bm.png";
import launchImage from "../assets/home/EMOJIES/cpg.webp";

export default function ServicesPage() {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-lg">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-bold">
            Comprehensive Amazon management solutions to grow your CPG brand
          </p>
        </motion.div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl bg-gradient-to-br ${
                index % 2 === 0
                  ? "from-gray-900 to-gray-800"
                  : "from-gray-900 via-purple-950/30 to-gray-800"
              } border border-gray-800 shadow-xl shadow-purple-500/20 p-10 md:p-14 hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-500/50 transition-all hover:scale-[1.01] relative overflow-hidden`}
              style={
                service.title === "Amazon PPC Management"
                  ? {
                      backgroundImage: `url(${ppcImage})`,
                      backgroundSize: "450px 450px",
                      backgroundPosition: "center right",
                      backgroundRepeat: "no-repeat",
                      backgroundBlendMode: "overlay",
                    }
                  : service.title === "Brand Management"
                  ? {
                      backgroundImage: `url(${bmImage})`,
                      backgroundSize: "450px 450px",
                      backgroundPosition: "center right",
                      backgroundRepeat: "no-repeat",
                      backgroundBlendMode: "overlay",
                    }
                  : service.title === "Launch CPG Brand"
                  ? {
                      backgroundImage: `url(${launchImage})`,
                      backgroundSize: "450px 450px",
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-xl md:text-2xl text-white mb-10 font-semibold">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-4">
                      <div className="w-5 h-5 bg-purple-500 mt-0.5 flex-shrink-0 flex items-center justify-center shadow-lg shadow-purple-500/50">
                        <FaCheck className="text-white text-xs font-bold" />
                      </div>
                      <span className="text-white font-semibold text-lg leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button size="lg">Get Started</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-shadow-lg">
            Ready to grow your Amazon business?
          </h3>
          <Button size="lg" className="text-lg px-10 py-5">
            Book a Free Strategy Call
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
