import { motion } from "framer-motion";

const IMAGE_EXT = /\.(jpg|jpeg|png|svg|webp|avif)$/i;

const logo2Modules = import.meta.glob<{ default: string }>(
  "../../assets/home/logo2/*.{jpg,jpeg,png,svg,webp,avif}",
  {
    eager: true,
  }
);

const CLIENT_LOGOS = Object.entries(logo2Modules)
  .filter(([path]) => IMAGE_EXT.test(path))
  .map(([path, module]) => {
    const name =
      path
        .split("/")
        .pop()
        ?.replace(/\.[^.]+$/, "") ?? "Client";
    return { name, src: module.default };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

/** Split logos into two rows (roughly half each). Duplicate each for seamless loop. */
const mid = Math.ceil(CLIENT_LOGOS.length / 2);
const ROW_1 = CLIENT_LOGOS.slice(0, mid);
const ROW_2 = CLIENT_LOGOS.slice(mid);
const ROW_1_LOOP = [...ROW_1, ...ROW_1];
const ROW_2_LOOP = [...ROW_2, ...ROW_2];

/** Glowing bubble style from Figma: rounded, subtle fill, inner shadow. */
const BUBBLE_CLASS =
  "rounded-[14px] bg-white/[0.2] flex items-center justify-center p-4 sm:p-5 md:p-6 min-h-[80px] sm:min-h-[90px] " +
  "shadow-[inset_1px_1px_34px_-1px_rgba(255,255,255,0.2)]";

function LogoBubble({ name, src }: { name: string; src: string }) {
  return (
    <div className={BUBBLE_CLASS}>
      <img
        src={src}
        alt={name}
        className="h-8 sm:h-10 md:h-12 w-auto max-w-full max-h-14 sm:max-h-16 md:max-h-[72px] object-contain object-center opacity-90 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="relative py-24 purple-glow-bg-subtle px-0 overflow-hidden">
      {/* Title - centered with padding */}
      <div className="w-full px-4 sm:px-6 container mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-white font-bold text-3xl sm:text-4xl">
            Clients we work with
          </p>
        </motion.div>
      </div>

      {/* Two rows full-bleed edge-to-edge, no left/right space */}
      <div className="flex flex-col gap-6 sm:gap-8 w-full">
        {/* Row 1 - scrolls left */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex flex-nowrap gap-3 sm:gap-4 md:gap-6 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {ROW_1_LOOP.map((logo, index) => (
              <div
                key={`row1-${logo.name}-${index}`}
                className="flex-shrink-0 w-[100px] sm:w-[120px] md:w-[140px]"
              >
                <LogoBubble name={logo.name} src={logo.src} />
              </div>
            ))}
          </motion.div>
        </div>
        {/* Row 2 - scrolls right */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex flex-nowrap gap-3 sm:gap-4 md:gap-6 w-max"
            animate={{ x: ["-50%", 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {ROW_2_LOOP.map((logo, index) => (
              <div
                key={`row2-${logo.name}-${index}`}
                className="flex-shrink-0 w-[100px] sm:w-[120px] md:w-[140px]"
              >
                <LogoBubble name={logo.name} src={logo.src} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
