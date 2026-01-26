import Hero from "../components/sections/Hero";
import VideoSalesLetter from "../components/sections/VideoSalesLetter";
import BeforeAfter from "../components/sections/BeforeAfter";
import Metrics from "../components/sections/Metrics";
import TrustedBy from "../components/sections/TrustedBy";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative">
        <BeforeAfter />
        <VideoSalesLetter />
      </div>
      <Metrics />
      <TrustedBy />
      <Testimonials />
    </>
  );
}
