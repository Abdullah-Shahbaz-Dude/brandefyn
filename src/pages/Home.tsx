import Hero from "../components/sections/Hero";
import VideoSalesLetter from "../components/sections/VideoSalesLetter";
import BeforeAfter from "../components/sections/BeforeAfter";
import Metrics from "../components/sections/Metrics";
import TrustedBy from "../components/sections/TrustedBy";
import Testimonials from "../components/sections/Testimonials";
import lineImage from "../assets/lines.png"
export default function Home() {
  return (
    <>
      <Hero />
      {/* Unified Background with Connecting Lines - Spans VideoSalesLetter → BeforeAfter */}
      <div className="relative">
        {/* Connecting Snake Lines - Dashed/Dotted Background */}
       <img src={lineImage} alt="Line Image" className="absolute left-[70%] top-[45%] ] " />
        <BeforeAfter />
        <VideoSalesLetter />
      </div>
      <Metrics />
      <TrustedBy />
      <Testimonials />
   
    </>
  );
}
