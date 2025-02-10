import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, footerLinks } from "../utils/utilities";

const Footer = () => {
  const location = useLocation();
  const disabledPages = ["/contact"];

  if (disabledPages.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-20">
      {/* Decorative SVG Background */}
      <div className="absolute  inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 transform -translate-x-1/4"
          width="400"
          height="400"
          fill="none"
          viewBox="0 0 400 400"
        >
          <motion.circle
            cx="200"
            cy="200"
            r="100"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeOpacity="0.1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        <svg
          className="absolute top-0 right-0 transform translate-x-1/4"
          width="400"
          height="400"
          fill="none"
          viewBox="0 0 400 400"
        >
          <motion.path
            d="M200,0 A200,200 0 0,1 400,200"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeOpacity="0.1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-3xl font-bold gradient-text">
              NK
            </Link>
            <p className="text-gray-400 mt-2">
              Crafting digital experiences with passion and precision.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Portfolio Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white text-lg font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-2">
              {footerLinks.portfolio.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-white text-lg font-semibold mb-4">
              Get in Touch
            </h3>
            <div className="space-y-2 text-gray-400">
              <motion.p
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2"
              >
                <i className="pi pi-envelope"></i>
                <span>navinkumaran2004@gmail.com</span>
              </motion.p>
              <motion.p
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2"
              >
                <i className="pi pi-phone"></i>
                <span>+91 8610703970</span>
              </motion.p>
              <motion.p
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2"
              >
                <i className="pi pi-map-marker"></i>
                <span>Madurai, TN</span>
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Navin Kumaran. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
