import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "../../utils/constants";

import pmBefore from "../../assets/home/before-after/pm-1.png";
import pmAfter from "../../assets/home/before-after/pm-2.png";
import ppcBefore from "../../assets/home/before-after/ppc-1.png";
import ppcAfter from "../../assets/home/before-after/ppc-2.png";
import salesBefore from "../../assets/home/before-after/sales-1.png";
import salesAfter from "../../assets/home/before-after/sales-2.png";
import blurHome from "../../assets/blur-home.svg";
import blur2 from "../../assets/blur-2.svg";

const caseStudyImages = {
  1: { before: pmBefore, after: pmAfter },
  2: { before: ppcBefore, after: ppcAfter },
  3: { before: salesBefore, after: salesAfter },
};

export default function BeforeAfter() {
  return (
    <section className="relative py-24 purple-glow-bg overflow-hidden mt-[20px]">
      {/* Background Blur Image */}
      <img 
        src={blurHome} 
        alt="" 
        className="absolute left-[60%] top-[15%] z-0 object-center" 
      />
  
      <div className="container mx-auto px-4 max-w-[1400px] relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-white mb-6"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: '72px',
              lineHeight: '74px',
              letterSpacing: '-2%',
              fontWeight: 400,
              color: '#FFFFFF',
              // textShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)',
            }}
          >
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
                        <p 
                          className="text-white text-center"
                          style={{
                            fontFamily: '"Inter Tight", Inter, system-ui, sans-serif',
                            fontSize: '26px',
                            lineHeight: '35px',
                            letterSpacing: '0%',
                            fontWeight: 400,
                            color: '#FFFFFF',
                          }}
                        >
                          Before
                        </p>
                        {/* After Card */}
                        <p 
                          className="text-white text-center"
                          style={{
                            fontFamily: '"Inter Tight", Inter, system-ui, sans-serif',
                            fontSize: '26px',
                            lineHeight: '35px',
                            letterSpacing: '0%',
                            fontWeight: 400,
                            color: '#FFFFFF',
                          }}
                        >
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
                        <div 
                          className="relative"
                          style={{
                            backgroundImage: `url(${blur2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        >
                          <img
                            src={images.before}
                            alt={`${study.title} - Before`}
                            className=" h-[290px] object-fill rounded-[23px]"
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
                            className=" h-[290px] object-fill rounded-[23px]"
                          />
                          {/* Purple Ellipse Decoration */}
                          <svg
                            className="absolute top-6 right-12 w-[138px] h-[70px]"
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
                    <p 
                      className="text-white text-center"
                      style={{
                        fontFamily: '"Inter Tight", Inter, system-ui, sans-serif',
                        fontSize: '26px',
                        lineHeight: '35px',
                        letterSpacing: '0%',
                        fontWeight: 400,
                        color: '#FFFFFF',
                      }}
                    >
                          Before
                    </p>
                      <p className="text-white text-xl font-semibold text-center">
                        PPC Sales = $32K
                      </p>
                    </div>

                    <div className="flex flex-col gap-2"> 
                    <p 
                      className="text-white text-center"
                      style={{
                        fontFamily: '"Inter Tight", Inter, system-ui, sans-serif',
                        fontSize: '26px',
                        lineHeight: '35px',
                        letterSpacing: '0%',
                        fontWeight: 400,
                        color: '#FFFFFF',
                      }}
                    >
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
                            src={ppcBefore}
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
                            src={ppcAfter}
                            alt={`${study.title} - After`}
                            className="w-full h-[228px] object-cover rounded-[18px]"
                          />
                          {/* Purple Ellipse Decoration */}
                          <svg
                            className="absolute top-[-10px] right-8 w-[138px] h-[70px]"
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
                              strokeWidth="3"
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
                    <p 
                      className="text-white text-center"
                      style={{
                        fontFamily: '"Inter Tight", Inter, system-ui, sans-serif',
                        fontSize: '26px',
                        lineHeight: '35px',
                        letterSpacing: '0%',
                        fontWeight: 400,
                        color: '#FFFFFF',
                      }}
                    >
                          Before
                    </p>
                      <p className="text-white text-xl font-semibold text-center">
                       $283,440 is sales of 2024
                      </p>
                    </div>

                    <div className="flex flex-col gap-2"> 
                    <p 
                      className="text-white text-center"
                      style={{
                        fontFamily: '"Inter Tight", Inter, system-ui, sans-serif',
                        fontSize: '26px',
                        lineHeight: '35px',
                        letterSpacing: '0%',
                        fontWeight: 400,
                        color: '#FFFFFF',
                      }}
                    >
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
                            src={salesBefore}
                            alt={`${study.title} - Before`}
                            className=" h-[310px] object-fill rounded-[18px]"
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
                            src={salesAfter}
                            alt={`${study.title} - After`}
                            className=" h-[310px] object-fill rounded-[18px]"
                          />
                          {/* Purple Ellipse Decoration */}
                          <svg
                            className="absolute top-[70px] right-12 w-[138px] h-[70px]"
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
                              strokeWidth="3"
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
          <Link
            to="/case-studies"
            className="px-6 py-3 bg-[#1F1446] border border-white rounded-md text-white font-semibold text-sm hover:bg-primary/20 btn-glow transition-all inline-block"
            style={{ backgroundColor: "rgb(31, 20, 70)" }}
          >
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
