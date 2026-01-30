import { useState, useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Modal from '../components/ui/Modal';
import { CASE_STUDIES_GRID } from '../utils/constants';
import heroImage from '../assets/images/hero/hero-2.png';
import LazyImage from '../components/ui/LazyImage';
import amazonLine from '../assets/images/hero/hero-amzon.png';
import borderImage from '../assets/images/hero/border.svg';
import caseStudy1Jpg from '../assets/images/caseStudy/case-study1a.jpg';
import caseStudy1b from '../assets/images/caseStudy/case-study1b.jpg';
import caseStudy2a from '../assets/images/caseStudy/CASE-STUDY2a.jpg';
import caseStudy2b from '../assets/images/caseStudy/CASE-STUDY2b.jpg';
import caseStudy3a from '../assets/images/caseStudy/case-study3a.jpg';
import caseStudy3b from '../assets/images/caseStudy/case-study3b.jpg';

const MODAL_GALLERY_IMAGES: Record<number, string[]> = {
  3: [caseStudy1Jpg],
  4: [caseStudy2a, caseStudy2b],
  5: [caseStudy3a, caseStudy3b],
};

export default function CaseStudiesPage() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof CASE_STUDIES_GRID[0] | null>(null);
  const [caseStudyImages, setCaseStudyImages] = useState<Record<number, string>>({});

  // Dynamic imports for code splitting
  useEffect(() => {
    const loadImages = async () => {
      const [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
      ] = await Promise.all([
        import('../assets/images/caseStudy/caseStudy-1.png'),
        import('../assets/images/caseStudy/caseStudy-2.png'),
        import('../assets/images/caseStudy/caseStudy-3.png'),
        import('../assets/images/caseStudy/caseStudy-4.png'),
        import('../assets/images/caseStudy/caseStudy-5.png'),
        import('../assets/images/caseStudy/caseStudy-6.png'),
        import('../assets/images/caseStudy/caseStudy-7.png'),
        import('../assets/images/caseStudy/caseStudy-8.png'),
      ]);

      setCaseStudyImages({
        1: img1.default,
        2: img2.default,
        3: img3.default,
        4: img4.default,
        5: img5.default,
        6: img6.default,
        7: img7.default,
        8: img8.default,
      });
    };

    loadImages();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[700px] min-h-screen purple-glow-bg py-12 md:py-24 flex items-center">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 z-0 w-full h-full object-cover object-top left-0"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        
        {/* Additional Purple Glow Blur Effect - matching home page */}
        <div className="absolute bottom-[0px] left-0 w-[500px] h-[100px] rounded-full blur-[180px] -z-20" />
        
        {/* Stars Background */}
        <div className="absolute inset-0 stars-bg z-0" />
        
        {/* Border/Shadow transition effect */}
        <div className="absolute -bottom-[50px] left-0 w-full h-[200px] z-10 pointer-events-none overflow-hidden">
          <img src={borderImage} alt="Border" className="w-full h-full object-cover object-center" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center mt-[10px] px-6 relative z-10 flex-1 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-2 mt-6 px-4"
            style={{
              fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '87.34px',
              lineHeight: '27.69px',
              letterSpacing: '-2%',
              color: '#FFFFFF',
              opacity: 1
            }}
          >
            Real Results. Proven <br />
            <span className="relative inline-block mr-4 mb-[40px] mt-[80px]">
              Amazon   
              <img src={amazonLine} alt="Amazon Line" className="absolute top-[60px] left-0" />
            </span>
            Growth.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed mt-6 "
          >
            We don’t just manage Amazon ads — we scale brands profitably. Explore how we helped CPG brands increase sales, lower ACoS, and dominate their categories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <Link
              to="/contact"
              className="w-[202px] h-[46px] rounded-[5px] border border-white bg-[#1F1446] text-white font-bold text-sm flex items-center justify-center hover:bg-[#2a1d5c] transition-all duration-300"
            >
              Request a Growth Audit
            </Link>
          </motion.div>
        </div>
      </div>

      <section className="py-24 purple-glow-bg">

        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-full max-w-[800px] mx-auto text-white text-shadow-lg leading-tight mb-6 text-center">
        Results That Turn Amazon Ads Into Revenue
        </h2>
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto mb-16">
            {CASE_STUDIES_GRID.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[35px] border border-[#828282] bg-black p-[13px] hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col space-y-[34px]">
                  {/* Image */}
                  <div className="w-full h-[250px] md:h-[384px] rounded-[24px] overflow-hidden">
                    {(study.id === 3 ? caseStudy1Jpg : caseStudyImages[index + 1]) && (
                      <LazyImage
                        src={study.id === 3 ? caseStudy1Jpg : caseStudyImages[index + 1]}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="px-4 md:px-5 flex flex-col space-y-[50px] md:space-y-[65px]">
                    <div className="flex flex-col space-y-[25px] md:space-y-[35px]">
                      {/* Title */}
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                        {study.title}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    {/* Learn More Button */}
                    <button
                      onClick={() => setSelectedCaseStudy(study)}
                      className="w-full mb-4 md:mb-4 md:w-[174px] h-[46px] md:h-[46px] bg-[#1F1446] border border-white rounded-[5px] text-white font-bold text-sm hover:bg-[#2a1d5c] transition-all duration-300 flex items-center justify-center"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Wide Case Study Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-[1278px] mx-auto"
          >
            <div className="rounded-[35px] border border-[#828282] bg-black p-[10px] hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col space-y-[34px]">
                {/* Image - 1258px × 384px in Figma */}
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[384px] rounded-[24px] overflow-hidden">
                  {caseStudyImages[5] && (
                    <LazyImage
                      src={caseStudyImages[5]}
                      alt={`${CASE_STUDIES_GRID[0].title} - Case Study`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Content - 1186px width with 36px left padding in Figma */}
                <div className="px-4 sm:px-6 md:px-9 flex flex-col space-y-[25px] md:space-y-[35px]">
                  <div className="flex flex-col space-y-[25px] md:space-y-[35px]">
                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {CASE_STUDIES_GRID[0].title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
                      {CASE_STUDIES_GRID[0].description}
                    </p>
                  </div>

                  {/* Learn More Button - 174px × 46px */}
                  <button
                    onClick={() => setSelectedCaseStudy(CASE_STUDIES_GRID[0])}
                    className="w-full sm:w-[174px] h-[46px] bg-[#1F1446] border border-white rounded-[5px] text-white font-bold text-sm hover:bg-[#2a1d5c] transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Section - commented out */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Amazon Brands We've Helped Scale Faster
              </h2>
              <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
                Every Amazon brand has unique challenges—our tailored strategies reduce waste, boost visibility, and drive sustainable revenue growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[15px] max-w-[1276px] mx-auto mb-12">
              {BENEFITS.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="w-full max-w-[409px] mx-auto"
                >
                  <div className="rounded-[35px] border border-[#D9D9D9] bg-black w-full min-h-[444px] md:h-[444px] flex flex-col items-center justify-start p-4 md:p-[15px]">
                    <div className="w-full max-w-[379px] h-[250px] sm:h-[300px] md:h-[354px] rounded-[20px] overflow-hidden mb-4">
                      {caseStudyImages[index + 6] && (
                        <LazyImage
                          src={caseStudyImages[index + 6]}
                          alt={`${benefit.title} - Benefit`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white text-center">
                      {benefit.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-1">
              <div className="w-[85px] h-[11px] bg-[#8E70EE] rounded-[10px]"></div>
              <div className="w-[11px] h-[11px] bg-white/10 rounded-[10px]"></div>
              <div className="w-[11px] h-[11px] bg-white/10 rounded-[10px]"></div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Modal for Case Study Details */}
      <Modal
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        className="max-w-4xl"
      >
        {selectedCaseStudy && (() => {
          const fd = selectedCaseStudy.fullDetails as Record<string, unknown> & typeof selectedCaseStudy.fullDetails;
          const hasExtended = fd.performanceSummary ?? fd.overview ?? fd.caseSummary;
          return (
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {selectedCaseStudy.title}
                </h2>
                {fd.brandName && (
                  <p className="text-sm text-white/70 mb-2">Brand: {String(fd.brandName)}</p>
                )}
                <p className="text-lg text-white/80 mb-6">
                  {selectedCaseStudy.description}
                </p>
              </div>

              <div className="space-y-8">
                {/* Performance summary (Supplement) */}
                {fd.performanceSummary ? ((): ReactNode => {
                  const ps = fd.performanceSummary as { intro?: string; totalSales: string; netProfit: string; advertisingCost: string; profitMargin: string; paragraph: string; paragraph2?: string };
                  return (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Brand Performance Summary</h3>
                      {ps.intro && (
                        <p className="text-white leading-relaxed mb-4">{ps.intro}</p>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-4">
                          <p className="text-white/70 text-sm">Total Sales</p>
                          <p className="text-white font-semibold">{ps.totalSales}</p>
                        </div>
                        <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-4">
                          <p className="text-white/70 text-sm">Net Profit</p>
                          <p className="text-white font-semibold">{ps.netProfit}</p>
                        </div>
                        <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-4">
                          <p className="text-white/70 text-sm">Advertising Cost</p>
                          <p className="text-white font-semibold">{ps.advertisingCost}</p>
                        </div>
                        <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-4">
                          <p className="text-white/70 text-sm">Profit Margin</p>
                          <p className="text-white font-semibold">{ps.profitMargin}</p>
                        </div>
                      </div>
                      <p className="text-white leading-relaxed mb-4">{ps.paragraph}</p>
                      {ps.paragraph2 && (
                        <p className="text-white leading-relaxed">{ps.paragraph2}</p>
                      )}
                    </div>
                  );
                })() : null}

                {/* PPC stats block (Supplement) */}
                {fd.ppcStats ? ((): ReactNode => {
                  const ppc = fd.ppcStats as { headline: string; intro: string; stats: Array<{ label: string; value: string }> };
                  return (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{ppc.headline}</h3>
                      <p className="text-white/90 mb-4 leading-relaxed">{ppc.intro}</p>
                      <ul className="space-y-2">
                        {ppc.stats.map((s, i) => (
                          <li key={i} className="text-white flex flex-wrap gap-2">
                            <span className="font-semibold">{s.label}:</span>
                            <span>{s.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })() : null}

                {/* Steps (Supplement) */}
                {fd.steps && Array.isArray(fd.steps) && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
                    <div className="space-y-6">
                      {(fd.steps as Array<{ stepNumber: number; title: string; body: string }>).map((step) => (
                        <div key={step.stepNumber}>
                          <h4 className="text-white font-semibold mb-2">
                            Step {step.stepNumber}: {step.title}
                          </h4>
                          <p className="text-white/90 leading-relaxed pl-4 border-l-2 border-purple-500/50">{step.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key takeaway (Supplement) */}
                {fd.keyTakeaway && (
                  <div className="rounded-lg bg-purple-500/10 border border-purple-500/30 p-4">
                    <h4 className="text-white font-semibold mb-2">Key Takeaway</h4>
                    <p className="text-white leading-relaxed">{String(fd.keyTakeaway)}</p>
                  </div>
                )}

                {/* Case summary + YoY stats (Beauty) */}
                {fd.caseSummary ? (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Case Summary</h3>
                    {String(fd.caseSummary)
                      .split(/\n\n+/)
                      .map((para, i) => (
                        <p key={i} className="text-white leading-relaxed mb-4">
                          {para.trim()}
                        </p>
                      ))}
                    {fd.yoyStats && Array.isArray(fd.yoyStats) ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                        {(fd.yoyStats as Array<{ label: string; value: string }>).map((s: { label: string; value: string }, i: number) => (
                          <div key={i} className="rounded border border-gray-700 bg-gray-900/50 px-3 py-2">
                            <span className="text-white/70 text-sm">{s.label}</span>
                            <p className="text-white font-medium">{s.value}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}

                {/* Full case study layout (Home & Personal Care) */}
                {fd.overview && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Overview</h3>
                      <p className="text-white leading-relaxed">{String(fd.overview)}</p>
                    </div>
                    {fd.challenges && Array.isArray(fd.challenges) && (
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Challenges</h3>
                        <ul className="list-disc list-inside text-white space-y-1">
                          {(fd.challenges as string[]).map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {fd.ourStrategy && Array.isArray(fd.ourStrategy) && (
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Our Strategy</h3>
                        <ul className="list-disc list-inside text-white space-y-1">
                          {(fd.ourStrategy as string[]).map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {fd.performanceResults && Array.isArray(fd.performanceResults) && (
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Performance Results (Monthly Overview – Last 3 Months)</h3>
                        <ul className="text-white space-y-2">
                          {(fd.performanceResults as string[]).map((r, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-green-400 mt-0.5">✓</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedCaseStudy.id === 6 && (
                      <div className="rounded-lg overflow-hidden">
                        <img src={caseStudy1Jpg} alt="Sales & Profit overview" className="w-full h-auto object-cover" />
                      </div>
                    )}
                    {fd.longTermGrowth && typeof fd.longTermGrowth === 'object' && (() => {
                      const lt = fd.longTermGrowth as { period: string; paragraph: string };
                      return (
                        <div>
                          <h3 className="text-xl font-bold text-white mb-3">Long-Term Growth Overview</h3>
                          <p className="text-white/70 text-sm mb-2">Period: {lt.period}</p>
                          <p className="text-white leading-relaxed">{lt.paragraph}</p>
                        </div>
                      );
                    })()}
                    {selectedCaseStudy.id === 6 && (
                      <div className="rounded-lg overflow-hidden">
                        <img src={caseStudy1b} alt="Sales and orders by month" className="w-full h-auto object-cover" />
                      </div>
                    )}
                    {fd.summary && Array.isArray(fd.summary) && (
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Summary</h3>
                        <ul className="text-white space-y-2">
                          {(fd.summary as string[]).map((s, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-green-400 mt-0.5">✓</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Fallback: quote + metrics + author (when no extended content) */}
                {!hasExtended && (
                  <>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                      <p className="text-white leading-relaxed">{selectedCaseStudy.fullDetails.quote}</p>
                    </div>
                    {selectedCaseStudy.fullDetails.metrics && (
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Key Results</h3>
                        <div className="space-y-2">
                          {Object.entries(selectedCaseStudy.fullDetails.metrics).map(([key, value]) => (
                            <p key={key} className="text-white">
                              <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {value}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Gallery: real images or placeholders (skipped for id 6 – inline images used) */}
                {typeof fd.imageSlots === 'number' && fd.imageSlots > 0 && selectedCaseStudy.id !== 6 && (
                  <div className="border-t border-gray-800 pt-6">
                    <h3 className="text-xl font-bold text-white mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {MODAL_GALLERY_IMAGES[selectedCaseStudy.id]?.length
                        ? MODAL_GALLERY_IMAGES[selectedCaseStudy.id].map((src, i) => (
                            <div key={i} className="aspect-video rounded-lg overflow-hidden bg-gray-900/50">
                              <img
                                src={src}
                                alt={`${selectedCaseStudy.title} - ${i + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))
                        : Array.from({ length: fd.imageSlots as number }, (_, i) => (
                            <div
                              key={i}
                              className="aspect-video rounded-lg border-2 border-dashed border-gray-600 bg-gray-900/50 flex items-center justify-center text-white/50 text-sm"
                              aria-label={`Image placeholder ${i + 1}`}
                            >
                              Image {i + 1}
                            </div>
                          ))}
                    </div>
                  </div>
                )}

                {/* Author/role footer */}
                <div className="border-t border-gray-800 pt-6">
                  <p className="font-bold text-white text-lg">— {selectedCaseStudy.fullDetails.author}</p>
                  <p className="text-white">{selectedCaseStudy.fullDetails.role}</p>
                </div>
              </div>
            </div>
          );
        })()}
      </Modal>
    </>
  );
}

