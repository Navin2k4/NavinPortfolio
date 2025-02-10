import React from "react";
import { motion } from "framer-motion";

const SkillsPage = () => {
  const stats = {
    github: {
      repositories: 35,
      stars: 128,
      contributions: "2.4k",
      followers: 180,
    },
    leetcode: {
      ranking: "Top 5%",
      problemsSolved: 450,
      contestRating: 1850,
      badges: 12,
    },
    geeksforgeeks: {
      codingScore: 2400,
      problemsSolved: 380,
      monthlyRank: 234,
      instituteRank: 15,
    },
    linkedin: {
      connections: "2000+",
      recommendations: 24,
      endorsements: 150,
      posts: 85,
    },
  };

  const skills = {
    languages: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 85 },
    ],
    frameworks: [
      { name: "React", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Express", level: 85 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 85 },
      { name: "MongoDB", level: 85 },
    ],
  };

  const StatCard = ({ platform, stats, icon, color }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <i className={`pi ${icon} text-2xl ${color}`}></i>
        <h3 className="text-xl font-bold text-white ml-3">{platform}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="text-center">
            <p className="text-2xl font-bold text-blue-400">{value}</p>
            <p className="text-sm text-gray-400 capitalize">
              {key.replace(/([A-Z])/g, " $1").trim()}
            </p>
          </div>
        ))}
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
          <p className="text-white font-medium text-sm mb-2">{skill.name}</p>
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
        <div className="flex">
          {/* Left Vertical Title - STATS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-24 flex-shrink-0 relative"
          >
            <div className="sticky top-40 flex flex-col items-center">
              <div className="vertical-text text-8xl font-bold text-white opacity-20 tracking-widest">
                STATS
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Stats Section */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {Object.entries(stats).map(
                  ([platform, platformStats], index) => (
                    <motion.div
                      key={platform}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="glass-effect rounded-xl p-4 hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-white mb-3 capitalize">
                        {platform}
                      </h3>
                      <div className="space-y-2">
                        {Object.entries(platformStats).map(([stat, value]) => (
                          <div
                            key={stat}
                            className="flex justify-between items-center"
                          >
                            <span className="text-gray-400 text-sm capitalize">
                              {stat.replace(/([A-Z])/g, " $1").trim()}
                            </span>
                            <span className="text-blue-400 font-semibold">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>

            {/* Skills Section */}
            <div className="space-y-12 relative">
              {/* Right Vertical Title - SKILLS */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute -right-24 top-0 w-24 h-full"
              >
                <div className="sticky top-40 flex flex-col items-center">
                  <div className="vertical-text text-8xl font-bold text-white opacity-20 tracking-widest">
                    SKILLS
                  </div>
                </div>
              </motion.div>

              {/* Languages */}
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-8 text-center">
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
                <h3 className="text-xl font-semibold text-green-400 mb-8 text-center">
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
                <h3 className="text-xl font-semibold text-purple-400 mb-8 text-center">
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
          width: 150px;
          margin: -25px 5px;
          position: relative;
          transition: all 0.3s ease;
        }

        .hex-container:nth-child(even) {
          transform: translateX(75px);
        }

        .hexagon {
          position: relative;
          width: 100%;
          height: 173.21px;
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
          padding: 1rem;
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
            width: 120px;
            margin: -20px 4px;
          }

          .hex-container:nth-child(even) {
            transform: translateX(60px);
          }

          .hexagon {
            height: 138.57px;
          }
        }

        @media (max-width: 480px) {
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
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;
