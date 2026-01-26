import Hero from "../components/sections/Hero";
import VideoSalesLetter from "../components/sections/VideoSalesLetter";
import BeforeAfter from "../components/sections/BeforeAfter";
import Metrics from "../components/sections/Metrics";
import TrustedBy from "../components/sections/TrustedBy";
import Testimonials from "../components/sections/Testimonials";
import lineImage from "../assets/lines.png"
import leftLineImage from "../assets/leftline.svg"
export default function Home() {
  return (
    <>
      <Hero />
      {/* Unified Background with Connecting Lines - Spans VideoSalesLetter → BeforeAfter */}
      <img src={lineImage} alt="Line Image" className="absolute left-[80%] top-[350%]  " />
      <img src={lineImage} alt="Line Image" className="absolute right-[80%] top-[570%] transform rotate-180  " />
      <div className="relative">
        {/* Connecting Snake Lines - Dashed/Dotted Background */}
       
       <img src={leftLineImage} alt="Left Line Image" className="absolute left-[0%] top-[0%]  " />
        <BeforeAfter />
        <VideoSalesLetter />
      </div>
      <Metrics />
      <TrustedBy />
      <Testimonials />
   
    </>
  );
}
