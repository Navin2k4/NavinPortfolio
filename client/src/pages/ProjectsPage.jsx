import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with real-time inventory management and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/800x600",
      category: "Full Stack",
      demoLink: "#",
      githubLink: "#",
      features: [
        "User Authentication",
        "Payment Integration",
        "Admin Dashboard",
        "Real-time Updates",
      ],
    },
    {
      title: "AI-Powered Chat App",
      description:
        "Real-time chat application with AI-powered language translation and content moderation.",
      tags: ["Next.js", "TypeScript", "WebSocket", "OpenAI"],
      image: "https://via.placeholder.com/800x600",
      category: "AI/ML",
      demoLink: "#",
      githubLink: "#",
      features: [
        "Multi-language Support",
        "Real-time Translation",
        "Voice Messages",
        "File Sharing",
      ],
    },
    {
      title: "Portfolio CMS",
      description:
        "A custom content management system for creating and managing portfolio websites.",
      tags: ["React", "GraphQL", "PostgreSQL", "AWS"],
      image: "https://via.placeholder.com/800x600",
      category: "Backend",
      demoLink: "#",
      githubLink: "#",
      features: [
        "Custom Themes",
        "SEO Optimization",
        "Analytics",
        "Media Management",
      ],
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "AI/ML"];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const featuredProject = useMemo(() => {
    return filteredProjects[0] || projects[0];
  }, [filteredProjects]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-40">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute w-96 h-96 top-1/2 left-1/2 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 bottom-48 right-48 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Featured Project */}
          {featuredProject && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
              onHoverStart={() => setHoveredProject("featured")}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="glass-effect rounded-2xl overflow-hidden h-full">
                <div className="relative h-full">
                  <motion.img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === "featured" ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm w-fit mb-4">
                      {featuredProject.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-3">
                      {featuredProject.title}
                    </h2>
                    <p className="text-gray-300 mb-4">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredProject.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-500 bg-opacity-10 text-gray-100 rounded-full text-sm border border-blue-500 border-opacity-20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={featuredProject.demoLink}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm flex items-center"
                      >
                        <i className="pi pi-external-link mr-2"></i>
                        Live Demo
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={featuredProject.githubLink}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm flex items-center"
                      >
                        <i className="pi pi-github mr-2"></i>
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Right Side - Title and Categories */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-6xl md:text-7xl text-right font-bold text-white mb-6">
              Featured Projects
            </h1>
            <p className="text-gray-400 text-xl mb-8 text-right">
              Explore my portfolio of innovative web applications and digital
              solutions.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-end gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.slice(1).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="glass-effect rounded-xl overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      animate={{
                        scale: hoveredProject === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-500 bg-opacity-10 text-gray-100 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demoLink}
                        className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                      >
                        Live Demo
                        <i className="pi pi-external-link ml-2"></i>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubLink}
                        className="text-gray-400 hover:text-gray-300 text-sm flex items-center"
                      >
                        View Code
                        <i className="pi pi-github ml-2"></i>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass-effect rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-gray-300 mb-8">
                Let's collaborate and build something amazing together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors"
              >
                Get in Touch
                <i className="pi pi-send ml-2"></i>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
