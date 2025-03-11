import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SOCIAL_LINKS, scrollToSection } from "../utils/utilities";
import CallToAction from "./CallToAction";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth spring animation for rotation
  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    rotateX.set(mousePosition.y * 45); // 45 degrees max rotation
    rotateY.set(mousePosition.x * 45);
  }, [mousePosition]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section className="min-h-screen flex items-center relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[85%] h-[85%] relative overflow-hidden">
          <img
            src="/myphoto.jpg"
            alt="Navin Kumaran"
            className="w-full h-full object-cover object-center opacity-40"
            style={{
              filter: "brightness(0.6) contrast(1.1)",
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/85 backdrop-blur-[3px]"></div>
        </div>
      </div>

      {/* Modern 3D Background Design with reduced opacity */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          perspective: 2000,
        }}
      >
        <svg
          viewBox="-200 -200 400 400"
          className="w-full h-full max-w-3xl mx-auto"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated Circles */}
          <motion.g
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[40, 80, 120].map((radius, index) => (
              <motion.circle
                key={radius}
                cx="0"
                cy="0"
                r={radius}
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="0.5"
                strokeDasharray={radius * 2}
                animate={{
                  strokeDashoffset: [0, radius * 4],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10 + index * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.g>

          {/* Floating Geometric Shapes */}
          <motion.g>
            {/* Triangles */}
            {[0, 120, 240].map((angle) => (
              <motion.path
                key={angle}
                d="M 0,-40 L 34.6,20 L -34.6,20 Z"
                fill="url(#gradient2)"
                stroke="#4B5563"
                strokeWidth="0.5"
                initial={{ rotate: angle, scale: 0.8 }}
                animate={{
                  rotate: [angle, angle + 360],
                  scale: [0.8, 1, 0.8],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Floating Lines */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <motion.line
                key={angle}
                x1="0"
                y1="-100"
                x2="0"
                y2="100"
                stroke="#60A5FA"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                initial={{ rotate: angle }}
                animate={{
                  rotate: [angle, angle + 360],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.g>

          {/* Central Glowing Element */}
          <motion.circle
            cx="0"
            cy="0"
            r="20"
            fill="url(#gradient1)"
            filter="url(#glow)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        
        <motion.div
          className="max-w-8xl mx-auto flex flex-col justify-center min-h-screen"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Modern animated element instead of </> */}
          <motion.div
            className="text-5xl mb-8 relative"
            variants={itemVariants}
          >
            <motion.div
              className="w-16 h-16 relative"
              animate={{
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div className="absolute inset-1 rounded-lg bg-gray-900 flex items-center justify-center">
                <motion.div
                  className="w-8 h-8 border-4 border-blue-500 rounded-full"
                  animate={{
                    borderColor: ["#3B82F6", "#60A5FA", "#3B82F6"],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.h2
            className="text-2xl md:text-3xl text-blue-400 mb-4"
            variants={itemVariants}
          >
            Hello, I'm
          </motion.h2>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            variants={itemVariants}
          >
            Navin Kumaran
          </motion.h1>

          {/* Role */}
          <motion.div
            className="flex items-center space-x-4 mb-6"
            variants={itemVariants}
          >
            <span className="h-1 w-12 bg-blue-500"></span>
            <span className="text-xl md:text-2xl text-gray-300">
              Full Stack Developer & Designer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl text-gray-400 mb-8 max-w-2xl"
            variants={itemVariants}
          >
            Transforming ideas into elegant digital solutions. Specializing in
            building exceptional websites, applications, and everything in
            between.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-r-3xl transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
              >
                <span>Get in Touch</span>
              </a>
                <i className="pi pi-arrow-right"></i>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-r-3xl transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
              target="_blank"
              href="https://drive.google.com/file/d/1g-PJLVCqjlXJIXUe0xaZNH5hf3OjjMLu/view?usp=sharing">
                <span>View CV</span>
              </a>
                <i className="pi pi-external-link"></i>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div className="mt-12" variants={itemVariants}>
            <div className="flex space-x-6">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${social.icon} text-2xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex flex-col items-center text-blue-400">
              <motion.span className="text-sm mb-2" whileHover={{ scale: 1.1 }}>
                Scroll Down
              </motion.span>
              <motion.i
                className="pi pi-angle-down text-xl"
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
