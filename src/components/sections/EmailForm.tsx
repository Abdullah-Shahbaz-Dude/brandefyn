import { motion } from 'framer-motion';
import EmailCapture from '../forms/EmailCapture';

export default function EmailForm() {
  return (
    <section id="free-audit" className="relative py-24 bg-black overflow-visible">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center rounded-2xl bg-gradient-to-br from-gray-900 via-purple-950/30 to-gray-800 border border-gray-800 p-12 shadow-2xl shadow-purple-500/30 glow-purple-hover"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-shadow-lg">
            Free Consultation Call is your Amazon brand's GPS to success!
          </h2>
          <p className="text-xl md:text-2xl text-white mb-10 font-bold">
            Get yours today
          </p>
          <EmailCapture calendlyUrl="https://calendly.com/brandefyn/strategy-call" />
        </motion.div>
      </div>
    </section>
  );
}


