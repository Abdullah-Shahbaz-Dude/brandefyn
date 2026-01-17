import { motion } from "framer-motion";
import {
  MdChevronLeft,
  MdCheckCircle,
  MdNotifications,
  MdMoreHoriz,
  MdLink,
} from "react-icons/md";
import heroImage from "../../assets/images/hero/hero.png";
import lineImage from "../../assets/images/hero/linhero.png"

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-40 pb-20 flex flex-col items-center purple-glow-bg  ">
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

      {/* Additional Purple Glow Orbs for Hero-specific positioning - Reduced intensity */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] -z-20" />
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/12 rounded-[100%] blur-[120px] -z-20" />
      {/* Glow extending into BeforeAfter section */}
      <div className="absolute -bottom-20 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-20" />

      {/* Grid Floor Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] grid-floor -z-10 opacity-40" />

      {/* SVG Animated Line */}
      <img src={lineImage} alt="Line Image" className="absolute top-[45%] left-0 w-full h-[400px] -z-10 pointer-events-none hidden md:block" />

      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
        {/* Free Audit Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <button className="px-5 py-1.5 border border-primary/30 bg-primary/10 backdrop-blur-md rounded-full text-[11px] font-bold tracking-[0.2em] uppercase text-primary/80">
            Free Audit
          </button>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl text-white md:text-6xl lg:text-[84px] font-extrabold tracking-tight mb-8 leading-[1.1] px-4"
        >
          See What's Holding Your <br />
          <span className="relative inline-block">
            Amazon
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-primary/40"
              fill="none"
              viewBox="0 0 200 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10C50 3 150 3 198 10"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="4"
              />
            </svg>
          </span>{" "}
          Sales Back.
        </motion.h1>

        {/* Book a Call Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4"
        >
          <button className="px-10 py-3.5 bg-[#140e2a] border border-primary/50 text-white rounded-full font-bold text-sm tracking-wide btn-glow transition-all flex items-center gap-2 mx-auto">
            Book a Call
          </button>
        </motion.div>
      </div>

      {/* Glass Cards Container */}
      <div className="w-full  mx-auto relative h-[500px] mt-30 hidden md:block z-30">
        {/* Line Image Background - Behind Cards */}
        <img 
          src={lineImage} 
          alt="Line Image" 
          className="absolute  " 
        />
        {/* Statistics Card (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 10 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute left-[8%] top-[80px] glass-card glass-card-glow card-glow-hover p-8 rounded-[36px] w-[280px] rotate-[10deg] transform z-30"
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
          className="absolute left-1/3 top-[120px] -translate-x-1/2 w-[480px] max-w-[90vw] glass-card glass-card-glow card-glow-hover rounded-[36px] p-8 -rotate-[8deg] transform z-20"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <MdChevronLeft className="text-white/60 text-2xl" />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full -m-[2px]" />
                <img
                  alt="Profile"
                  className="w-16 h-16 rounded-full border-2 border-[#0a0a0a] relative z-10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxBtSy3rCaceF55gHrb5OKmOeGbjJtOBImhIROgz7iDx_ZDS6PEauBGsQByG1j551ypaMHxgreEHwTliDVJeilW8zhAjCiXBFEfJrnsORwPCu8F9issmuk_0uVeaYHmqyTNuu-SfNwjZJCAUHLo3V7aDUmz-JReBtVGtXGNeuFgD1pgu0UzANEY1OMDi3Hn7JYBTHtHB6BzIDwvqdgIuORNkK10Nw23mEmuuD_--X_mGcms31ygNa7t0kBGO10EHn2mYbt5GLYAkrW"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-[18px] font-bold text-white">
                    theyounetworkhq
                  </p>
                  <MdCheckCircle className="text-blue-400 text-[18px]" />
                </div>
                <p className="text-[13px] opacity-70 text-white/90">
                  The You Network
                </p>
              </div>
            </div>
            <div className="flex gap-4 opacity-70">
              <MdNotifications className="text-[24px]" />
              <MdMoreHoriz className="text-[24px]" />
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-between mb-8 text-center px-6">
            <div>
              <p className="text-[19px] font-extrabold text-white">376</p>
              <p className="text-[12px] opacity-60 text-white/80">posts</p>
            </div>
            <div>
              <p className="text-[19px] font-extrabold text-white">421K</p>
              <p className="text-[12px] opacity-60 text-white/80">followers</p>
            </div>
            <div>
              <p className="text-[19px] font-extrabold text-white">123</p>
              <p className="text-[12px] opacity-60 text-white/80">following</p>
            </div>
          </div>

          {/* Bio */}
          <div className="text-[14px] leading-relaxed mb-6 space-y-1">
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
          <p className="text-[13px] text-primary font-bold flex items-center gap-2">
            <MdLink className="text-[18px]" />
            theyounetwork.com and 1 more
          </p>
        </motion.div>

        {/* Testimonial Card (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute right-[1%] top-[100px]  glass-card glass-card-glow card-glow-hover p-8 rounded-[36px] w-[380px] max-w-[90vw] -rotate-[3deg] transform z-30"
        >
          <div className="flex items-center gap-4 mb-6 ">
            <img
              alt="Ben"
              className="w-16 h-16 rounded-full object-cover border-2 border-white/10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJaUBpx2iCd8MR9PkM_hR2F5rxMde91tRgS_zuycwjhDpX3mVX3opF4rX64DCZlkiVttcvai3PdVK0wjxf_t1BjWteRpi8ReMo3YC0w36umlPtoopfi7U_-kBG9l6YX3EW2Qo_osbdT56HqYVT48EVUqnAF-OuaNZlO7tuyaOrNLoWAc8slnTuCOHyx-knUhp9vgE_20hqUtGDjpMKPn0D_2NqUu6BMr_Y96fKod2dgwLvsmYaxlInyi1JF70ykxpy59PbIVRSPyDI"
            />
            <div>
              <p className="text-[18px] font-bold text-white">Ben</p>
              <p className="text-[11px] opacity-70 font-semibold uppercase tracking-widest text-white/90">
                Digital Manager, Athletic Annex
              </p>
            </div>
          </div>
          <p className="text-[15px] leading-relaxed opacity-90 mb-6 font-medium text-white/95">
            "Our biggest challenge (with Amazon) was teasing out where we were
            getting incremental sales...Extension eCom helped us find clarity."
          </p>
          <a
            className="text-[14px] font-bold text-white hover:underline transition-all inline-block"
            href="#"
          >
            View Details
          </a>
        </motion.div>
      </div>
    </section>
  );
}
