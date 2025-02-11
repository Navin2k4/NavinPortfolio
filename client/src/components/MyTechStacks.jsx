import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../utils/utilities";

const MyTechStacks = () => {
  const techIcons = {
    React: "devicon-react-original",
    "Next.js": "devicon-nextjs-plain",
    TypeScript: "devicon-typescript-plain",
    "Tailwind CSS": "devicon-tailwindcss-plain",
    Redux: "devicon-redux-original",
    "Node.js": "devicon-nodejs-plain",
    Express: "devicon-express-original",
    PostgreSQL: "devicon-postgresql-plain",
    Git: "devicon-git-plain",
    Docker: "devicon-docker-plain",
    Figma: "devicon-figma-plain",
    JavaScript: "devicon-javascript-plain",
  };

  return (
    <section className="py-12 sm:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-6xl mx-auto px-3 sm:px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Technologies I work with
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {Object.entries(techIcons).map(([name, iconClass], index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="flex flex-col items-center gap-2 sm:gap-3 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg sm:rounded-xl bg-gray-800/50 backdrop-blur-sm group-hover:bg-gray-800/80 transition-all duration-300">
                <i
                  className={`${iconClass} text-2xl sm:text-3xl text-gray-300 group-hover:text-white transition-colors`}
                />
              </div>
              <span className="text-gray-400 text-xs sm:text-sm font-medium text-center group-hover:text-gray-200 transition-colors line-clamp-1">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyTechStacks;
