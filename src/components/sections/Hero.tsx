import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero/hero-2.png";
// import lineImage from "../../assets/images/hero/linhero.png"
import amazonLine from "../../assets/images/hero/hero-amzon.png";
import adsPartnerImg from "../../assets/images/ads partner.svg";
import digitalJourneyImg from "../../assets/images/digital-journey.png";
import downloadImg from "../../assets/images/download.png";
import forbesImg from "../../assets/images/forbes.png";
import helium10Img from "../../assets/images/helium-10.webp";
import pickFuImg from "../../assets/images/pick-fu.webp";
import borderImage from "../../assets/images/hero/border.svg";

export default function Hero() {
  return (
    <div className="relative w-full">
      <section className="relative w-full min-h-[900px] md:min-h-[900px] md:h-[900px] flex flex-col items-center overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 z-0 w-full max-w-full h-full object-cover object-center"
        />
        <img
          src={borderImage}
          alt="Border"
          className="absolute inset-0 z-0 w-full max-w-full h-full object-cover object-center mt-[300px] sm:mt-[400px] md:mt-[500px] scale-150 sm:scale-125 md:scale-100"
        />

        {/* Additional Purple Glow Orbs for Hero-specific positioning - Reduced intensity */}
        {/* Glow extending into BeforeAfter section */}
        <div className="absolute -bottom-[50px] left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -z-20" />

        {/* Grid Floor Effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] sm:h-[250px] md:h-[300px] grid-floor -z-10 opacity-40" />

        {/* Content - z-40 so Book a Call sits above glass cards (z-30) and stays clickable */}
        <div className="max-w-5xl mx-auto text-center mt-[-180px] sm:mt-[-200px] md:mt-[-240px] px-4 sm:px-6 relative z-40 flex-1 flex flex-col justify-center overflow-hidden">
          {/* Free Audit Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <Link 
            to="/contact#schedule-call" 
            className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 mb-6 sm:mb-8 md:mb-10 border border-primary backdrop-blur-md rounded-full inline-block text-white"
            style={{
              fontFamily: '"Inter Tight", Inter, system-ui, sans-serif',
              fontSize: '18px',
              lineHeight: '20px',
              letterSpacing: '0%',
              fontWeight: 400,
            }}
          >
            Free Audit
          </Link> */}
          </motion.div>

          {/* Main Headline - mobile: no overlap, proper line spacing */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-2 mt-4 sm:mt-6 px-2 sm:px-4 text-[42px] sm:text-[60px] md:text-[87.34px] leading-[1.4] sm:leading-[1.3] md:leading-[1.25] tracking-tight"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              opacity: 1,
            }}
          >
            <span className="block">See What's Holding Your</span>
            <span className="relative inline-block mt-1 sm:mt-2 md:mt-3 mr-2 sm:mr-4">
              Amazon
              <img
                src={amazonLine}
                alt=""
                aria-hidden
                className="absolute left-0 w-full max-w-full h-auto object-contain pointer-events-none"
                style={{ top: "1.2em" }}
              />
            </span>{" "}
            Sales Back.
          </motion.h1>

          {/* Book a Call Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-20 md:mt-28 relative z-[40]"
          >
            <Link
              to="/contact#schedule-call"
              className="px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 rounded-[6px] bg-[#140e2a] border text-white font-bold text-xs sm:text-sm md:text-sm tracking-wide btn-glow transition-all inline-flex items-center gap-2 mx-auto cursor-pointer"
              aria-label="Go to contact page"
            >
              Book a Call
            </Link>
          </motion.div>
        </div>

        {/* Glass Cards Container */}
      </section>
      <div className="relative w-full -mt-80 md:-mt-[520px] pt-7 md:pt-[200px] pb-2 sm:pb-8 md:pb-12 flex flex-col md:block items-center gap-2 sm:gap-6 min-h-[380px] md:min-h-[480px] overflow-x-visible overflow-y-clip">
        {/* Padded wrapper: line image + mobile cards only (desktop curve is full-bleed sibling below) */}
        <div className="w-full px-4 sm:px-6 flex flex-col md:hidden gap-3 sm:gap-10 items-center max-w-[min(90vw,28rem)] mx-auto">
          {/* Mobile: partner/media logos row (all 6, same as desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="w-[140px] h-[78px] border-2 glass-card card-glow-hover p-3 rounded-[20px] flex items-center justify-center">
              <img
                src={adsPartnerImg}
                alt=""
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="w-[140px] h-[78px] border-2 glass-card card-glow-hover p-3 rounded-[20px] flex items-center justify-center">
              <img
                src={digitalJourneyImg}
                alt=""
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="w-[140px] h-[78px] border-2 glass-card card-glow-hover p-3 rounded-[20px] flex items-center justify-center">
              <img
                src={downloadImg}
                alt=""
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="w-[140px] h-[78px] border-2 glass-card card-glow-hover p-3 rounded-[20px] flex items-center justify-center">
              <img
                src={forbesImg}
                alt=""
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="w-[140px] h-[78px] border-2 glass-card card-glow-hover p-3 rounded-[20px] flex items-center justify-center">
              <img
                src={helium10Img}
                alt=""
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="w-[140px] h-[78px] border-2 glass-card card-glow-hover p-3 rounded-[20px] flex items-center justify-center">
              <img
                src={pickFuImg}
                alt=""
                className="h-10 w-auto object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Desktop layout - Curve SVG full width, logo cards centered */}
        <div
          // ref={desktopCardsRef}
          className="hidden md:block relative w-[120%] min-h-[400px] -top-[130px] left-[30%] -translate-x-1/4"
        >
          {/* Layer 1: Dashed curve SVG (background) - full width */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg
              className="w-full min-w-full h-full"
              viewBox="0 0 1840 448"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMid slice"
            >
              <defs>
                <filter
                  id="heroCurveFilter"
                  x="-121.375"
                  y="0"
                  width="1680.23"
                  height="447.039"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.745404" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.72549 0 0 0 0 0.662745 0 0 0 0 0.996078 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1.49081" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.72549 0 0 0 0 0.662745 0 0 0 0 0.996078 0 0 0 1 0"
                  />
                  <feBlend mode="normal" in2="effect1" result="effect2" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="5.21782" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.72549 0 0 0 0 0.662745 0 0 0 0 0.996078 0 0 0 1 0"
                  />
                  <feBlend mode="normal" in2="effect2" result="effect3" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="17.8897" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.72549 0 0 0 0 0.662745 0 0 0 0 0.996078 0 0 0 1 0"
                  />
                  <feBlend mode="normal" in2="effect3" result="effect4" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="31.3069" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.72549 0 0 0 0 0.662745 0 0 0 0 0.996078 0 0 0 1 0"
                  />
                  <feBlend mode="normal" in2="effect4" result="effect5" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect5"
                    result="shape"
                  />
                </filter>
              </defs>
              <g filter="url(#heroCurveFilter)">
                <path
                  id="heroCurvePath"
                  d="M 0 69.97 C 66.25 56.69 219.88 55.36 304.92 156.24 C 411.18 282.34 570.98 410.10 825.18 378.58 C 1079.38 347.05 1612.54 187.77 1840 350.37"
                  stroke="#BAA7FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="17 17"
                />
              </g>
            </svg>
          </div>
          {/* Layer 2: Logo cards centered over the SVG - all 6 partner/media logos */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none -left-[15%]">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 pointer-events-auto">
              <div
                className="hero-logo-card w-[180px]  h-[100px] -translate-y-[150px] -translate-x-[100px] border-2 glass-card card-glow-hover p-1.5 rounded-[20px] flex items-center justify-center"
                aria-hidden
              >
                <img
                  src={adsPartnerImg}
                  alt=""
                  className="h-16 w-auto object-contain scale-110"
                />
              </div>
              <div
                className="hero-logo-card w-[180px] h-[100px] -translate-y-[15px] -translate-x-[80px] border-2 glass-card card-glow-hover p-1.5 rounded-[20px] flex items-center justify-center"
                aria-hidden
              >
                <img
                  src={digitalJourneyImg}
                  alt=""
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div
                className="hero-logo-card w-[180px] h-[100px] translate-y-[110px] -translate-x-[90px] border-2 glass-card card-glow-hover p-1.5 rounded-[20px] flex items-center justify-center"
                aria-hidden
              >
                <img
                  src={downloadImg}
                  alt=""
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div
                className="hero-logo-card w-[180px] h-[100px] translate-y-[150px] -translate-x-[15px] border-2 glass-card card-glow-hover p-1.5 rounded-[20px] flex items-center justify-center"
                aria-hidden
              >
                <img
                  src={forbesImg}
                  alt=""
                  className="h-9 w-auto object-contain "
                />
              </div>
              <div
                className="hero-logo-card w-[180px] h-[100px] translate-y-[100px] translate-x-8 border-2 glass-card card-glow-hover p-1.5 rounded-[20px] flex items-center justify-center"
                aria-hidden
              >
                <img
                  src={helium10Img}
                  alt=""
                  className="h-16 w-auto object-contain scale-125"
                />
              </div>
              <div
                className="hero-logo-card  w-[180px] h-[100px] translate-y-[50px] translate-x-24 border-2 glass-card card-glow-hover p-1.5 rounded-[20px] flex items-center justify-center"
                aria-hidden
              >
                <img
                  src={pickFuImg}
                  alt=""
                  className="h-16 w-auto object-contain scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
