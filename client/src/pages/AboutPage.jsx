import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const education = [
    {
      degree: "UG Degree",
      major: "Computer Science and Engineering",
      school: "Velemmal College of Engineering and Technology",
      period: "2022 - 2026",
      achievements: [
        "CGPA: 8.7/10",
        "NSS Volunteer",
        "Trainer in Full stack development",
      ],
    },
    {
      degree: "XII",
      major: "Computer Science",
      school: "MRR MAVMM MHSS",
      period: "2021 - 2022",
      description: "",
      achievements: [
        "Percentage: 92.6%",
        "National Level Carrom Champion",
        "Top 5 in Academic Excellence",
      ],
    },
    {
      degree: "X",
      major: "Computer Science",
      school: "MRR MAVMM MHSS",
      period: "2019 - 2020",
      description: "",
      achievements: [
        "Percentage: 78%",
        "Sports Meet Olympic Torch Holder",
        "District Level Carrom Champion",
      ],
    },
  ];

  const softSkills = [
    {
      title: "Leadership",
      icon: "pi pi-users",
      color: "from-blue-500 to-cyan-500",
      description: "Led multiple project with my teams.",
      traits: ["Team Management", "Decision Making", "Conflict Resolution"],
    },
    {
      title: "Communication",
      icon: "pi pi-comments",
      color: "from-purple-500 to-pink-500",
      description:
        "Excellent verbal and written communication skills in technical and non-technical contexts.",
      traits: ["Public Speaking", "Technical Writing", "Active Listening"],
    },
    {
      title: "Problem Solving",
      icon: "pi pi-compass",
      color: "from-green-500 to-emerald-500",
      description:
        "Strong analytical and critical thinking abilities to tackle complex challenges.",
      traits: [
        "Analytical Thinking",
        "Creative Solutions",
        "Attention to Detail",
      ],
    },
    {
      title: "Adaptability",
      icon: "pi pi-refresh",
      color: "from-orange-500 to-red-500",
      description:
        "Quick learner who thrives in dynamic environments and new technologies.",
      traits: ["Quick Learning", "Flexibility", "Time Management"],
    },
  ];

  const hobbies = [
    {
      name: "Reading",
      icon: (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 sm:w-10 sm:h-10"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          initial={{ rotate: -10 }}
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      ),
      description:
        "Exploring novels, fictions, non-fiction books, and personal development books.",
    },
    {
      name: "Photography",
      icon: (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 sm:w-10 sm:h-10"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 0.9, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.path
            d="M12 17a4 4 0 100-8 4 4 0 000 8z"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </motion.svg>
      ),
      description:
        "Capturing moments and exploring visual storytelling through digital photography.",
    },
    {
      name: "Planting",
      icon: (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 sm:w-10 sm:h-10"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
        >
          <motion.path
            d="M12 19V5M12 5c2 2 4 2 6 2M12 5C10 7 8 7 6 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, y: 10 }}
            animate={{ pathLength: 1, y: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M12 19c2-2 4-2 6-2M12 19c-2-2-4-2-6-2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.svg>
      ),
      description: "Planting trees and exploring nature.",
    },
    {
      name: "Pet Care",
      icon: (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 sm:w-10 sm:h-10"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M4.5 12.5C3.67157 12.5 3 11.8284 3 11C3 10.1716 3.67157 9.5 4.5 9.5C5.32843 9.5 6 10.1716 6 11C6 11.8284 5.32843 12.5 4.5 12.5Z"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.path
            d="M9 10C8.17157 10 7.5 9.32843 7.5 8.5C7.5 7.67157 8.17157 7 9 7C9.82843 7 10.5 7.67157 10.5 8.5C10.5 9.32843 9.82843 10 9 10Z"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <motion.path
            d="M15 10C14.1716 10 13.5 9.32843 13.5 8.5C13.5 7.67157 14.1716 7 15 7C15.8284 7 16.5 7.67157 16.5 8.5C16.5 9.32843 15.8284 10 15 10Z"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
          <motion.path
            d="M19.5 12.5C18.6716 12.5 18 11.8284 18 11C18 10.1716 18.6716 9.5 19.5 9.5C20.3284 9.5 21 10.1716 21 11C21 11.8284 20.3284 12.5 19.5 12.5Z"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          />
          <motion.path
            d="M12 15C10.3431 15 9 16.3431 9 18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18C15 16.3431 13.6569 15 12 15Z"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </motion.svg>
      ),
      description: "Taking care of pets and exploring their behavior.",
    },
  ];

  const extracurriculars = [
    {
      title: "National Carrom Champion",
      period: "2016 - 2022",
      activities: [
        "2x National Level Champion",
        "4x State Level Champion",
        "Winner of 30+ Regional Tournaments",
      ],
    },
    {
      title: "Train The Trainer",
      period: "2024 - Present",
      activities: [
        "Teaching Web Development at College Level",
        "Mentoring 20+ Students in Full Stack Development",
        "Creating Practical Course Materials and Projects",
      ],
    },
    {
      title: "Competitive Programming",
      period: "2020 - Present",
      activities: [
        "Solved 200+ DSA problems",
        "Participated in coding competitions",
        "Learned new algorithms and data structures",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-40 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Vertical Title - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block w-24 flex-shrink-0 relative"
          >
            <div className="sticky top-40">
              <div className="vertical-text text-6xl sm:text-8xl font-bold text-white opacity-10 tracking-widest">
                ABOUT
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1 space-y-12 sm:space-y-16">
            {/* Introduction Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Hello, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    Navin Kumaran
                  </span>
                </h1>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  A passionate full-stack developer and UI/UX enthusiast. Beyond
                  development, I'm deeply involved in coding, mentoring, problem
                  solving and continuous learning.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                  >
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1g-PJLVCqjlXJIXUe0xaZNH5hf3OjjMLu/view?usp=sharing"
                      download
                      className="flex items-center"
                    >
                      Download CV
                      <i className="pi pi-download ml-2"></i>
                    </a>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-medium hover:bg-white/20 transition-all duration-300"
                  >
                    <a href="/projects" className="flex items-center">
                      View Projects
                      <i className="pi pi-arrow-right ml-2"></i>
                    </a>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                Education
              </h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                      <div className="md:w-1/3 mt-4">
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

            {/* Soft Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                Soft Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6"
                  >
                    <div
                      className={`bg-gradient-to-r ${skill.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-4`}
                    >
                      <i
                        className={`${skill.icon} text-lg sm:text-xl text-white`}
                      ></i>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.traits.map((trait, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white/5 rounded-md text-xs sm:text-sm text-gray-300"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Extracurricular Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                Extracurricular Activities
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {extracurriculars.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {activity.title}
                      </h3>
                      <span className="text-sm text-blue-400">
                        {activity.period}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {activity.activities.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <i className="pi pi-check text-green-500"></i>
                          <span className="text-sm sm:text-base text-gray-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hobbies Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                Hobbies & Interests
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-5 group hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                      {hobby.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                      {hobby.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {hobby.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
