import { motion } from "framer-motion";
import { CASE_STUDIES } from "../../utils/constants";

import pmBefore from "../../assets/home/before-after/pm-1.png";
import pmAfter from "../../assets/home/before-after/pm-2.png";
import ppcBefore from "../../assets/home/before-after/ppc-1.png";
import ppcAfter from "../../assets/home/before-after/ppc-2.png";
import salesBefore from "../../assets/home/before-after/sales-1.png";
import salesAfter from "../../assets/home/before-after/sales-2.png";

const caseStudyImages = {
  1: { before: pmBefore, after: pmAfter },
  2: { before: ppcBefore, after: ppcAfter },
  3: { before: salesBefore, after: salesAfter },
};

export default function BeforeAfter() {
  return (
    <section className="relative py-24 purple-glow-bg overflow-hidden">
      {/* Purple Glow Orbs - Bottom extending into VideoSalesLetter below for seamless transition - Reduced intensity */}
      <div className="absolute left-0 -bottom-20 w-[500px] h-[500px] bg-primary/12 rounded-full blur-[120px] -z-10" />
      <div className="absolute right-0 -bottom-30 w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client Before & After Results
          </h2>
          <p className="text-base text-white">
            We Work With New & Established Accounts
          </p>
        </motion.div>

        {/* First Row: Large Before/After Image Cards */}
        <div className="mb-12">
          <div
            className="rounded-[35px] border border-[#828282] p-8 md:p-12"
            style={{ borderColor: "rgb(130, 130, 130)" }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {CASE_STUDIES.slice(0, 1).map((study) => {
                const images =
                  caseStudyImages[study.id as keyof typeof caseStudyImages];
                if (!images) return null;

                return (
                  <>
                    {/* Before Card */}
                        <p className="text-white text-xl  font-semibold text-center">
                          Before
                        </p>
                        {/* After Card */}
                        <p className="text-white text-xl font-semibold text-center">
                          After
                        </p>
              
                    <motion.div
                      key={`${study.id}-before`}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative min-w-0 "
                    >
                      <div className="table-card rounded-[36px] p-6 relative">
                        <div className="relative">
                          <img
                            src={images.before}
                            alt={`${study.title} - Before`}
                            className="w-full h-[290px] object-cover rounded-[23px]"
                          />
                        </div>
                      </div>
                    </motion.div>  

                    <motion.div
                      key={`${study.id}-after`}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="relative min-w-0"
                    >
                      <div className="table-card rounded-[36px] p-6 relative overflow-hidden">
                        <div className="relative">
                          <img
                            src={images.after}
                            alt={`${study.title} - After`}
                            className="w-full h-[290px] object-cover rounded-[23px]"
                          />
                          {/* Purple Ellipse Decoration */}
                          <svg
                            className="absolute top-4 right-4 w-[138px] h-[70px]"
                            viewBox="0 0 138 70"
                            fill="none"
                            style={{
                              transform: "rotate(7.2deg)",
                            }}
                          >
                            <ellipse
                              cx="69"
                              cy="35"
                              rx="68"
                              ry="34"
                              stroke="rgba(185, 169, 254, 1)"
                              strokeWidth="1"
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* Second Row: Glass Cards with Price Tags */}
        <div className="mb-12">
          <div
            className="rounded-[35px] border border-[#828282] p-8 md:p-12"
            style={{ borderColor: "rgb(130, 130, 130)" }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {CASE_STUDIES.slice(0, 1).map((study) => {
                const images =
                  caseStudyImages[study.id as keyof typeof caseStudyImages];
                if (!images) return null;

                return (
                  <>
                    {/* Before Card with Price */}
                    <div className="flex flex-col gap-2"> 
                    <p className="text-white text-xl font-semibold text-center">
                          Before
                    </p>
                      <p className="text-white text-xl font-semibold text-center">
                        PPC Sales = $32K
                      </p>
                    </div>

                    <div className="flex flex-col gap-2"> 
                    <p className="text-white text-xl font-semibold text-center">
                          After
                    </p>
                      <p className="text-white text-xl font-semibold text-center">
                        PPC Sales = $70K
                      </p>
                    </div>

                    <motion.div
                      key={`${study.id}-before-price`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <div className="table-card rounded-[36px] p-6 relative overflow-hidden">
                        
                        <div className="relative">
                          <img
                            src={images.before}
                            alt={`${study.title} - Before`}
                            className="w-full h-[238px] object-cover rounded-[18px]"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* After Card with Price */}
                    <motion.div
                      key={`${study.id}-after-price`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="relative"
                    >
                      <div className="table-card rounded-[36px] p-6 relative overflow-hidden">
                        
                        <div className="relative">
                          <img
                            src={images.after}
                            alt={`${study.title} - After`}
                            className="w-full h-[238px] object-cover rounded-[18px]"
                          />
                          {/* Purple Ellipse Decoration */}
                          <svg
                            className="absolute top-4 right-4 w-[77px] h-[39px]"
                            viewBox="0 0 77 39"
                            fill="none"
                            style={{
                              transform: "rotate(7.2deg)",
                            }}
                          >
                            <ellipse
                              cx="38.5"
                              cy="19.5"
                              rx="37.5"
                              ry="18.5"
                              stroke="rgba(185, 169, 254, 1)"
                              strokeWidth="6"
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* Third Row: Glass Cards with Price Tags */}
        <div>
          <div
            className="rounded-[35px] border border-[#828282] p-8 md:p-12"
            style={{ borderColor: "rgb(130, 130, 130)" }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {CASE_STUDIES.slice(1, 2).map((study) => {
                const images =
                  caseStudyImages[study.id as keyof typeof caseStudyImages];
                if (!images) return null;

                return (
                  <>
                    {/* Before Card with Price */}


                    <div className="flex flex-col gap-2"> 
                    <p className="text-white text-xl font-semibold text-center">
                          Before
                    </p>
                      <p className="text-white text-xl font-semibold text-center">
                       $283,440 is sales of 2024
                      </p>
                    </div>

                    <div className="flex flex-col gap-2"> 
                    <p className="text-white text-xl font-semibold text-center">
                          After
                    </p>
                      <p className="text-white text-xl font-semibold text-center">
                        $955,284 is sales of 2025
                      </p>
                    </div>
                    <motion.div
                      key={`${study.id}-before-price`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <div className="table-card rounded-[36px] p-6 relative overflow-hidden">
                        <div className="relative">
                          <img
                            src={images.before}
                            alt={`${study.title} - Before`}
                            className="w-full h-[310px] object-cover rounded-[18px]"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* After Card with Price */}
                    <motion.div
                      key={`${study.id}-after-price`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="relative"
                    >
                      <div className="table-card rounded-[36px] p-6 relative overflow-hidden">
                        
                        <div className="relative">
                          <img
                            src={images.after}
                            alt={`${study.title} - After`}
                            className="w-full h-[310px] object-cover rounded-[18px]"
                          />
                          {/* Purple Ellipse Decoration */}
                          <svg
                            className="absolute top-4 right-4 w-[77px] h-[39px]"
                            viewBox="0 0 77 39"
                            fill="none"
                            style={{
                              transform: "rotate(7.2deg)",
                            }}
                          >
                            <ellipse
                              cx="38.5"
                              cy="19.5"
                              rx="37.5"
                              ry="18.5"
                              stroke="rgba(185, 169, 254, 1)"
                              strokeWidth="6"
                            />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button
            className="px-6 py-3 bg-[#1F1446] border border-white rounded-md text-white font-semibold text-sm hover:bg-primary/20 btn-glow transition-all"
            style={{ backgroundColor: "rgb(31, 20, 70)" }}
          >
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}
