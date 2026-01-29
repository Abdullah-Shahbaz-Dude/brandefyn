import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowForward, MdBarChart, MdHandshake, MdHub } from "react-icons/md";
import heroImage from "../assets/images/hero/hero-2.png";
import LazyImage from "../components/ui/LazyImage";
import amazonLine from '../assets/images/hero/hero-amzon.png';
import borderImage from '../assets/images/hero/border.svg';

const serviceItems = [
  "SEO & Listing Optimization",
  "Catalog & Account Management",
  "Reporting & Analytics",
];

export default function ServicesPage() {
  const [images, setImages] = useState<Record<string, string>>({});

  // Dynamic imports for code splitting
  useEffect(() => {
    const loadImages = async () => {
      const [
        img1,
        img2,
        img3,
      ] = await Promise.all([
        import('../assets/images/Service-page/servicePage-1.png'),
        import('../assets/images/Service-page/serviceCard-2.png'),
        import('../assets/images/Service-page/serviceCard-3.png'),
      ]);

      setImages({
        service1: img1.default,
        service2: img2.default,
        service3: img3.default,
      });
    };

    loadImages();
  }, []);
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[700px] min-h-screen purple-glow-bg py-12 md:py-24 flex items-center">
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
        <div className="absolute -bottom-[50px] left-0 w-[500px] h-[500px] rounded-full blur-[120px] -z-20" />
        
        {/* Stars Background */}
        <div className="absolute inset-0 stars-bg z-0" />
        
        {/* Border/Shadow transition effect */}
        <div className="absolute -bottom-[50px] left-0 w-full h-[200px] z-10 pointer-events-none overflow-hidden">
          <img src={borderImage} alt="Border" className="w-full h-full object-cover object-center" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center  mt-[10px] px-6 relative z-10 flex-1 flex flex-col justify-center">
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
            Full-Service Amazon Ads  <br />& 
            
            <span className="relative inline-block mr-4 mt-[80px] mb-[60px]">
               Growth   
              <img src={amazonLine} alt="Amazon Line" className="absolute top-[60px] left-0" />
            </span>
            Management.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed mt-6"
          >
            We manage, optimize, and scale Amazon brands using data-driven advertising strategies built for consistent, profitable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <Link
              to="/contact"
              className="w-[202px] h-[46px] rounded-[5px] border border-white bg-[#1F1446] text-white font-bold text-sm flex items-center justify-center hover:bg-[#2a1d5c] transition-all duration-300"
            >
              Book a Strategy Call
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="py-24 purple-glow-bg relative min-h-screen">
        {/* Circular Wave Background Overlays */}
       
        <div className="container mx-auto px-4 max-w-[1280px] relative z-10">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 mb-12 md:mb-16"
          >
            {/* Left Side - Title and Description */}
            <div className="flex-1 w-full md:max-w-[729px] space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Everything You Need to Scale on Amazon
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
                We handle your Amazon advertising, optimization, and growth strategy end to end—so you can increase sales, reduce wasted ad spend, and scale profitably with confidence.
              </p>
            </div>

            {/* Right Side - CTA Button */}
            <div className="w-full md:w-auto md:flex-shrink-0">
              <button className="w-full md:w-[282px] h-[46px] bg-[#1F1446] border border-white rounded-[5px] text-white font-bold text-sm hover:bg-[#2a1d5c] transition-all duration-300 flex items-center justify-center">
                Let's Scale Your Amazon Brand
              </button>
            </div>
          </motion.div>

          {/* Main Service Section - Amazon Advertising Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-[23px] mb-8 md:mb-[43px]"
          >
            {/* Text Section with Arrow */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-4 md:space-y-[19px]">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#BA9FFF]">
                  Amazon Advertising Management
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed max-w-full md:max-w-[559px]">
                  We manage and optimize Sponsored Products, Brands, and Display ads to maximize sales and reduce wasted spend.
                </p>
              </div>
              {/* Arrow Icon */}
              <div className="flex-shrink-0 mt-2 hidden md:block">
                <MdArrowForward 
                  className="text-[#BA9FFF] text-4xl md:text-5xl" 
                  style={{ transform: 'rotate(45deg)' }}
                />
              </div>
            </div>

            {/* Image */}
            <div className="w-full h-[200px] sm:h-[250px] md:h-[313px] rounded-[20px] md:rounded-[30px] overflow-hidden">
              {images.service1 && (
                <LazyImage
                  src={images.service1}
                  alt="Amazon Advertising Management"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white mb-[43px]"></div>

          {/* Service List Section */}
          <div className="space-y-8 md:space-y-[43px]">
            
            {serviceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                    {item}
                  </h3>
                  {/* Arrow Icon */}
                  <MdArrowForward 
                    className="text-white text-3xl md:text-4xl lg:text-5xl flex-shrink-0" 
                    style={{ transform: 'rotate(45deg)' }}
                  />
                </div>
                {/* Divider - except for last item */}
                {index < serviceItems.length - 1 && (
                  <div className="border-t border-white mt-8 md:mt-[43px]"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-24 md:mt-32 relative w-screen left-[calc(-50vw+50%)]"
          >
            {/* Background with white overlay */}
            <div className="absolute inset-0 bg-white/10  w-full h-full -z-10"></div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 md:p-8 lg:p-12">
              
              {/* Left Side - Cards */}
              <div className="flex-1 w-full lg:max-w-[579px] space-y-6 ">
                {/* Top Card: Transparent Results */}
                <div className="glass-card rounded-[36px]  lg:p-12 bg-white/10 backdrop-blur-md relative min-h-[500px]">
                  <div className="flex flex-col sm:flex-row items-start sm:gap-6 md:gap-8 mb-6 justify-between">
                    {/* Purple Icon */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#7854FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <MdBarChart className="text-white text-2xl md:text-3xl" />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 space-y-3 md:space-y-4 lg:space-y-6">
                        Transparent Results for All Brands
                      <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white">
                      </h3>
                      <p className="text-sm md:text-base text-white leading-relaxed">
                        Success should be accessible to every Amazon seller, regardless of size or category. We remove inefficiencies so every brand can maximize sales and profitability.
                      </p>
                    </div>
                  </div>
                    {images.service3 && (
                      <LazyImage 
                        src={images.service3} 
                        alt="Transparent Results for All Brands" 
                        className="w-full mt-[50px] absolute bottom-0 left-0 right-0 object-cover rounded-b-[36px]" 
                        style={{ height: 'calc(100% - 180px)' }}
                      />
                    )}
                </div>

                {/* Bottom Card: Growth Isn't Optional */}
                <div className="glass-card rounded-[36px] p-6 md:p-8 lg:p-12 bg-white/10 backdrop-blur-md">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 mb-6">
                    {/* Purple Icon */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#7854FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <MdHandshake className="text-white text-2xl md:text-3xl" />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 space-y-3 md:space-y-4 lg:space-y-6">
                      <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white">
                        Growth Isn't Optional; It's Built-In
                      </h3>
                      <p className="text-sm md:text-base text-white leading-relaxed">
                        Our strategies are designed to optimize ads, listings, and campaigns seamlessly. We create data-driven, intuitive growth plans that make every client feel confident and empowered.
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  
                </div>
              </div>

              {/* Right Side - Title */}
              <div className="flex-1 w-full lg:max-w-[568px] flex items-center lg:items-start lg:pt-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight">
                  Our Vision for Profitable Amazon Growth
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Three Connected Cards Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-24 md:mt-32 relative min-h-[1000px] flex flex-col items-center py-12"
          >
            {/* Circular Wave Background Overlays */}
            <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border border-white/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] border border-white/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1800px] border border-white/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[2000px] h-[2000px] border border-white/5 rounded-full"></div>
            </div>

            {/* Title */}
            <div className="relative z-10 text-center mb-16 md:mb-40">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-4xl mx-auto text-white">
                How Our Automated Amazon Reports Work
              </h2>
            </div>

            {/* Cards Container with Absolute Positioning */}
            <div className="relative z-10 w-full max-w-6xl mx-auto h-[1000px] hidden lg:block">
              {/* Connecting Spiral Image - Connects all three cards */}
              {images.service2 && (
                <LazyImage 
                  src={images.service2} 
                  alt="Connecting spiral path" 
                  className="absolute inset-0 left-[43%] top-[23%] pointer-events-none z-[1] object-contain opacity-70" 
                />
              )}

              {/* Card 1 - Top Left, Rotated -6deg with upward tilt */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute top-[-50px] left-[10%] z-[10] w-full max-w-md"
                style={{ 
                  transform: 'perspective(1000px) rotateZ(-6deg) rotateX(-10deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="bg-[#1a1a1a] border border-white/15 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-sm" style={{ transform: 'rotate(-6deg)', width: '550px' }}>
                  <div className="w-14 h-14 bg-[#9d66ff] rounded-full flex items-center justify-center mb-8">
                    <MdHub className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 leading-tight text-white">
                    Automated Amazon Reports That Give You Instant, Actionable Insights
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Getting started takes only a few seconds. Simply connect your Amazon account to our platform, and our system begins evaluating your ad performance automatically—no technical setup required.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - Middle Right, Rotated 6deg */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute top-[420px] right-[10%] z-[30] w-full max-w-md"
                style={{ transform: 'rotate(6deg)' }}
              >
                <div className="bg-[#1a1a1a] w-[550px] border border-white/15 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-sm" style={{ transform: 'rotate(4deg)' }}>
                  <div className="w-14 h-14 bg-[#9d66ff] rounded-full flex items-center justify-center mb-8">
                    <MdHub className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 leading-tight text-white">
                    Real-Time Performance Tracking & Optimization
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Our automated system continuously monitors your campaigns, identifying opportunities and inefficiencies in real-time to maximize your ROI and reduce wasted ad spend.
                  </p>
                </div>
              </motion.div>

              

              {/* Card 3 - Bottom Left, Rotated -6deg */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute top-[815px] left-[12%] z-[40] w-full max-w-md"
                style={{ transform: 'rotate(-6deg)' }}
              >
                <div className="bg-[#1a1a1a] border border-white/15 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-sm" style={{ width: '550px', transform: 'rotate(6deg)' }}>
                  <div className="w-14 h-14 bg-[#9d66ff] rounded-full flex items-center justify-center mb-8">
                    <MdHub className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 leading-tight text-white">
                    Actionable Insights Delivered Automatically
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Receive comprehensive reports with clear recommendations. Every insight is designed to help you make data-driven decisions that drive growth and profitability.
                  </p>
                </div>
              </motion.div>

                {/* Connecting Spiral Image - Connects all three cards */}
                {images.service2 && (
                  <LazyImage 
                    src={images.service2} 
                    alt="Connecting spiral path" 
                    className="absolute inset-0 left-[50%] top-[68%] transform rotate-90 pointer-events-none z-[1] object-contain opacity-70" 
                  />
                )}
            </div>

            {/* Mobile Layout - Stacked Cards */}
            <div className="relative z-10 w-full max-w-6xl mx-auto space-y-8 lg:hidden">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="w-full max-w-md mx-auto"
              >
                <div className="bg-[#1a1a1a] border border-white/15 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-sm">
                  <div className="w-14 h-14 bg-[#9d66ff] rounded-full flex items-center justify-center mb-8">
                    <MdHub className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 leading-tight text-white">
                    Automated Amazon Reports That Give You Instant, Actionable Insights
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Getting started takes only a few seconds. Simply connect your Amazon account to our platform, and our system begins evaluating your ad performance automatically—no technical setup required.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="w-full max-w-md mx-auto"
              >
                <div className="bg-[#1a1a1a] border border-white/15 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-sm">
                  <div className="w-14 h-14 bg-[#9d66ff] rounded-full flex items-center justify-center mb-8">
                    <MdHub className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 leading-tight text-white">
                    Real-Time Performance Tracking & Optimization
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Our automated system continuously monitors your campaigns, identifying opportunities and inefficiencies in real-time to maximize your ROI and reduce wasted ad spend.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="w-full max-w-md mx-auto"
              >
                <div className="bg-[#1a1a1a] border border-white/15 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-sm">
                  <div className="w-14 h-14 bg-[#9d66ff] rounded-full flex items-center justify-center mb-8">
                    <MdHub className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-5 leading-tight text-white">
                    Actionable Insights Delivered Automatically
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Receive comprehensive reports with clear recommendations. Every insight is designed to help you make data-driven decisions that drive growth and profitability.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
