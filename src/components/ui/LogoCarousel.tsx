import { useState } from 'react';
import { motion } from 'framer-motion';

interface Logo {
  id: number;
  name: string;
  logo: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  speed?: number;
}

export default function LogoCarousel({ logos, speed = 50 }: LogoCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className="overflow-hidden py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-8"
        animate={{
          x: isPaused ? 0 : [0, -50 * logos.length + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 flex items-center justify-center px-4"
          >
            <img
              src={logo.logo}
              alt={logo.name}
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
              onError={(e) => {
                // Fallback if image doesn't exist
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
