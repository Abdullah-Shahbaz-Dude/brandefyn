import { motion } from "framer-motion";
import VideoPlayer from "../ui/VideoPlayer";
import heroVideo from "../../assets/home/main potfolio video (1).mp4";

export default function VideoSalesLetter() {
  return (
    <section className="relative py-24 purple-glow-bg-subtle overflow-hidden">
      {/* Additional glow orbs for seamless connection with BeforeAfter and Metrics - Reduced intensity */}
      <div className="absolute left-0 -top-20 w-[500px] h-[500px] bg-primary/12 rounded-full blur-[120px] -z-10" />
      <div className="absolute right-0 -bottom-20 w-[550px] h-[550px] bg-purple-900/12 rounded-full blur-[120px] -z-10" />
      
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
            <div className="rounded-[30px] overflow-hidden">
              <VideoPlayer src={heroVideo} className="w-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
