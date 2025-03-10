import React from "react";
import { motion } from "framer-motion";

const SkillsPage = () => {
  const stats = {
    leetcode: {
      icon: "pi-code",
      color: "bg-[#282828]",
      textColor: "text-[#ffa116]",
      profileUrl: "https://leetcode.com/u/navinkumaran2004/",
      primaryStats: {
        solved: 180,
        accaptance: "78.17%",
      },
      secondaryStats: {
        rank: 646587,
        badges: 2,
      },
    },
    geeksforgeeks: {
      icon: "pi-database",
      color: "bg-[#2f8d46]",
      textColor: "text-white",
      profileUrl: "https://www.hackerrank.com/profile/22cseb48_Navin",
      primaryStats: {
        solved: 89,
        score: 4251,
      },
      secondaryStats: {
        certification: "Python(Basic)",
        badges: 5,
      },
    },

    hackerrank: {
      icon: "pi-verified",
      color: "bg-[#1ba94c]",
      textColor: "text-white",
      profileUrl: "https://www.geeksforgeeks.org/user/navinkumaran2004/",
      primaryStats: {
        solved: 59,
        codingScore: 142,
      },
      secondaryStats: {
        instituteRank: "97",
        language: "Java",
      },
    },
    github: {
      icon: "pi-github",
      color: "bg-[#2b3137]",
      textColor: "text-[#2dba4e]",
      profileUrl: "https://github.com/Navin2k4",
      primaryStats: {
        repos: 27,
        stars: 5,
      },
      secondaryStats: {
        commits: "434",
        followers: 9,
      },
    },
    linkedin: {
      icon: "pi-linkedin",
      color: "bg-[#0a66c2]",
      textColor: "text-white",
      profileUrl: "https://www.linkedin.com/in/navin2004/",
      primaryStats: {
        connections: "500+",
        followers: 809,
      },
      secondaryStats: {
        posts: 24,
        activefrom: "2023",
      },
    },
  };

  const skills = {
    languages: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "SQL", level: 70 },
    ],
    frameworks: [
      { name: "React", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Express", level: 85 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Docker", level: 70 },
    ],
  };

  const PlatformBadge = ({ platform, data }) => (
    <motion.a
      href={data.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`${data.color} inline-flex items-center gap-2 px-4 py-2 rounded-full 
        shadow-md hover:shadow-lg transition-all duration-300 group`}
    >
      <i className={`pi ${data.icon} ${data.textColor}`}></i>
      <span className={`${data.textColor} font-medium`}>{platform}</span>
      <i className="pi pi-external-link text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
    </motion.a>
  );

  const StatCard = ({ platform, data }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${data.color} rounded-lg overflow-hidden shadow-lg hover:shadow-xl 
        transition-all duration-300 transform hover:scale-105 flex flex-col h-full`}
    >
      {/* Header with gradient overlay */}
      <div className={`p-3 relative`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className={`pi ${data.icon} text-xl ${data.textColor}`}></i>
            <h3 className={`text-lg font-bold ${data.textColor}`}>
              {platform}
            </h3>
          </div>
          <a
            href={data.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${data.textColor} hover:opacity-80 transition-opacity`}
          >
            <i className="pi pi-external-link"></i>
          </a>
        </div>
      </div>

      {/* Stats Container */}
      <div className="flex-1 p-3 pt-0">
        {/* Primary Stats */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {Object.entries(data.primaryStats).map(([key, value]) => (
            <div
              key={key}
              className="bg-black bg-opacity-20 rounded-lg p-2 flex flex-col items-center justify-center"
            >
              <p className={`text-xl font-bold ${data.textColor}`}>{value}</p>
              <p className="text-xs text-gray-300 capitalize mt-1">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(data.secondaryStats).map(([key, value]) => (
            <div key={key} className="text-center">
              <p className="text-base font-semibold text-gray-200">{value}</p>
              <p className="text-xs text-gray-400 capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const HexagonSkill = ({ skill, delay, color = "blue" }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="hex-container"
    >
      <div className={`hexagon bg-${color}-500 bg-opacity-20`}>
        <div className="content">
          <p className="text-white font-medium text-xs sm:text-sm mb-1.5 sm:mb-2">
            {skill.name}
          </p>
          <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay }}
              className={`h-full bg-${color}-500`}
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen  bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative w-full pt-26 bg-gradient-to-b from-black to-transparent">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl 
            backdrop-blur-sm border  p-6 sm:p-8"
          >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                    My Coding Journey
                  </h1>
                  <p className="text-gray-300 text-lg mb-6">
                    Track my progress and achievements across different coding
                    platforms
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {Object.entries(stats).map(([platform, data], index) => (
                      <motion.div
                        key={platform}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <PlatformBadge platform={platform} data={data} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Screenshot Placeholder */}
                <div className="flex-1 w-full max-w-xl">
                  <div
                    className="relative aspect-[16/9] rounded-xl overflow-hidden 
                    bg-gradient-to-br from-white-800 to-gray-900 shadow-2xl border border-white/10"
                  >
                    {/* Placeholder Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={"codolio.png"}
                        alt="Codefolio"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-20 sm:py-28 md:py-32 lg:py-40">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-full">
            <div className="absolute w-48 sm:w-96 h-48 sm:h-96 -top-24 sm:-top-48 -left-24 sm:-left-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
            <div className="absolute w-48 sm:w-96 h-48 sm:h-96 top-1/2 left-1/2 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute w-48 sm:w-96 h-48 sm:h-96 -bottom-24 sm:bottom-48 -right-24 sm:right-48 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row lg:gap-8">
            {/* Left Vertical Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block w-24 flex-shrink-0 relative"
            >
              <div className="sticky top-40 flex flex-col items-center">
                <div className="vertical-text text-6xl sm:text-8xl font-bold text-white opacity-20 tracking-widest">
                  SKILLS
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              {/* Stats Section */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid gap-4"
                >
                  {/* First Row - 2 cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(stats)
                      .slice(0, 2)
                      .map(([platform, data], index) => (
                        <motion.div
                          key={platform}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                          className="h-[180px]"
                        >
                          <StatCard platform={platform} data={data} />
                        </motion.div>
                      ))}
                  </div>

                  {/* Second Row - 2 cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(stats)
                      .slice(2, 4)
                      .map(([platform, data], index) => (
                        <motion.div
                          key={platform}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.1 * (index + 2),
                          }}
                          className="h-[180px]"
                        >
                          <StatCard platform={platform} data={data} />
                        </motion.div>
                      ))}
                  </div>

                  {/* Third Row - 1 card centered */}
                  <div className="flex justify-center w-full">
                    {Object.entries(stats)
                      .slice(4)
                      .map(([platform, data], index) => (
                        <motion.div
                          key={platform}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.1 * (index + 4),
                          }}
                          className="h-[180px] w-full"
                        >
                          <StatCard platform={platform} data={data} />
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              </div>

              {/* Skills Section */}
              <div className="space-y-8 sm:space-y-12">
                {/* Languages */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-4 sm:mb-8 text-center">
                    Programming Languages
                  </h3>
                  <div className="honeycomb">
                    {skills.languages.map((skill, index) => (
                      <HexagonSkill
                        key={skill.name}
                        skill={skill}
                        delay={index * 0.1}
                        color="blue"
                      />
                    ))}
                  </div>
                </div>

                {/* Frameworks */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-4 sm:mb-8 text-center">
                    Frameworks & Libraries
                  </h3>
                  <div className="honeycomb">
                    {skills.frameworks.map((skill, index) => (
                      <HexagonSkill
                        key={skill.name}
                        skill={skill}
                        delay={index * 0.1}
                        color="green"
                      />
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-4 sm:mb-8 text-center">
                    Tools & Technologies
                  </h3>
                  <div className="honeycomb">
                    {skills.tools.map((skill, index) => (
                      <HexagonSkill
                        key={skill.name}
                        skill={skill}
                        delay={index * 0.1}
                        color="purple"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .honeycomb {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          max-width: 900px;
          margin: 0 auto;
          padding: 0;
          transform: translateY(25px);
        }

        .hex-container {
          width: 120px;
          margin: -20px 4px;
          position: relative;
          transition: all 0.3s ease;
        }

        .hex-container:nth-child(even) {
          transform: translateX(60px);
        }

        .hexagon {
          position: relative;
          width: 100%;
          height: 138.57px;
          margin: 0 auto;
          background-color: rgba(59, 130, 246, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .hexagon:hover {
          transform: scale(1.05);
          background-color: rgba(59, 130, 246, 0.3);
        }

        .content {
          padding: 0.75rem;
          text-align: center;
          width: 100%;
        }

        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .hex-container {
            width: 100px;
            margin: -15px 3px;
          }

          .hex-container:nth-child(even) {
            transform: translateX(50px);
          }

          .hexagon {
            height: 115.47px;
          }

          .content {
            padding: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .hex-container {
            width: 80px;
            margin: -12px 2px;
          }

          .hex-container:nth-child(even) {
            transform: translateX(40px);
          }

          .hexagon {
            height: 92.38px;
          }

          .content {
            padding: 0.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;
