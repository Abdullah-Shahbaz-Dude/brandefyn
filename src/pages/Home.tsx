import Hero from "../components/sections/Hero";
import Offer from "../components/sections/Offer";
import EmailForm from "../components/sections/EmailForm";
import VideoSalesLetter from "../components/sections/VideoSalesLetter";
import BeforeAfter from "../components/sections/BeforeAfter";
import Metrics from "../components/sections/Metrics";
import TrustedBy from "../components/sections/TrustedBy";
import Testimonials from "../components/sections/Testimonials";
import Reviews from "../components/sections/Reviews";
import Services from "../components/sections/Services";
import CaseStudies from "../components/sections/CaseStudies";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <VideoSalesLetter />
      <Reviews />
      <Services />
      <TrustedBy />
      <Offer />
      <BeforeAfter />
      <Testimonials />
      <EmailForm />
      <CaseStudies />
    </>
  );
}
