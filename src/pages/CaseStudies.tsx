import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/ui/Modal';
import { CASE_STUDIES_GRID, BENEFITS } from '../utils/constants';
import heroImage from '../assets/images/hero/hero.png';

export default function CaseStudiesPage() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof CASE_STUDIES_GRID[0] | null>(null);

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black purple-glow-bg py-12 md:py-24 flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        
        {/* Stars Background */}
        <div className="absolute inset-0 stars-bg z-0" />

        <div className="container mx-auto px-4 max-w-[1400px] w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-shadow-lg leading-tight mb-6">
              Results That Turn Amazon Ads Into Revenue
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              See how we've helped brands achieve remarkable growth, reduce costs, and dominate their categories on Amazon.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-black purple-glow-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto mb-16">
            {CASE_STUDIES_GRID.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[35px] border border-[#828282] bg-black p-[13px] hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col space-y-[34px]">
                  {/* Image */}
                  <div className="w-full h-[250px] md:h-[384px] rounded-[24px] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="px-4 md:px-5 flex flex-col space-y-[50px] md:space-y-[65px]">
                    <div className="flex flex-col space-y-[25px] md:space-y-[35px]">
                      {/* Title */}
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                        {study.title}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    {/* Learn More Button */}
                    <button
                      onClick={() => setSelectedCaseStudy(study)}
                      className="w-full md:w-[174px] h-[46px] bg-[#1F1446] border border-white rounded-[5px] text-white font-bold text-sm hover:bg-[#2a1d5c] transition-all duration-300 flex items-center justify-center"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Wide Case Study Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-[1278px] mx-auto"
          >
            <div className="rounded-[35px] border border-[#828282] bg-black p-[10px] hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col space-y-[34px]">
                {/* Image - 1258px × 384px in Figma */}
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[384px] rounded-[24px] overflow-hidden">
                  <img
                    src={CASE_STUDIES_GRID[0].image}
                    alt={CASE_STUDIES_GRID[0].title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Content - 1186px width with 36px left padding in Figma */}
                <div className="px-4 sm:px-6 md:px-9 flex flex-col space-y-[25px] md:space-y-[35px]">
                  <div className="flex flex-col space-y-[25px] md:space-y-[35px]">
                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {CASE_STUDIES_GRID[0].title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
                      {CASE_STUDIES_GRID[0].description}
                    </p>
                  </div>

                  {/* Learn More Button - 174px × 46px */}
                  <button
                    onClick={() => setSelectedCaseStudy(CASE_STUDIES_GRID[0])}
                    className="w-full sm:w-[174px] h-[46px] bg-[#1F1446] border border-white rounded-[5px] text-white font-bold text-sm hover:bg-[#2a1d5c] transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-24"
          >
            {/* Title and Description */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Amazon Brands We've Helped Scale Faster
              </h2>
              <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
                Every Amazon brand has unique challenges—our tailored strategies reduce waste, boost visibility, and drive sustainable revenue growth.
              </p>
            </div>

            {/* Three Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[15px] max-w-[1276px] mx-auto mb-12">
              {BENEFITS.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="w-full max-w-[409px] mx-auto"
                >
                  <div className="rounded-[35px] border border-[#D9D9D9] bg-black w-full min-h-[444px] md:h-[444px] flex flex-col items-center justify-start p-4 md:p-[15px]">
                    {/* Image - 379px × 354px (responsive) */}
                    <div className="w-full max-w-[379px] h-[250px] sm:h-[300px] md:h-[354px] rounded-[20px] overflow-hidden mb-4">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base md:text-lg font-bold text-white text-center">
                      {benefit.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel Indicator */}
            <div className="flex justify-center items-center gap-1">
              {/* Purple Active Bar */}
              <div className="w-[85px] h-[11px] bg-[#8E70EE] rounded-[10px]"></div>
              {/* Two White Dots */}
              <div className="w-[11px] h-[11px] bg-white/10 rounded-[10px]"></div>
              <div className="w-[11px] h-[11px] bg-white/10 rounded-[10px]"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for Case Study Details */}
      <Modal
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        className="max-w-4xl"
      >
        {selectedCaseStudy && (
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {selectedCaseStudy.title}
              </h2>
              <p className="text-lg text-white/80 mb-6">
                {selectedCaseStudy.description}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                <p className="text-white leading-relaxed">
                  {selectedCaseStudy.fullDetails.quote}
                </p>
              </div>

              {selectedCaseStudy.fullDetails.metrics && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Results</h3>
                  <div className="space-y-2">
                    {Object.entries(selectedCaseStudy.fullDetails.metrics).map(([key, value]) => (
                      <p key={key} className="text-white">
                        <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {value}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-gray-800 pt-6">
                <p className="font-bold text-white text-lg">— {selectedCaseStudy.fullDetails.author}</p>
                <p className="text-white">{selectedCaseStudy.fullDetails.role}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

