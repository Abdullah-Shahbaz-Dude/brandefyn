import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 bg-black">
      <div className="text-center rounded-2xl bg-gradient-to-br from-gray-900 via-purple-950/30 to-gray-800 border border-gray-800 p-12 shadow-2xl shadow-purple-500/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold text-primary mb-4 inline-block px-8 py-4 bg-black shadow-lg">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-white mb-8 max-w-md mx-auto font-bold">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button size="lg">Go Back Home</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}


