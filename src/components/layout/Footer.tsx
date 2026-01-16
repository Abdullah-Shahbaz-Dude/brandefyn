import { FaWhatsapp, FaEnvelope, FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../utils/constants';

// Upwork Icon SVG
const UpworkIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32 0C14.327 0 0 14.327 0 32s14.327 32 32 32 32-14.327 32-32S49.673 0 32 0zm-4.5 45.375h-5.25V28.5h5.25v16.875zm-2.625-19.125c-1.688 0-3.063-1.375-3.063-3.063s1.375-3.063 3.063-3.063 3.063 1.375 3.063 3.063-1.375 3.063-3.063 3.063zm21.75 19.125h-5.25V35.25c0-1.688-.031-3.844-2.344-3.844-2.344 0-2.719 1.813-2.719 3.719v10.25h-5.25V28.5h5.063v2.813h.063c.75-1.438 2.594-2.969 5.344-2.969 5.719 0 6.781 3.75 6.781 8.625v8.406z" />
  </svg>
);

// Amazon Icon SVG - Arrow from A to Z
const AmazonIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 55 55"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M27.5 0C12.31 0 0 12.31 0 27.5S12.31 55 27.5 55 55 42.69 55 27.5 42.69 0 27.5 0zm-5 35l-5-5 5-5v3h10v4h-10v3zm15-10h-10v-4h10v4zm-5-8h-5v-4h5v4z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative purple-glow-footer text-white overflow-hidden">
      {/* Purple Glow Orbs - Left Side */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/25 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[130px] -z-10" />
      
      <div className="container mx-auto px-4 py-12 max-w-[1400px] relative z-10">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Left Column: Brandefyn & Contact Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-8">
              Brandefyn
            </h3>
            
            {/* Contact Info with Circular Icon Containers */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-center gap-[25px]">
                <div className="w-11 h-11 rounded-full border border-white flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-6 h-6 text-white" />
                </div>
                <p className="text-white text-sm font-semibold">
                  {CONTACT_INFO.address}
                </p>
              </div>
              
              {/* Phone */}
              <div className="flex items-center gap-[25px]">
                <div className="w-11 h-11 rounded-full border border-white flex items-center justify-center flex-shrink-0">
                  <FaPhone className="w-6 h-6 text-white" />
                </div>
                <a 
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="text-white text-sm font-semibold hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-[25px]">
                <div className="w-11 h-11 rounded-full border border-white flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="w-6 h-6 text-white" />
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white text-sm font-semibold hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column: Follow Us */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-6">Follow Us</h3>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="WhatsApp"
              >
                <div className="w-11 h-11 rounded-full border border-white flex items-center justify-center">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="Instagram"
              >
                <div className="w-11 h-11 rounded-full border border-white flex items-center justify-center">
                  <FaInstagram className="w-6 h-6" />
                </div>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="Facebook"
              >
                <div className="w-11 h-11 rounded-full border border-white flex items-center justify-center">
                  <FaFacebook className="w-6 h-6" />
                </div>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="YouTube"
              >
                <div className="w-11 h-11 rounded-full border border-white flex items-center justify-center">
                  <FaYoutube className="w-6 h-6" />
                </div>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="LinkedIn"
              >
                <div className="w-11 h-11 rounded-full border border-white flex items-center justify-center">
                  <FaLinkedin className="w-6 h-6" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Our Partners */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-6">Our Partners</h3>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="Upwork"
              >
                <UpworkIcon className="w-16 h-16" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="Amazon"
              >
                <AmazonIcon className="w-[55px] h-[55px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-white my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white text-xs font-semibold">
            Copyright © 2025 Brandefyn
          </p>
        </div>
      </div>
    </footer>
  );
}
