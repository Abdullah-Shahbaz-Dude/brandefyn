import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CASE_STUDIES } from "../../utils/constants";
// Images will be imported when available
const liquidationBefore =
  "/src/assets/images/case-studies/liquidation-before.jpg";
const liquidationAfter =
  "/src/assets/images/case-studies/liquidation-after.jpg";
const flowerPowerBefore =
  "/src/assets/images/case-studies/flower-power-before.jpg";
const flowerPowerAfter =
  "/src/assets/images/case-studies/flower-power-after.jpg";

const caseStudyImages = {
  1: { before: liquidationBefore, after: liquidationAfter },
  2: { before: flowerPowerBefore, after: flowerPowerAfter },
};

export default function BeforeAfter() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            CLIENT BEFORE & AFTER RESULTS
          </h2>
          <p className="text-xl md:text-2xl text-white font-bold">
            We Work With New & Established Accounts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.flatMap((study) => {
            const images =
              caseStudyImages[study.id as keyof typeof caseStudyImages];
            const isExpanded = expandedId === study.id;

            if (!images) return [];

            // Create two cards: one for Before, one for After
            return [
              // Before Card
              <motion.div
                key={`${study.id}-before`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 shadow-xl shadow-purple-500/20 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-500/50 transition-all hover:scale-[1.02]"
              >
                {/* Before Image */}
                <div className="bg-black">
                  <p className="text-sm font-bold text-white mb-2 px-4 pt-4 bg-gray-950">
                    Before
                  </p>
                  <img
                    src={images.before}
                    alt={`${study.title} - Before`}
                    className="w-full h-64 md:h-80 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {study.title}
                  </h3>
                  <p className="text-base text-white mb-5 italic font-semibold">
                    {study.subtitle}
                  </p>
                  <p className="text-white mb-5 line-clamp-3 font-semibold text-lg">
                    {study.quote}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-lg">
                        — {study.author}
                      </p>
                      <p className="text-base text-white font-semibold">
                        {study.role}
                      </p>
                    </div>
                    {study.learnMore && (
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : study.id)
                        }
                        className="flex items-center gap-2 text-purple-400 transition-all font-bold bg-gray-900 px-4 py-2 hover:bg-primary hover:text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50"
                      >
                        {isExpanded ? (
                          <>
                            <span>Show Less</span>
                            <FaChevronUp />
                          </>
                        ) : (
                          <>
                            <span>Learn More</span>
                            <FaChevronDown />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-4 pt-4 border-t border-gray-800"
                      >
                        <p className="text-white mb-4 font-medium">
                          {study.quote}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>,
              // After Card
              <motion.div
                key={`${study.id}-after`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-xl bg-gradient-to-br from-gray-900 via-purple-950/30 to-gray-800 border border-gray-800 shadow-xl shadow-purple-500/20 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-500/50 transition-all hover:scale-[1.02]"
              >
                {/* After Image */}
                <div className="bg-black">
                  <p className="text-sm font-bold text-white mb-2 px-4 pt-4 bg-gray-950">
                    After
                  </p>
                  <img
                    src={images.after}
                    alt={`${study.title} - After`}
                    className="w-full h-64 md:h-80 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {study.title}
                  </h3>
                  <p className="text-base text-white mb-5 italic font-semibold">
                    {study.subtitle}
                  </p>
                  <p className="text-white mb-5 line-clamp-3 font-semibold text-lg">
                    {study.quote}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-lg">
                        — {study.author}
                      </p>
                      <p className="text-base text-white font-semibold">
                        {study.role}
                      </p>
                    </div>
                    {study.learnMore && (
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : study.id)
                        }
                        className="flex items-center gap-2 text-purple-400 transition-all font-bold bg-gray-900 px-4 py-2 hover:bg-primary hover:text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50"
                      >
                        {isExpanded ? (
                          <>
                            <span>Show Less</span>
                            <FaChevronUp />
                          </>
                        ) : (
                          <>
                            <span>Learn More</span>
                            <FaChevronDown />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-4 pt-4 border-t border-gray-800"
                      >
                        <p className="text-white mb-4 font-medium">
                          {study.quote}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>,
            ];
          })}
        </div>
      </div>
    </section>
  );
}
