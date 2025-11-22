import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../utils/constants';
// Images will be imported when available
const liquidationBefore = '/src/assets/images/case-studies/liquidation-before.jpg';
const liquidationAfter = '/src/assets/images/case-studies/liquidation-after.jpg';
const flowerPowerBefore = '/src/assets/images/case-studies/flower-power-before.jpg';
const flowerPowerAfter = '/src/assets/images/case-studies/flower-power-after.jpg';

const caseStudyImages = {
  1: { before: liquidationBefore, after: liquidationAfter },
  2: { before: flowerPowerBefore, after: flowerPowerAfter },
};

export default function CaseStudiesPage() {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-lg">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-white font-bold">
            Real results from real clients
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {CASE_STUDIES.map((study, index) => {
            const images = caseStudyImages[study.id as keyof typeof caseStudyImages];
            
            return (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`rounded-xl bg-gradient-to-br ${index % 2 === 0 ? 'from-gray-900 to-gray-800' : 'from-gray-900 via-purple-950/30 to-gray-800'} border border-gray-800 shadow-xl shadow-purple-500/20 p-10 hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-500/50 transition-all hover:scale-[1.01]`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{study.title}</h2>
                <p className="text-xl text-white mb-8 italic font-semibold">{study.subtitle}</p>

                {images && (
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-black">
                      <p className="text-sm font-bold text-white mb-2 bg-gray-950 px-2 py-1">Before</p>
                      <img
                        src={images.before}
                        alt={`${study.title} - Before`}
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="bg-black">
                      <p className="text-sm font-bold text-white mb-2 bg-gray-950 px-2 py-1">After</p>
                      <img
                        src={images.after}
                        alt={`${study.title} - After`}
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                )}

                <div className="prose max-w-none">
                  <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-semibold">{study.quote}</p>
                  
                  <div className="border-t border-gray-800 pt-8">
                    <p className="font-bold text-white text-xl mb-2">— {study.author}</p>
                    <p className="text-white text-lg font-semibold">{study.role}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

