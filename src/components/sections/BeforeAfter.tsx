import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "../../utils/constants";

import pmBefore from "../../assets/home/before-after/pm-1.jpeg";
import pmAfter from "../../assets/home/before-after/pm-2.jpeg";
import ppcBefore from "../../assets/home/before-after/ppc-1.jpeg";
import ppcAfter from "../../assets/home/before-after/ppc-2.jpeg";
import salesBefore from "../../assets/home/before-after/sales-1.png";
import salesAfter from "../../assets/home/before-after/sales-2.png";
import blurHome from "../../assets/blur-home.svg";
import blur2 from "../../assets/blur-2.svg";

const caseStudyImages = {
  1: { before: pmBefore, after: pmAfter },
  2: { before: ppcBefore, after: ppcAfter },
  3: { before: salesBefore, after: salesAfter },
};

/** Set to true to show the third row (2024/2025 sales). */
const SHOW_SALES_2024_2025_ROW = false;

export default function BeforeAfter() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 purple-glow-bg overflow-hidden mt-4 md:mt-[20px]">
      {/* Background Blur Image - responsive: smaller/centered on mobile, 70% on desktop */}
      <img
        src={blurHome}
        alt=""
        className="absolute left-[30%] top-[10%] w-full max-w-[220px] sm:left-[5%] sm:top-[12%] sm:max-w-[320px] md:left-[70%] md:top-[15%] md:max-w-[min(100%,500px)] z-0 object-left object-contain h-auto pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2
            className="text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              letterSpacing: "-0.02em",
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            Client Before & After Results
          </h2>
          <p className="text-base text-white">
            We Work With New & Established Accounts
          </p>
        </motion.div>

        {/* First Row: Large Before/After Image Cards */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div
            className="rounded-2xl sm:rounded-3xl md:rounded-[35px] border border-[#828282] p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden"
            style={{ borderColor: "rgb(130, 130, 130)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-8 min-w-0">
              {CASE_STUDIES.slice(0, 1).map((study) => {
                const images =
                  caseStudyImages[study.id as keyof typeof caseStudyImages];
                if (!images) return null;

                return (
                  <>
                    {/* Before label + subtitle */}
                    <div className="flex flex-col gap-2 order-1 sm:order-none">
                      <p
                        className="text-white text-center text-lg sm:text-xl md:text-2xl leading-tight min-w-0"
                        style={{
                          fontFamily:
                            '"Inter Tight", Inter, system-ui, sans-serif',
                          fontWeight: 400,
                          color: "#FFFFFF",
                        }}
                      >
                        Before
                      </p>
                      <p className="text-white text-base sm:text-lg md:text-xl font-semibold text-center">
                        Before: $1.2M Sales/year
                      </p>
                    </div>

                    {/* After label + subtitle */}
                    <div className="flex flex-col gap-2 order-3 sm:order-none">
                      <p
                        className="text-white text-center text-lg sm:text-xl md:text-2xl leading-tight min-w-0"
                        style={{
                          fontFamily:
                            '"Inter Tight", Inter, system-ui, sans-serif',
                          fontWeight: 400,
                          color: "#FFFFFF",
                        }}
                      >
                        After
                      </p>
                      <p className="text-white text-base sm:text-lg md:text-xl font-semibold text-center">
                        After: $2.1M Sales/year
                      </p>
                    </div>

                    {/* Before image card */}
                    <motion.div
                      key={`${study.id}-before`}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative min-w-0 overflow-hidden flex flex-col order-2 sm:order-none"
                    >
                      <div className="table-card rounded-xl md:rounded-[36px] p-3 sm:p-4 md:p-6 relative overflow-hidden flex items-center justify-center min-h-0 flex-1">
                        <div
                          className="relative flex items-center justify-center min-w-0 w-full min-h-[160px] sm:min-h-[208px] md:min-h-[256px] lg:min-h-[290px]"
                          style={{
                            backgroundImage: `url(${blur2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <img
                            src={images.before}
                            alt={`${study.title} - Before`}
                            className="w-full max-w-full h-40 sm:h-52 md:h-64 lg:h-[290px] object-fill rounded-lg md:rounded-[23px]"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* After image card - same structure and sizing as Before */}
                    <motion.div
                      key={`${study.id}-after`}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="relative min-w-0 overflow-hidden flex flex-col order-4 sm:order-none"
                    >
                      <div className="table-card rounded-xl md:rounded-[36px] p-3 sm:p-4 md:p-6 relative overflow-hidden flex items-center justify-center min-h-0 flex-1">
                        <div
                          className="relative flex items-center justify-center min-w-0 w-full min-h-[160px] sm:min-h-[208px] md:min-h-[256px] lg:min-h-[290px]"
                          style={{
                            backgroundImage: `url(${blur2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <img
                            src={images.after}
                            alt={`${study.title} - After`}
                            className="w-full max-w-full h-40 sm:h-52 md:h-64 lg:h-[290px] object-fill rounded-lg md:rounded-[23px]"
                          />
                          {/* Purple Ellipse Decoration */}
                          <svg
                            className="absolute top-4 right-4 sm:top-6 sm:right-8 md:top-6 md:right-12 w-20 h-10 sm:w-28 sm:h-14 md:w-[138px] md:h-[70px]"
                            viewBox="0 0 138 70"
                            fill="none"
                            style={{
                              transform: "rotate(7.2deg)",
                            }}
                          ></svg>
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
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div
            className="rounded-2xl sm:rounded-3xl md:rounded-[35px] border border-[#828282] p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden"
            style={{ borderColor: "rgb(130, 130, 130)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-8">
              {CASE_STUDIES.slice(0, 1).map((study) => {
                const images =
                  caseStudyImages[study.id as keyof typeof caseStudyImages];
                if (!images) return null;

                return (
                  <>
                    {/* Before Card with Price */}
                    <div className="flex flex-col gap-2 order-1 sm:order-none">
                      <p
                        className="text-white text-center text-lg sm:text-xl md:text-2xl leading-tight"
                        style={{
                          fontFamily:
                            '"Inter Tight", Inter, system-ui, sans-serif',
                          fontWeight: 400,
                          color: "#FFFFFF",
                        }}
                      >
                        Before
                      </p>
                      <p className="text-white text-base sm:text-lg md:text-xl font-semibold text-center">
                        $204k Sales/year
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 order-3 sm:order-none">
                      <p
                        className="text-white text-center text-lg sm:text-xl md:text-2xl leading-tight"
                        style={{
                          fontFamily:
                            '"Inter Tight", Inter, system-ui, sans-serif',
                          fontWeight: 400,
                          color: "#FFFFFF",
                        }}
                      >
                        After
                      </p>
                      <p className="text-white text-base sm:text-lg md:text-xl font-semibold text-center">
                        $630K Sales/year
                      </p>
                    </div>

                    <motion.div
                      key={`${study.id}-before-price`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative min-w-0 overflow-hidden flex flex-col order-2 sm:order-none"
                    >
                      <div className="table-card rounded-xl md:rounded-[36px] p-3 sm:p-4 md:p-6 relative overflow-hidden flex items-center justify-center min-h-0 flex-1">
                        <div className="relative flex items-center justify-center min-w-0 w-full min-h-[160px] sm:min-h-[176px] md:min-h-[208px] lg:min-h-[238px]">
                          <img
                            src={ppcBefore}
                            alt={`${study.title} - Before`}
                            className="w-full max-w-full h-40 sm:h-44 md:h-52 lg:h-[238px] object-cover rounded-lg md:rounded-[18px]"
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
                      className="relative min-w-0 overflow-hidden flex flex-col order-4 sm:order-none"
                    >
                      <div className="table-card rounded-xl md:rounded-[36px] p-3 sm:p-4 md:p-6 relative overflow-hidden flex items-center justify-center min-h-0 flex-1">
                        <div className="relative flex items-center justify-center min-w-0 w-full min-h-[160px] sm:min-h-[176px] md:min-h-[208px] lg:min-h-[238px]">
                          <img
                            src={ppcAfter}
                            alt={`${study.title} - After`}
                            className="w-full max-w-full h-40 sm:h-44 md:h-52 lg:h-[238px] object-cover rounded-lg md:rounded-[18px]"
                          />
                          {/* Purple Ellipse Decoration */}
                        </div>
                      </div>
                    </motion.div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* Third Row: Glass Cards with Price Tags - commented out (SHOW_SALES_2024_2025_ROW to show) */}
        {SHOW_SALES_2024_2025_ROW && (
          <div>
            <div
              className="rounded-2xl sm:rounded-3xl md:rounded-[35px] border border-[#828282] p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden"
              style={{ borderColor: "rgb(130, 130, 130)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-8">
                {CASE_STUDIES.slice(1, 2).map((study) => {
                  const images =
                    caseStudyImages[study.id as keyof typeof caseStudyImages];
                  if (!images) return null;

                  return (
                    <>
                      {/* Before Card with Price */}

                      <div className="flex flex-col gap-2 order-1 sm:order-none">
                        <p
                          className="text-white text-center text-lg sm:text-xl md:text-2xl leading-tight"
                          style={{
                            fontFamily:
                              '"Inter Tight", Inter, system-ui, sans-serif',
                            fontWeight: 400,
                            color: "#FFFFFF",
                          }}
                        >
                          Before
                        </p>
                        <p className="text-white text-base sm:text-lg md:text-xl font-semibold text-center">
                          $283,440 is sales of 2024
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 order-3 sm:order-none">
                        <p
                          className="text-white text-center text-lg sm:text-xl md:text-2xl leading-tight"
                          style={{
                            fontFamily:
                              '"Inter Tight", Inter, system-ui, sans-serif',
                            fontWeight: 400,
                            color: "#FFFFFF",
                          }}
                        >
                          After
                        </p>
                        <p className="text-white text-base sm:text-lg md:text-xl font-semibold text-center">
                          $955,284 is sales of 2025
                        </p>
                      </div>
                      <motion.div
                        key={`${study.id}-before-price`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative min-w-0 overflow-hidden order-2 sm:order-none"
                      >
                        <div className="table-card rounded-xl md:rounded-[36px] p-3 sm:p-4 md:p-6 relative overflow-hidden flex items-center justify-center">
                          <div className="relative flex items-center justify-center min-w-0 w-full">
                            <img
                              src={salesBefore}
                              alt={`${study.title} - Before`}
                              className="w-full max-w-full h-44 sm:h-56 md:h-72 lg:h-[310px] object-fill rounded-lg md:rounded-[18px]"
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
                        className="relative min-w-0 overflow-hidden order-4 sm:order-none"
                      >
                        <div className="table-card rounded-xl md:rounded-[36px] p-3 sm:p-4 md:p-6 relative overflow-hidden flex items-center justify-center">
                          <div className="relative flex items-center justify-center min-w-0 w-full">
                            <img
                              src={salesAfter}
                              alt={`${study.title} - After`}
                              className="w-full max-w-full h-44 sm:h-56 md:h-72 lg:h-[310px] object-fill rounded-lg md:rounded-[18px]"
                            />
                            {/* Purple Ellipse Decoration - responsive position and size */}
                            <svg
                              className="absolute top-4 right-4 w-16 h-8 sm:top-8 sm:right-6 sm:w-24 sm:h-12 md:top-10 md:right-8 md:w-28 md:h-14 lg:top-12 lg:right-12 lg:w-[100px] lg:h-[50px] xl:w-[138px] xl:h-[70px]"
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
        )}

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
            className="px-4 py-2.5 sm:px-6 sm:py-3 bg-[#1F1446] border border-white rounded-md text-white font-semibold text-xs sm:text-sm hover:bg-primary/20 btn-glow transition-all inline-block"
            style={{ backgroundColor: "rgb(31, 20, 70)" }}
          >
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
