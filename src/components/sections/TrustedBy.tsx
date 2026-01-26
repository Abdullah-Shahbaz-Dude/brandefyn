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

export default function TrustedBy() {
  return (
    <section className="relative py-24 purple-glow-bg-subtle ">
      {/* Additional glow for smooth transition from Metrics - Reduced intensity */}
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      {/* Glow extending into Testimonials section */}
      <div className="absolute -bottom-20 left-0 h-[550px] bg-purple-900/12 rounded-full blur-[120px] -z-10" />
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

        {/* Logo Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {CLIENT_LOGOS.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
