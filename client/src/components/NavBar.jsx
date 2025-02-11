import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { NAV_LINKS } from "../utils/utilities";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setIsScrollingUp(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`
        fixed w-full z-50 
        transition-all duration-500 
        ${
          isScrolled
            ? isScrollingUp
              ? "transform translate-y-0 opacity-100"
              : "transform -translate-y-full opacity-0"
            : "transform translate-y-0"
        }
      `}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
        {/* Glass Effect Container */}
        <div
          className="
          relative
           backdrop-blur-md bg-gray-800/70
          shadow-lg shadow-black/20
          rounded-2xl
          border border-white/5
          transition-all duration-500
          transform origin-top
          ${isScrolled ? 'scale-95' : 'scale-100'}
        "
        >
          <div className="flex justify-between items-center h-16 px-6">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 text-white">
              <img src={"/iconround.png"} alt="Logo" className="w-12 h-12" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium
                    transition-all duration-300
                    ${
                      isActive(link.path)
                        ? "text-white bg-white/10 shadow-lg shadow-white/5"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }
                    relative group
                  `}
                >
                  {link.name}
                  {/* Animated underline */}
                  <span
                    className={`
                    absolute bottom-0 left-0 w-full h-0.5 
                    bg-gradient-to-r from-blue-500 to-purple-500
                    transform origin-left scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300
                    ${isActive(link.path) ? "scale-x-100" : ""}
                  `}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-blue-400 transition-colors duration-300"
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

          {/* Mobile Menu */}
          <div
            className={`
              md:hidden
              transition-all duration-300 ease-in-out
              ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
              overflow-hidden
              bg-gray-800/50 backdrop-blur-md
              rounded-b-2xl
            `}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    block px-3 py-2 rounded-lg text-sm font-medium
                    transition-all duration-300
                    ${
                      isActive(link.path)
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
