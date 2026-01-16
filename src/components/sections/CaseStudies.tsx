import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { CASE_STUDIES } from '../../utils/constants';

export default function CaseStudies() {
  return (
    <section className="relative py-24 overflow-visible">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Case Studies
          </h2>
          <p className="text-xl md:text-2xl text-white font-bold">
            Real results from real clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl bg-gradient-to-br ${index % 2 === 0 ? 'from-gray-900 to-gray-800' : 'from-gray-900 via-purple-950/30 to-gray-800'} border border-gray-800 shadow-xl shadow-purple-500/20 p-10 min-h-[300px] hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-500/50 transition-all hover:scale-[1.02]`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{study.title}</h3>
              <p className="text-base text-white mb-5 italic font-semibold">{study.subtitle}</p>
              <p className="text-white mb-8 line-clamp-4 font-semibold text-lg leading-relaxed">{study.quote}</p>
              <div className="mb-6">
                <p className="font-bold text-white text-lg">— {study.author}</p>
                <p className="text-base text-white font-semibold">{study.role}</p>
              </div>
              {study.learnMore && (
                <Link to="/case-studies">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


