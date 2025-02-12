import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { projects } from "../utils/utilities";

const ProjectsSlider = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Optimized spring settings for smoother animation
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    mass: 0.5,
    stiffness: 70,
    restDelta: 0.001,
  });

  // Adjusted transform values for smoother movement
  const rightMovement = useTransform(smoothProgress, [0, 1], ["5%", "-55%"]);
  const leftMovement = useTransform(smoothProgress, [0, 1], ["-55%", "5%"]);

  return (
    <div
      ref={containerRef}
      className="relative py-12 sm:py-20 overflow-hidden bg-transparent"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gray-900 bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900/0 via-gray-900/50 to-gray-900/0 backdrop-blur-3xl" />

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-1/4 sm:w-1/3 bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-1/4 sm:w-1/3 bg-gradient-to-l from-gray-900 to-transparent z-10" />

      {/* Animated Background Blobs - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute w-full h-full">
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 -top-32 sm:-top-48 -left-32 sm:-left-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 top-1/2 left-1/2 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 -bottom-32 sm:bottom-48 -right-32 sm:right-48 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Title */}
      <div className="relative text-center mb-8 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block px-4 sm:px-0"
        >
          {/* <span className="absolute -inset-4 sm:-inset-8 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-20 blur-2xl" /> */}
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              Featured
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
              Projects
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Projects Slider */}
      <div className="relative">
        {/* First Row - Moving Right */}
        <motion.div
          style={{ x: rightMovement }}
          className="flex gap-3 sm:gap-6 mb-3 sm:mb-6 px-2 sm:px-4 will-change-transform"
        >
          <div className="flex gap-3 sm:gap-6">
            {[...projects, ...projects].map((project, index) => (
              <motion.div
                key={index}
                className="relative w-48 sm:w-64 md:w-72 h-32 sm:h-40 md:h-48 flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-0.5 sm:mb-1 truncate">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/20">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Second Row - Moving Left */}
        <motion.div
          style={{ x: leftMovement }}
          className="flex gap-3 sm:gap-6 px-2 sm:px-4 will-change-transform"
        >
          <div className="flex gap-3 sm:gap-6">
            {[...projects.reverse(), ...projects].map((project, index) => (
              <motion.div
                key={index}
                className="relative w-48 sm:w-64 md:w-72 h-32 sm:h-40 md:h-48 flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-0.5 sm:mb-1 truncate">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/20">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
