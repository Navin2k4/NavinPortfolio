import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { NAV_LINKS } from "../utils/utilities";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect backdrop-blur-md bg-white/30"
          : "bg-transparent"
      }`}

    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center space-x-2 ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            <span className="text-3xl font-bold gradient-text">NK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
              key={link.name}
                to={link.path}
                className={`transition-colors duration-300 font-medium hover:text-blue-500 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                {link.name}

              </Link>
            ))}
            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden glass-effect backdrop-blur-md`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 text-gray-800 hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="block px-3 py-2 text-blue-500 hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
