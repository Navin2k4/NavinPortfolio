import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../utils/utilities";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ["All", "React", "NextJs", "Frontend"];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const featuredProject = useMemo(() => {
    return filteredProjects[0] || projects[0];
  }, [filteredProjects]);

  const ProjectCard = ({ project, index, isFeatured = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative h-full ${isFeatured ? "md:col-span-2" : ""}`}
    >
      {/* Card Container */}
      <div
        className={`relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden h-full flex flex-col ${
          isFeatured ? "md:flex-row" : ""
        }`}
      >
        {/* Decorative top line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />

        {/* Image Container with Overlay */}
        <div
          className={`relative ${isFeatured ? "md:w-1/2" : ""} ${
            isFeatured ? "md:h-auto" : "h-36 sm:h-48"
          } overflow-hidden`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <span
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md 
              text-white rounded-lg text-xs sm:text-sm font-medium shadow-lg shadow-blue-500/20 border border-white/10"
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          className={`p-4 sm:p-6 flex flex-col flex-grow ${
            isFeatured ? "md:w-1/2 md:p-8" : ""
          }`}
        >
          {/* Title */}
          <h3
            className={`${
              isFeatured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
            } font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors line-clamp-1`}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className={`text-gray-400 ${
              isFeatured ? "text-sm sm:text-base" : "text-xs sm:text-sm"
            } mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-none`}
          >
            {project.description}
          </p>

          {/* Features - Hidden on mobile, visible on larger screens */}
          <div className="hidden sm:block mb-6 flex-grow">
            <h4 className="text-white text-sm font-medium mb-3">
              Key Features
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {project.features.map((feature, featureIndex) => (
                <span
                  key={featureIndex}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium
                    bg-blue-500/10 text-blue-300 border border-blue-500/20"
                >
                  <svg
                    className="w-3.5 h-3.5 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Tags - Show fewer tags on mobile */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {project.tags
              .slice(0, window.innerWidth < 640 ? 3 : undefined)
              .map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-xs font-medium
                  bg-white/5 text-gray-300 border border-white/10 group-hover:border-blue-500/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            {window.innerWidth < 640 && project.tags.length > 3 && (
              <span className="px-2 py-0.5 rounded-md text-xs font-medium text-gray-400">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg sm:rounded-xl
                text-white text-xs sm:text-sm font-medium text-center
                hover:from-blue-500 hover:to-indigo-500 transition-all duration-300
                shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 ${
                  isFeatured ? "sm:text-base sm:py-3" : ""
                }`}
            >
              <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                <i className="pi pi-external-link text-[10px] sm:text-xs"></i>
                <span className="sm:block">Live Demo</span>
              </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 bg-white/5 hover:bg-white/10 rounded-lg sm:rounded-xl
                text-gray-300 text-xs sm:text-sm font-medium text-center
                border border-white/10 hover:border-white/20 transition-all duration-300 ${
                  isFeatured ? "sm:text-base sm:py-3" : ""
                }`}
            >
              <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                <i className="pi pi-github text-[10px] sm:text-xs"></i>
                <span className="sm:block">Source</span>
              </span>
            </motion.a>
          </div>
        </div>

        {/* Hover Effects - Corner Accents */}
        <div className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-blue-500/0 rounded-tl-xl group-hover:border-blue-500/50 transition-all duration-300" />
        <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-blue-500/0 rounded-tr-xl group-hover:border-blue-500/50 transition-all duration-300" />
        <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-blue-500/0 rounded-bl-xl group-hover:border-blue-500/50 transition-all duration-300" />
        <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-blue-500/0 rounded-br-xl group-hover:border-blue-500/50 transition-all duration-300" />
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-28 md:py-32 lg:py-40">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 -top-32 sm:-top-48 -left-32 sm:-left-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 top-1/2 left-1/2 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 -bottom-32 sm:bottom-48 -right-32 sm:right-48 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="relative mb-12 sm:mb-16">
          {/* Decorative elements */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500/10 rounded-full blur-2xl" />

          <div className="relative">
            {/* Left decorative line */}
            <div className="absolute top-1/2 left-0 w-[15%] sm:w-[30%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            {/* Right decorative line */}
            <div className="absolute top-1/2 right-0 w-[15%] sm:w-[30%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="text-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block relative px-4 sm:px-0"
              >
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-20 blur-xl" />
                <h1 className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                    Featured
                  </span>
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
                    Projects
                  </span>
                </h1>
                {/* Decorative dots */}
                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-8 sm:w-12 h-8 sm:h-12 grid grid-cols-2 gap-0.5 sm:gap-1">
                  <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-blue-400/40" />
                  <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-purple-400/40" />
                  <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-purple-400/40" />
                  <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-blue-400/40" />
                </div>
                {/* Bottom accent line */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur-sm" />
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-center mt-8 sm:mt-12 px-4 sm:px-6"
          >
            Explore my portfolio of innovative web applications and digital
            solutions.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-2 sm:px-0">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300
                ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 backdrop-blur-sm border border-white/10"
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {featuredProject && (
            <ProjectCard
              project={featuredProject}
              index={0}
              isFeatured={true}
            />
          )}
          <AnimatePresence mode="wait">
            {filteredProjects.slice(1).map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + 1}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
