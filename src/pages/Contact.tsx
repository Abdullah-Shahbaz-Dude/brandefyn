import { motion } from "framer-motion";
import heroImage from "../assets/images/hero/hero-2.png";
import borderImage from "../assets/images/hero/border.svg";
import TrustedBy from "../components/sections/TrustedBy";

export default function Contact() {
  return (
    <>
      {/* Hero Section - sized like home page */}
      <div className="relative w-full min-h-[700px] sm:min-h-[800px] md:min-h-[900px] md:h-[900px] flex flex-col items-center overflow-hidden bg-transparent py-12 md:py-24">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 z-0 w-full max-w-full h-full object-cover object-center"
        />
        <img
          src={borderImage}
          alt=""
          aria-hidden
          className="absolute inset-0 z-0 w-full max-w-full h-full object-cover object-center mt-[300px] sm:mt-[400px] md:mt-[500px] scale-150 sm:scale-125 md:scale-100 pointer-events-none"
          style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)' }}
        />
        <div className="absolute -bottom-[50px] left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -z-20" />
        <div className="absolute -bottom-[50px] left-0 w-full h-[200px] sm:h-[250px] md:h-[300px] z-10 pointer-events-none overflow-hidden">
          <img src={borderImage} alt="" aria-hidden className="w-full max-w-full h-full min-h-0 object-cover object-center" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center mt-[-180px] sm:mt-[-200px] md:mt-[-240px] px-4 sm:px-6 relative z-40 flex-1 flex flex-col justify-center overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-2 mt-4 sm:mt-6 px-2 sm:px-4 text-[42px] sm:text-[60px] md:text-[87.34px] leading-[1.4] sm:leading-[1.3] md:leading-[1.25] tracking-tight"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              opacity: 1,
            }}
          >
            <span className="block">Get in Touch</span>
            <span className="relative inline-block mt-1 sm:mt-2 md:mt-3 mr-2 sm:mr-4">With</span> Us.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed mt-6"
          >
            We're here to help you grow your Amazon brand. Whether you have questions, want a free audit, or are ready to start scaling, our team is just a message away.
          </motion.p>
        </div>

      </div>
        <TrustedBy />
    </>
  );
}
