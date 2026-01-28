import { FaWhatsapp, FaEnvelope, FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../utils/constants';

import upworkLogo from '../../assets//images/fotter/Vector.png';
import amazonLogo from '../../assets//images/fotter/ri_amazon-line.png';
// Upwork Icon SVG



export default function Footer() {
  return (
    <footer className="purple-glow-footer text-white mt-10 relative" style={{ marginBottom: 0 }}>
      {/* Purple Glow Orbs - Left Side */}
      
      
      <div className="container mx-auto px-4 pt-12 pb-12 max-w-[1400px] relative z-10">
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
               <img src={upworkLogo} alt="Upwork Logo"  />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-opacity hover:opacity-70"
                aria-label="Amazon"
              >
                <img src={amazonLogo} alt="Amazon Logo" className="w-[55px] h-[55px]" />
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
