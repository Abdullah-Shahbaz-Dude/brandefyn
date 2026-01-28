import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "../assets/images/hero/hero-2.png";
import LazyImage from "../components/ui/LazyImage";
import amazonLine from '../assets/images/hero/hero-amzon.png';
import borderImage from '../assets/images/hero/border.svg';

export default function ResourcesPage() {
  const [images, setImages] = useState<Record<string, string>>({});

  // Dynamic imports for code splitting
  useEffect(() => {
    const loadImages = async () => {
      const [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
      ] = await Promise.all([
        import('../assets/images/caseStudy/caseStudy-1.png'),
        import('../assets/images/caseStudy/caseStudy-2.png'),
        import('../assets/images/caseStudy/caseStudy-3.png'),
        import('../assets/images/caseStudy/caseStudy-4.png'),
        import('../assets/images/caseStudy/caseStudy-5.png'),
        import('../assets/images/caseStudy/caseStudy-6.png'),
        import('../assets/images/caseStudy/caseStudy-7.png'),
      ]);

      setImages({
        guide1: img1.default,
        guide2: img2.default,
        guide3: img3.default,
        card1: img6.default,
        card2: img7.default,
        card3: img4.default,
        card4: img5.default,
      });
    };

    loadImages();
  }, []);

  const guides = [
    {
      image: images.guide1,
      title: "Amazon PPC Mastery Guide",
      description:
        "Learn the fundamentals of Amazon PPC advertising and how to optimize your campaigns for maximum ROI.",
    },
    {
      image: images.guide2,
      title: "CPG Brand Launch Strategy",
      description:
        "A comprehensive guide for launching your CPG brand on Amazon successfully and scaling your business.",
    },
    {
      image: images.guide3,
      title: "Advanced Amazon SEO",
      description:
        "Discover proven strategies to improve your Amazon listing rankings and visibility to drive more sales.",
    },
  ];

  const gridCards = [
    {
      image: images.card1,
      heading1: "Card Title 1",
      heading2: "Card Subtitle 1",
    },
    {
      image: images.card2,
      heading1: "Card Title 2",
      heading2: "Card Subtitle 2",
    },
    {
      image: images.card3,
      heading1: "Card Title 3",
      heading2: "Card Subtitle 3",
    },
    {
      image: images.card4,
      heading1: "Card Title 4",
      heading2: "Card Subtitle 4",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[900px] min-h-screen  py-12 md:py-24 flex items-center">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 z-0 w-full h-full object-cover object-center left-0"
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

        <div className="container mx-auto px-4 max-w-[800px] w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-shadow-lg leading-tight mb-6">
              Amazon Growth Resources & Insights
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Actionable insights, proven strategies, and expert guidance to help you win on Amazon.
            </p>
            <img src={amazonLine} alt="Amazon Line" className="absolute top-[145px] left-[8%]   " />
          </motion.div>
        </div>
      </div>

      <div className="py-24 purple-glow-bg ">
        <div className="container mx-auto px-4 max-w-[1400px] ">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl w-[800px]  lg:text-6xl xl:text-7xl font-bold text-white text-shadow-lg leading-tight">
              Expert Guides to Master Amazon Ads
            </h1>
          </motion.div>

          {/* Guide Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center lg:justify-items-start">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className={`relative flex flex-col w-full transition-all duration-300 ${
                  index === 0
                    ? "bg-white/10 rounded-[35px] hover:bg-white/15"
                    : "border border-[#D9D9D9] rounded-[35px] hover:border-white/50"
                }`}
                style={{
                  maxWidth: "409px",
                  minHeight: "441px",
                  padding: "15px",
                }}
              >
                {/* Image Container */}
                <motion.div
                  className="relative w-full mb-6 flex justify-center overflow-hidden rounded-[20px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {guide.image && (
                    <LazyImage
                      src={guide.image}
                      alt={guide.title}
                      className="rounded-[20px] object-cover w-full"
                      style={{
                        maxWidth: "379px",
                        height: "258px",
                      }}
                    />
                  )}
                </motion.div>

                {/* Content */}
                <div className="flex-1 flex flex-col px-2">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 text-shadow-lg"
                  >
                    {guide.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="text-base md:text-lg text-white leading-relaxed font-semibold"
                  >
                    {guide.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full overflow-hidden py-12">
        <div className="container mx-auto px-4 max-w-[1400px] flex justify-center">
          <div
            className="relative"
            style={{
              width: "100%",
              maxWidth: "1280px",
              height: "438px",
              borderRadius: "50px",
              backgroundColor: "#281A47",
            }}
          >
            {/* Background Container with Stars and Dashed Lines */}
            <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ borderRadius: "50px" }}>
              {/* Dashed Line Decorative Elements */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ opacity: 0.3 }}
                viewBox="0 0 1280 438"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter id="glow-white">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {/* Top-left arc */}
                <path
                  d="M 0 50 Q 200 100, 400 80 Q 600 60, 800 100"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="1.5"
                  strokeDasharray="5, 3"
                  filter="url(#glow-white)"
                />
                {/* Bottom-left arc */}
                <path
                  d="M 0 350 Q 150 400, 300 380 Q 450 360, 600 400"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1.5"
                  strokeDasharray="6, 4"
                  filter="url(#glow-white)"
                />
                {/* Top-right arc */}
                <path
                  d="M 800 50 Q 1000 80, 1200 60 Q 1280 50, 1280 100"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.35)"
                  strokeWidth="1.5"
                  strokeDasharray="5, 3"
                  filter="url(#glow-white)"
                />
              </svg>

              {/* Stars - Using a simplified approach with key positioned stars */}
              {[
                { x: "10%", y: "20%", size: 5, opacity: 0.1 },
                { x: "15%", y: "35%", size: 5, opacity: 0.3 },
                { x: "25%", y: "15%", size: 5, opacity: 0.6 },
                { x: "30%", y: "45%", size: 5, opacity: 0.1 },
                { x: "40%", y: "25%", size: 5, opacity: 0.3 },
                { x: "45%", y: "50%", size: 5, opacity: 0.6 },
                { x: "55%", y: "30%", size: 5, opacity: 0.1 },
                { x: "60%", y: "15%", size: 5, opacity: 0.3 },
                { x: "70%", y: "40%", size: 5, opacity: 0.6 },
                { x: "75%", y: "20%", size: 5, opacity: 0.1 },
                { x: "85%", y: "35%", size: 5, opacity: 0.3 },
                { x: "90%", y: "50%", size: 5, opacity: 0.6 },
                { x: "20%", y: "60%", size: 7, opacity: 0.3 },
                { x: "35%", y: "70%", size: 7, opacity: 0.1 },
                { x: "50%", y: "65%", size: 7, opacity: 0.3 },
                { x: "65%", y: "75%", size: 7, opacity: 0.6 },
                { x: "80%", y: "60%", size: 7, opacity: 0.3 },
                { x: "5%", y: "50%", size: 2, opacity: 0.1 },
                { x: "12%", y: "75%", size: 2, opacity: 0.3 },
                { x: "22%", y: "80%", size: 2, opacity: 0.15 },
                { x: "38%", y: "85%", size: 2, opacity: 0.1 },
                { x: "52%", y: "80%", size: 2, opacity: 0.3 },
                { x: "68%", y: "85%", size: 2, opacity: 0.15 },
                { x: "78%", y: "75%", size: 2, opacity: 0.1 },
                { x: "88%", y: "65%", size: 2, opacity: 0.3 },
                { x: "95%", y: "40%", size: 2, opacity: 0.7 },
                { x: "8%", y: "10%", size: 2, opacity: 0.3 },
                { x: "18%", y: "5%", size: 2, opacity: 0.1 },
                { x: "28%", y: "8%", size: 2, opacity: 0.3 },
                { x: "42%", y: "12%", size: 2, opacity: 0.15 },
                { x: "58%", y: "8%", size: 2, opacity: 0.1 },
                { x: "72%", y: "5%", size: 2, opacity: 0.3 },
                { x: "82%", y: "10%", size: 2, opacity: 0.7 },
                { x: "92%", y: "15%", size: 2, opacity: 0.3 },
              ].map((star, index) => (
                <div
                  key={index}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: star.x,
                    top: star.y,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: star.opacity,
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                  }}
                />
              ))}
            </div>

            {/* CTA Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-shadow-lg leading-tight mb-6"
              >
                Ready to Boost Your <br />
                Amazon Sales?
              </motion.h2>

              {/* Descriptive Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg lg:text-xl text-white max-w-2xl mb-8 leading-relaxed"
              >
                Get a free audit of your Amazon ad campaigns and discover exactly what's holding your sales back. No risk, just actionable insights to scale your brand.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#1a0b2e] border border-white/20 text-white rounded-full font-bold text-base md:text-lg tracking-wide btn-glow transition-all hover:border-white/40 hover:bg-[#24133a]"
                >
                  Let's Scale Your Amazon Brand
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 2x2 Card Grid Section */}
      <div className="relative w-fullpy-12 md:py-24">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] max-w-[1280px] mx-auto">
            {gridCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="rounded-[35px] border border-[#828282] bg-black p-[14px] hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col space-y-[34px]">
                  {/* Image */}
                  <div className="w-full h-[250px] md:h-[384px] rounded-[35px] overflow-hidden">
                    {card.image && (
                      <LazyImage
                        src={card.image}
                        alt={card.heading1}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="px-[33px] flex flex-col space-y-[35px]">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {card.heading1}
                    </h3>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight">
                      {card.heading2}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
