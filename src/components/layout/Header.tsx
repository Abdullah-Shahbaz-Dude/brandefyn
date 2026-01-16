import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { NAV_ITEMS, SOCIAL_LINKS } from '../../utils/constants';
// Logo will be imported when available
// import brandefynLogo from '../../assets/images/logo/brandefyn-logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [activeUnderlineStyle, setActiveUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const location = useLocation();

  // Check if a nav item is active
  const isActive = (path: string) => {
    // Hash links (like #free-audit) are not routes, so they're never active
    if (path.startsWith('#')) {
      return false;
    }
    return location.pathname === path;
  };

  useEffect(() => {
    // Reset hover underline when route changes
    setHoveredIndex(null);
    
    // Set active item underline position after a small delay to ensure refs are set
    const timer = setTimeout(() => {
      const activeIndex = NAV_ITEMS.findIndex(item => {
        // Hash links are not routes, so skip them
        if (item.path.startsWith('#')) {
          return false;
        }
        return location.pathname === item.path;
      });
      
      if (activeIndex !== -1 && navRefs.current[activeIndex]) {
        const element = navRefs.current[activeIndex];
        if (element) {
          // Since the underline is absolutely positioned within the Link element,
          // we just need the width. The left should be 0 relative to the Link.
          setActiveUnderlineStyle({
            left: 0,
            width: element.offsetWidth,
          });
        }
      } else {
        setActiveUnderlineStyle({ left: 0, width: 0 });
      }
    }, 0);
    
    return () => clearTimeout(timer);
  }, [location]);

  const handleMouseEnter = (index: number, event: React.MouseEvent<HTMLAnchorElement>) => {
    setHoveredIndex(index);
    const element = event.currentTarget;
    // Since underline is absolutely positioned within the Link, use left: 0 and element width
    setUnderlineStyle({
      left: 0,
      width: element.offsetWidth,
    });
  };

  const handleMouseMove = (index: number, event: React.MouseEvent<HTMLAnchorElement>) => {
    if (hoveredIndex === index) {
      const element = event.currentTarget;
      // Since underline is absolutely positioned within the Link, use left: 0 and element width
      setUnderlineStyle({
        left: 0,
        width: element.offsetWidth,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    // Reset hover underline position when mouse leaves
    setUnderlineStyle({ left: 0, width: 0 });
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 purple-glow-header bg-transparent  w-full"
    >
      <nav className="container mx-auto px-4 py-4 max-w-full overflow-x-hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white px-3 py-1 backdrop-blur-sm rounded">Brandefyn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {NAV_ITEMS.map((item, index) => {
              const isFreeAudit = item.label === 'Free Audit';
              const active = isActive(item.path);
              return (
                <div key={item.path} className="flex items-center gap-2">
                  <Link
                    to={item.path}
                    ref={(el) => {
                      navRefs.current[index] = el;
                    }}
                    onMouseEnter={(e) => !active && handleMouseEnter(index, e)}
                    onMouseMove={(e) => !active && handleMouseMove(index, e)}
                    onMouseLeave={handleMouseLeave}
                    className={`relative px-2 py-2 transition-all duration-300 group ${
                      active 
                        ? 'text-purple-400' 
                        : 'text-white hover:text-purple-400'
                    }`}
                    style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}
                  >
                    <span className="relative z-10 font-bold" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>{item.label}</span>
                    {/* Active underline - always visible for active item */}
                    {active && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-purple-500 shadow-lg shadow-purple-500/50"
                        initial={{ width: 0 }}
                        animate={{
                          left: activeUnderlineStyle.left,
                          width: activeUnderlineStyle.width,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {/* Hover underline - only for non-active items */}
                    {!active && hoveredIndex === index && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-purple-500 shadow-lg shadow-purple-500/50"
                        initial={{ width: 0 }}
                        animate={{
                          width: underlineStyle.width,
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ left: 0 }}
                      />
                    )}
                  </Link>
                  {/* Social Icons next to Free Audit */}
                  {isFreeAudit && (
                    <div className="flex items-center space-x-3 ml-2">
                      <a
                        href={SOCIAL_LINKS.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <FaWhatsapp className="w-5 h-5" />
                      </a>
                      <a
                        href={SOCIAL_LINKS.email}
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                        aria-label="Email"
                      >
                        <FaEnvelope className="w-5 h-5" />
                      </a>
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
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
                <FaWhatsapp className="w-5 h-5 text-green-400" />
              </a>
              <a href={SOCIAL_LINKS.email} aria-label="Email">
                <FaEnvelope className="w-5 h-5 text-purple-400" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5 text-purple-400" />
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

