import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';
import { NAV_ITEMS, SOCIAL_LINKS } from '../../utils/constants';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if a nav item is active
  const isActive = (path: string) => {
    // Hash links (like #free-audit) are not routes, so they're never active
    if (path.startsWith('#')) {
      return false;
    }
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 purple-glow-header w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 max-w-full overflow-x-hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-white text-xl font-bold">
              Brande<span className="italic">fyn</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 relative">
            {NAV_ITEMS.filter(item => item.label !== 'Free Audit').map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 transition-all duration-300 ${
                    active 
                      ? 'bg-gray-600/40 border border-white rounded-md text-white shadow-lg shadow-white/20' 
                      : 'text-white hover:text-white/80'
                  }`}
                  style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}
                >
                  <span className="relative z-10 font-bold" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Free Audit Button and Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Free Audit Button */}
            <button className="px-6 py-2 bg-[#8B5CF6] text-white rounded-md font-bold text-sm hover:bg-[#7C3AED] transition-colors">
              Free Audit
            </button>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-purple-400 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-2"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 font-bold transition-colors ${
                    active
                      ? 'text-purple-400'
                      : 'text-white hover:text-purple-400'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex items-center space-x-4 px-4 py-2">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="w-5 h-5 text-white" />
              </a>
            </div>
            <button className="px-6 py-2 bg-[#8B5CF6] text-white rounded-md font-bold text-sm hover:bg-[#7C3AED] transition-colors">
              Free Audit
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

