
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MdChevronLeft,
  MdCheckCircle,
  MdNotifications,
  MdMoreHoriz,
  MdLink,
} from "react-icons/md";
import heroImage from "../../assets/images/hero/hero-2.png";
import lineImage from "../../assets/images/hero/linhero.png"
import amazonLine from "../../assets/images/hero/hero-amzon.png";
import borderImage from "../../assets/images/hero/border.svg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[900px] md:h-[900px] flex flex-col items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 z-0 w-full h-full object-cover object-center"
      />
      <img 
        src={borderImage} 
        alt="Border" 
        className="absolute inset-0 z-0 w-full h-full object-cover object-center mt-[300px] sm:mt-[400px] md:mt-[500px] scale-150 sm:scale-125 md:scale-100"
      />

      {/* Additional Purple Glow Orbs for Hero-specific positioning - Reduced intensity */}
      {/* Glow extending into BeforeAfter section */}
      <div className="absolute -bottom-[50px] left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -z-20" />

      {/* Grid Floor Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] sm:h-[250px] md:h-[300px] grid-floor -z-10 opacity-40" />

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center mt-[-200px] sm:mt-[-220px] md:mt-[-270px] px-4 sm:px-6 relative z-10 flex-1 flex flex-col justify-center">
        {/* Free Audit Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/contact" 
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
          </Link>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-2 mt-4 sm:mt-6 px-2 sm:px-4 text-[50px] sm:text-[60px] md:text-[87.34px] leading-[18px] sm:leading-[22px] md:leading-[27.69px]"
          style={{
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 400,
            letterSpacing: '-2%',
            color: '#FFFFFF',
            opacity: 1
          }}
        >
          See What's Holding Your <br />
          <span className="relative inline-block mr-2 sm:mr-4 mt-[40px] sm:mt-[60px] md:mt-[80px]">
            Amazon   
            <img 
              src={amazonLine} 
              alt="Amazon Line" 
              className="absolute top-[30px] sm:top-[40px] md:top-[60px] w-full h-auto"
            />
          </span>
          Sales Back.
        </motion.h1>

        {/* Book a Call Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-20 md:mt-28"
        >
          <Link 
            to="/contact" 
            className="px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 rounded-[6px] bg-[#140e2a] border text-white font-bold text-xs sm:text-sm md:text-sm tracking-wide btn-glow transition-all inline-flex items-center gap-2 mx-auto"
          >
            Book a Call
          </Link>
        </motion.div>
      </div>

      {/* Glass Cards Container */}
      <div className="w-full mx-auto absolute bottom-0 left-0 right-0 h-auto md:h-[400px] z-30 flex flex-col md:block items-center justify-end gap-6 px-4 pb-4 md:gap-0 md:px-0 md:pb-0">
        {/* Line Image Background - Behind Cards */}
        <img 
          src={lineImage} 
          alt="Line Image" 
          className="absolute bottom-0 w-full h-auto object-cover hidden md:block" 
        />

        {/* Cards for mobile (vertical) and desktop */}
        <div className="flex flex-col md:hidden gap-6 items-center w-full max-w-md">
          {/* Statistics Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 10 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-[120px] sm:h-[130px] w-[180px] sm:w-[190px] bg-transparent border-2 glass-card card-glow-hover p-4 sm:p-6 rounded-[24px] sm:rounded-[30px] rotate-[10deg] transform z-30"
          >
            <p className="text-[40px] sm:text-[46px] font-extrabold leading-none mb-1 sm:mb-2 tracking-tighter text-white">
              10 B+
            </p>
            <p className="text-xs sm:text-sm font-semibold tracking-tight text-white">
              Views generated
            </p>
          </motion.div>

          {/* Social Media Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: -8 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-[300px] sm:w-[340px] h-[200px] sm:h-[210px] max-w-[90vw] bg-transparent border-2 glass-card card-glow-hover rounded-[24px] sm:rounded-[30px] p-3 sm:p-4 -rotate-[8deg] transform z-20 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <MdChevronLeft className="text-white/60 text-lg sm:text-xl" />
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full -m-[2px]" />
                  <img
                    alt="Profile"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#0a0a0a] relative z-10"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxBtSy3rCaceF55gHrb5OKmOeGbjJtOBImhIROgz7iDx_ZDS6PEauBGsQByG1j551ypaMHxgreEHwTliDVJeilW8zhAjCiXBFEfJrnsORwPCu8F9issmuk_0uVeaYHmqyTNuu-SfNwjZJCAUHLo3V7aDUmz-JReBtVGtXGNeuFgD1pgu0UzANEY1OMDi3Hn7JYBTHtHB6BzIDwvqdgIuORNkK10Nw23mEmuuD_--X_mGcms31ygNa7t0kBGO10EHn2mYbt5GLYAkrW"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <p className="text-sm sm:text-base font-bold text-white">
                      theyounetworkhq
                    </p>
                    <MdCheckCircle className="text-blue-400 text-sm sm:text-base" />
                  </div>
                  <p className="text-[10px] sm:text-[11px] opacity-70 text-white/90">
                    The You Network
                  </p>
                </div>
              </div>
              <div className="flex gap-1 sm:gap-2 opacity-70">
                <MdNotifications className="text-lg sm:text-[20px]" />
                <MdMoreHoriz className="text-lg sm:text-[20px]" />
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-between mb-2 sm:mb-4 text-center px-2 sm:px-3">
              <div>
                <p className="text-sm sm:text-base font-extrabold text-white">376</p>
                <p className="text-[10px] sm:text-[11px] opacity-60 text-white/80">posts</p>
              </div>
              <div>
                <p className="text-sm sm:text-base font-extrabold text-white">421K</p>
                <p className="text-[10px] sm:text-[11px] opacity-60 text-white/80">followers</p>
              </div>
              <div>
                <p className="text-sm sm:text-base font-extrabold text-white">123</p>
                <p className="text-[10px] sm:text-[11px] opacity-60 text-white/80">following</p>
              </div>
            </div>

            {/* Bio */}
            <div className="text-[11px] sm:text-[12px] leading-tight mb-2 sm:mb-3 space-y-1">
              <p>
                <span className="font-bold text-white">
                  Karl Morningstar | CEO of The You Network | Franchise Consultant
                </span>
              </p>
              <p className="opacity-90 text-white/90">
                🏠 Helping people create financial freedom by owning a
                franchise... <span className="opacity-50">more</span>
              </p>
            </div>

            {/* Link */}
            <p className="text-[10px] sm:text-[11px] text-primary font-bold flex items-center gap-1 sm:gap-2">
              <MdLink className="text-[12px] sm:text-[14px]" />
              theyounetwork.com and 1 more
            </p>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="h-[200px] sm:h-[210px] w-[260px] sm:w-[280px] max-w-[90vw] bg-transparent border-2 glass-card card-glow-hover p-3 sm:p-4 rounded-[24px] sm:rounded-[30px] -rotate-[7deg] transform z-30 overflow-hidden"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <img
                alt="Ben"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-white/10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJaUBpx2iCd8MR9PkM_hR2F5rxMde91tRgS_zuycwjhDpX3mVX3opF4rX64DCZlkiVttcvai3PdVK0wjxf_t1BjWteRpi8ReMo3YC0w36umlPtoopfi7U_-kBG9l6YX3EW2Qo_osbdT56HqYVT48EVUqnAF-OuaNZlO7tuyaOrNLoWAc8slnTuCOHyx-knUhp9vgE_20hqUtGDjpMKPn0D_2NqUu6BMr_Y96fKod2dgwLvsmYaxlInyi1JF70ykxpy59PbIVRSPyDI"
              />
              <div>
                <p className="text-sm sm:text-base font-bold text-white">Ben</p>
                <p className="text-[9px] sm:text-[10px] opacity-70 font-semibold uppercase tracking-widest text-white/90">
                  Digital Manager, Athletic Annex
                </p>
              </div>
            </div>
            <p className="text-[12px] sm:text-[13px] leading-snug opacity-90 mb-2 sm:mb-3 font-medium text-white/95">
              "Our biggest challenge (with Amazon) was teasing out where we were
              getting incremental sales...Extension eCom helped us find clarity."
            </p>
            <Link
              to="/case-studies"
              className="text-[11px] sm:text-[12px] font-bold text-white hover:underline transition-all inline-block"
            >
              View Details
            </Link>
          </motion.div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex md:relative md:h-full">
          {/* Statistics Card (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 10 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute left-[7%] h-[142.15px] w-[209.5px] bottom-[140px] bg-transparent border-2 glass-card card-glow-hover p-8 rounded-[36px] rotate-[10deg] transform z-30"
          >
            <p className="text-[52px] font-extrabold leading-none mb-2 tracking-tighter text-white">
              10 B+
            </p>
            <p className="text-[14px] font-semibold tracking-tight text-white">
              Views generated
            </p>
          </motion.div>

          {/* Social Media Profile Card (Center) */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: -8 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute left-[37%] top-[140px] -translate-x-1/2 w-[379px] h-[232px] max-w-[90vw] bg-transparent border-2 glass-card card-glow-hover rounded-[36px] p-4 -rotate-[8deg] transform z-20 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <MdChevronLeft className="text-white/60 text-xl" />
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full -m-[2px]" />
                  <img
                    alt="Profile"
                    className="w-12 h-12 rounded-full border-2 border-[#0a0a0a] relative z-10"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxBtSy3rCaceF55gHrb5OKmOeGbjJtOBImhIROgz7iDx_ZDS6PEauBGsQByG1j551ypaMHxgreEHwTliDVJeilW8zhAjCiXBFEfJrnsORwPCu8F9issmuk_0uVeaYHmqyTNuu-SfNwjZJCAUHLo3V7aDUmz-JReBtVGtXGNeuFgD1pgu0UzANEY1OMDi3Hn7JYBTHtHB6BzIDwvqdgIuORNkK10Nw23mEmuuD_--X_mGcms31ygNa7t0kBGO10EHn2mYbt5GLYAkrW"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[16px] font-bold text-white">
                      theyounetworkhq
                    </p>
                    <MdCheckCircle className="text-blue-400 text-[16px]" />
                  </div>
                  <p className="text-[11px] opacity-70 text-white/90">
                    The You Network
                  </p>
                </div>
              </div>
              <div className="flex gap-2 opacity-70">
                <MdNotifications className="text-[20px]" />
                <MdMoreHoriz className="text-[20px]" />
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-between mb-4 text-center px-3">
              <div>
                <p className="text-[16px] font-extrabold text-white">376</p>
                <p className="text-[11px] opacity-60 text-white/80">posts</p>
              </div>
              <div>
                <p className="text-[16px] font-extrabold text-white">421K</p>
                <p className="text-[11px] opacity-60 text-white/80">followers</p>
              </div>
              <div>
                <p className="text-[16px] font-extrabold text-white">123</p>
                <p className="text-[11px] opacity-60 text-white/80">following</p>
              </div>
            </div>

            {/* Bio */}
            <div className="text-[12px] leading-tight mb-3 space-y-1">
              <p>
                <span className="font-bold text-white">
                  Karl Morningstar | CEO of The You Network | Franchise Consultant
                </span>
              </p>
              <p className="opacity-90 text-white/90">
                🏠 Helping people create financial freedom by owning a
                franchise... <span className="opacity-50">more</span>
              </p>
            </div>

            {/* Link */}
            <p className="text-[11px] text-primary font-bold flex items-center gap-2">
              <MdLink className="text-[14px]" />
              theyounetwork.com and 1 more
            </p>
          </motion.div>

          {/* Testimonial Card (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute right-[8%] bottom-[100px] h-[233.4px] w-[306.68px] max-w-[90vw] bg-transparent border-2 glass-card card-glow-hover p-4 rounded-[36px] -rotate-[7deg] transform z-30 overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-3 ">
              <img
                alt="Ben"
                className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJaUBpx2iCd8MR9PkM_hR2F5rxMde91tRgS_zuycwjhDpX3mVX3opF4rX64DCZlkiVttcvai3PdVK0wjxf_t1BjWteRpi8ReMo3YC0w36umlPtoopfi7U_-kBG9l6YX3EW2Qo_osbdT56HqYVT48EVUqnAF-OuaNZlO7tuyaOrNLoWAc8slnTuCOHyx-knUhp9vgE_20hqUtGDjpMKPn0D_2NqUu6BMr_Y96fKod2dgwLvsmYaxlInyi1JF70ykxpy59PbIVRSPyDI"
              />
              <div>
                <p className="text-[16px] font-bold text-white">Ben</p>
                <p className="text-[10px] opacity-70 font-semibold uppercase tracking-widest text-white/90">
                  Digital Manager, Athletic Annex
                </p>
              </div>
            </div>
            <p className="text-[13px] leading-snug opacity-90 mb-3 font-medium text-white/95">
              "Our biggest challenge (with Amazon) was teasing out where we were
              getting incremental sales...Extension eCom helped us find clarity."
            </p>
            <Link
              to="/case-studies"
              className="text-[12px] font-bold text-white hover:underline transition-all inline-block"
            >
              View Details
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
