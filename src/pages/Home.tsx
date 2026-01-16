import Hero from "../components/sections/Hero";
import VideoSalesLetter from "../components/sections/VideoSalesLetter";
import BeforeAfter from "../components/sections/BeforeAfter";
import Metrics from "../components/sections/Metrics";
import TrustedBy from "../components/sections/TrustedBy";
import Testimonials from "../components/sections/Testimonials";
import Reviews from "../components/sections/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Unified Background with Connecting Lines - Spans VideoSalesLetter → BeforeAfter */}
      <div className="relative">
        {/* Connecting Snake Lines - Dashed/Dotted Background */}
        <svg
          className="absolute inset-0 w-full pointer-events-none z-0"
          style={{ opacity: 0.4 }}
          viewBox="0 0 1920 2000"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="glow-purple-unified">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Line 1 - Main connecting line flowing from top to bottom */}
          <path
            d="M 200 100 Q 400 300, 600 250 Q 800 200, 1000 350 Q 1200 500, 1400 450 Q 1600 400, 1800 550 Q 1700 700, 1500 650 Q 1300 600, 1100 750 Q 900 900, 700 850 Q 500 800, 300 950 Q 100 1100, 200 1250 Q 400 1400, 600 1350 Q 800 1300, 1000 1450 Q 1200 1600, 1400 1550 Q 1600 1500, 1800 1650"
            fill="none"
            stroke="rgba(185, 169, 254, 0.6)"
            strokeWidth="3"
            strokeDasharray="10, 5"
            filter="url(#glow-purple-unified)"
            vectorEffect="non-scaling-stroke"
          />
          {/* Line 2 - Secondary connecting line */}
          <path
            d="M 300 150 Q 500 350, 700 300 Q 900 250, 1100 400 Q 1300 550, 1500 500 Q 1700 450, 1900 600 Q 1800 750, 1600 700 Q 1400 650, 1200 800 Q 1000 950, 800 900 Q 600 850, 400 1000 Q 200 1150, 300 1300 Q 500 1450, 700 1400 Q 900 1350, 1100 1500 Q 1300 1650, 1500 1600 Q 1700 1550, 1900 1700"
            fill="none"
            stroke="rgba(139, 92, 246, 0.5)"
            strokeWidth="2.5"
            strokeDasharray="8, 4"
            filter="url(#glow-purple-unified)"
            vectorEffect="non-scaling-stroke"
          />
          {/* Line 3 - Tertiary connecting line */}
          <path
            d="M 100 800 Q 300 400, 500 350 Q 700 300, 900 450 Q 1100 600, 1300 550 Q 1500 500, 1700 650 Q 1600 800, 1400 750 Q 1200 700, 1000 850 Q 800 1000, 600 950 Q 400 900, 200 1050 Q 0 1200, 100 1350 Q 300 1500, 500 1450 Q 700 1400, 900 1550 Q 1100 1700, 1300 1650 Q 1500 1600, 1700 1750"
            fill="none"
            stroke="rgba(185, 169, 254, 0.45)"
            strokeWidth="2"
            strokeDasharray="6, 3"
            filter="url(#glow-purple-unified)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <BeforeAfter />
        <VideoSalesLetter />
      </div>
      <Metrics />
      <TrustedBy />
      <Testimonials />
      <Reviews />
    </>
  );
}
