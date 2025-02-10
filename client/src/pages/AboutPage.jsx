import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const education = [
    {
      degree: "Bachelor of Engineering",
      major: "Computer Science",
      school: "Anna University",
      period: "2021 - 2025",
      description:
        "Focusing on software engineering, web development, and artificial intelligence.",
      achievements: ["CGPA: 8.5/10", "Technical Club Lead", "Hackathon Winner"],
    },
  ];

  const interests = [
    {
      title: "Web Development",
      icon: "pi pi-desktop",
      color: "from-blue-500 to-cyan-500",
      description:
        "Passionate about creating beautiful and functional web applications using modern technologies.",
    },
    {
      title: "UI/UX Design",
      icon: "pi pi-palette",
      color: "from-purple-500 to-pink-500",
      description:
        "Love crafting intuitive user interfaces and engaging user experiences.",
    },
    {
      title: "Open Source",
      icon: "pi pi-github",
      color: "from-green-500 to-emerald-500",
      description:
        "Contributing to and learning from the open-source community.",
    },
    {
      title: "Problem Solving",
      icon: "pi pi-code",
      color: "from-orange-500 to-red-500",
      description:
        "Enjoy tackling complex problems and finding elegant solutions.",
    },
  ];

  const journey = [
    {
      year: "2021",
      title: "Started College",
      description: "Began my journey in Computer Science at Anna University.",
    },
    {
      year: "2022",
      title: "First Project",
      description: "Built my first full-stack web application.",
    },
    {
      year: "2023",
      title: "Internship",
      description:
        "Gained practical experience through internships and projects.",
    },
    {
      year: "2024",
      title: "Portfolio Growth",
      description:
        "Expanded my portfolio with diverse projects and contributions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="container mx-auto px-4">
        <div className="flex gap-16">
          {/* Vertical Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-32 flex-shrink-0 relative"
          >
            <div className="sticky top-40">
              <div className="vertical-text text-9xl font-bold text-white opacity-10 tracking-widest">
                ABOUT
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1 space-y-20">
            {/* Introduction Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Hello, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    Navin Kumaran
                  </span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  A passionate full-stack developer and UI/UX enthusiast. I love
                  creating beautiful, functional, and user-friendly web
                  applications. With a strong foundation in modern web
                  technologies and a keen eye for design, I strive to build
                  digital experiences that make a difference.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Download CV
                    <i className="pi pi-download ml-2"></i>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                  >
                    View Projects
                    <i className="pi pi-arrow-right ml-2"></i>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                      <div className="md:w-1/3">
                        <h3 className="text-xl font-bold text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-400 mt-1">{edu.major}</p>
                        <p className="text-gray-400 mt-1">{edu.school}</p>
                        <p className="text-gray-500 mt-1">{edu.period}</p>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-gray-300 mb-4">{edu.description}</p>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-center text-gray-400"
                            >
                              <i className="pi pi-check text-green-500 mr-2"></i>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                What I'm Passionate About
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8"
                  >
                    <div
                      className={`bg-gradient-to-r ${interest.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                    >
                      <i className={`${interest.icon} text-xl text-white`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {interest.title}
                    </h3>
                    <p className="text-gray-400">{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <h2 className="text-3xl font-bold text-white mb-8">My Journey</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 opacity-20"></div>

                  <div className="space-y-12">
                    {journey.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`flex flex-col md:flex-row gap-8 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="flex-1 md:text-right">
                          <div className="bg-white/5 p-6 rounded-2xl">
                            <span className="text-blue-400 font-medium">
                              {item.year}
                            </span>
                            <h3 className="text-xl font-bold text-white mt-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-400 mt-2">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="hidden md:flex items-center justify-center w-12">
                          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                        </div>
                        <div className="flex-1"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
