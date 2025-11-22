import { motion } from "framer-motion";
import LogoCarousel from "../ui/LogoCarousel";
import { TRUSTED_BY_LOGOS } from "../../utils/constants";
import logoOIP from "../../assets/home/logo/OIP.png";
import logoOIP2 from "../../assets/home/logo/OIP-2.png";
import logoOIP3 from "../../assets/home/logo/OIP-3.png";
import logoOIP4 from "../../assets/home/logo/OIP-4.png";
import logoOIP5 from "../../assets/home/logo/OIP-5.png";
import logoOIP6 from "../../assets/home/logo/OIP-6.png";
import logoOIP7 from "../../assets/home/logo/OIP-7.png";
import logoOIP8 from "../../assets/home/logo/OIP-8.png";
import logoOIP9 from "../../assets/home/logo/OIP-9.png";
import logoDownload from "../../assets/home/logo/download.png";
import logoDownload1 from "../../assets/home/logo/download-1.png";
import logoDownload11 from "../../assets/home/logo/download-11.png";
import logoDownload1_1 from "../../assets/home/logo/download-1-1.png";
import logoThumbnail1 from "../../assets/home/logo/thumbnail_image001.png";
import logoThumbnail2 from "../../assets/home/logo/thumbnail_image002.png";

const MEDIA_LOGOS = [
  { name: "Media Outlet 1", src: logoOIP },
  { name: "Media Outlet 2", src: logoOIP2 },
  { name: "Media Outlet 3", src: logoOIP3 },
  { name: "Media Outlet 4", src: logoOIP4 },
  { name: "Media Outlet 5", src: logoOIP5 },
  { name: "Media Outlet 6", src: logoOIP6 },
  { name: "Media Outlet 7", src: logoOIP7 },
  { name: "Media Outlet 8", src: logoOIP8 },
  { name: "Media Outlet 9", src: logoOIP9 },
  { name: "Media Outlet 10", src: logoDownload },
  { name: "Media Outlet 11", src: logoDownload1 },
  { name: "Media Outlet 12", src: logoDownload11 },
  { name: "Media Outlet 13", src: logoDownload1_1 },
  { name: "Media Outlet 14", src: logoThumbnail1 },
  { name: "Media Outlet 15", src: logoThumbnail2 },
];

export default function TrustedBy() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white ">
            Trusted By
          </h2>
        </motion.div>

        <LogoCarousel logos={TRUSTED_BY_LOGOS} speed={30} />

        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          className="text-center mt-8"
        >
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {MEDIA_LOGOS.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: index * 0.05,
                }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
