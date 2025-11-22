import { motion } from "framer-motion";
import VideoPlayer from "../ui/VideoPlayer";
import heroVideo from "../../assets/home/main potfolio video (1).mp4";

export default function VideoSalesLetter() {
  return (
    <section className="py-18 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 12,
              mass: 1.2,
              delay: 0.2,
            }}
            className="shadow-2xl shadow-purple-500/50 glow-purple-hover"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 14,
                mass: 1,
                delay: 0.4,
              }}
            >
              <VideoPlayer src={heroVideo} className="w-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
