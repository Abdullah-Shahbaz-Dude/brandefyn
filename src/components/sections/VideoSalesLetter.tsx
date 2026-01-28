import { motion } from "framer-motion";
import VideoPlayer from "../ui/VideoPlayer";
import thumbnail from "../../assets/home/amir.png";
import heroVideo from "../../assets/home/main potfolio video (1).mp4";

export default function VideoSalesLetter() {
  return (
    <section className="relative py-24 purple-glow-bg-subtle overflow-hidden">
      {/* Additional glow orbs for seamless connection with BeforeAfter and Metrics - Reduced intensity */}
     
      
      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[35px] border border-[#828282] p-8 md:p-12 relative z-10"
          style={{ borderColor: "rgb(130, 130, 130)" }}
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
          >
            My Video Sales Letter
          </motion.h2>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-[30px] overflow-hidden opacity-100">
              <VideoPlayer src={heroVideo} thumbnail={thumbnail} className="w-full" aspectRatio="1212/572" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
