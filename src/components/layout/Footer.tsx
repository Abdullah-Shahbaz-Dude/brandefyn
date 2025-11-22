import { Link } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../utils/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white shadow-lg shadow-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Brandefyn</h3>
            <p className="text-white text-sm mb-2 font-semibold">{CONTACT_INFO.address}</p>
            <p className="text-white text-sm mb-2 font-semibold">Phone: {CONTACT_INFO.phone}</p>
            <p className="text-white text-sm font-semibold">
              Email:{' '}
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors">
                {CONTACT_INFO.email}
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-white hover:text-primary transition-colors text-sm font-semibold">
                  Full Service Amazon Management →
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-primary transition-colors text-sm font-semibold">
                  Design Services →
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-primary transition-colors text-sm font-semibold">
                  Channel Reporting →
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-primary transition-colors text-sm font-semibold">
                  Advertising Management →
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-primary transition-colors text-sm font-semibold">
                  SEO Optimization →
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-primary transition-colors text-sm font-semibold">
                  Catalog Management →
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                to="/services" 
                className="inline-block px-5 py-3 bg-primary text-white hover:bg-purple-600 transition-all text-sm font-bold shadow-lg hover:shadow-xl hover:shadow-purple-500/50 glow-purple-hover"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white hover:text-primary transition-colors font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white hover:text-primary transition-colors font-semibold">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-primary transition-colors font-semibold">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white hover:text-primary transition-colors font-semibold">
                  Resources
                </Link>
              </li>
              <li>
                <a href="#free-audit" className="text-white hover:text-primary transition-colors font-semibold">
                  Free Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="YouTube"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-white hover:text-primary transition-colors flex items-center text-sm font-semibold"
            >
              <FaEnvelope className="w-5 h-5 mr-2" />
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-900">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <Link to="/privacy" className="text-sm hover:text-primary transition-colors">
              Privacy
            </Link>
            <span className="text-gray-600">·</span>
            <Link to="/terms" className="text-sm hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
          <p className="text-white text-sm text-center md:text-right font-semibold">
            Copyright © {new Date().getFullYear()} Brandefyn. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-white p-3 shadow-lg hover:bg-purple-600 hover:shadow-xl hover:shadow-purple-500/50 transition-colors z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}

