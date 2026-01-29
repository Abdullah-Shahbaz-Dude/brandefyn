import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  CALENDLY_EMBED_URL,
} from '../../utils/constants';

const CALENDLY_SCRIPT_URL =
  'https://assets.calendly.com/assets/external/widget.js';

export default function ScheduleCall() {
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const existing = document.querySelector(
      `script[src="${CALENDLY_SCRIPT_URL}"]`
    );
    if (existing) {
      scriptLoadedRef.current = true;
      return;
    }

    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT_URL;
    script.async = true;
    script.onload = () => {
      scriptLoadedRef.current = true;
    };
    document.body.appendChild(script);

    return () => {
      // Script stays in DOM for potential reuse; no cleanup needed
    };
  }, []);

  return (
    <section
      id="schedule-call"
      className="relative py-16 md:py-20 purple-glow-bg-medium overflow-hidden"
    >
      <div className="container mx-auto px-3 sm:px-6 max-w-[1200px] relative z-10">
        {/* Section title and subtitle - tighter */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-2 tracking-tight">
            Book Your Strategy Call
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto">
            Pick a time that works for you
          </p>
        </motion.div>

        {/* Calendly embed - dark, close, refined frame */}
        <motion.div
          ref={calendlyContainerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-950 to-black border border-gray-800 shadow-[0_0_0_1px_rgba(139,92,246,0.15),0_8px_32px_rgba(0,0,0,0.5),0_0_60px_rgba(139,92,246,0.08)] w-full">
            <div
              className="calendly-inline-widget w-full"
              data-url={CALENDLY_EMBED_URL}
              style={{ width: '100%', height: 680 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
