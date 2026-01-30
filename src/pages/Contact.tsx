import { motion } from "framer-motion";
import heroImage from "../assets/images/hero/hero-2.png";
// import borderImage from '../assets/images/hero/border.svg';
import TrustedBy from "../components/sections/TrustedBy";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[700px] min-h-screen bg-transparent py-12 md:py-24 flex items-center">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 z-0 w-full h-full object-cover object-top left-0"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        
        {/* Additional Purple Glow Blur Effect - matching home page */}
        <div className="absolute -bottom-[0px] left-0 w-[500px] h-[500px] rounded-full -z-100" />
        
        {/* Border/Shadow transition effect */}
        {/* <div className="absolute -bottom-[90px] left-0 w-full h-[100px] z-10 pointer-events-none overflow-hidden">
          <img src={borderImage} alt="Border" className="w-full h-full object-cover object-center" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)' }} />
        </div> */}

        <div className="max-w-5xl mx-auto text-center mt-[-230px] px-6 relative z-10 flex-1 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-2 mt-6 px-4"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '87.34px',
              lineHeight: '27.69px',
              letterSpacing: '-2%',
              color: '#FFFFFF',
              opacity: 1
            }}
          >
            Get in Touch <br />
            <span className="relative inline-block mr-4 mt-[80px]">
              With   
            </span>
            Us.
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
