import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Offer() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-br from-gray-900 via-purple-950/30 to-gray-800 border border-gray-800 p-12 shadow-2xl shadow-purple-500/30 glow-purple-hover"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-shadow-lg">
            Ready to Transform Your Amazon Business?
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 font-semibold">
            Join hundreds of CPG brands that trust us to grow their sales
          </p>
          <a href="#free-audit">
            <Button size="lg" className="text-lg px-10 py-5">
              Get Your Free Strategy Call →
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


