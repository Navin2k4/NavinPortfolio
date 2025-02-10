import React from "react";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      period: "2022 - Present",
      description:
        "Led the development of multiple high-impact web applications using React and Next.js. Implemented modern UI/UX practices and improved performance metrics.",
      skills: ["React", "Next.js", "TypeScript", "AWS"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      period: "2020 - 2022",
      description:
        "Developed and maintained full-stack applications using the MERN stack. Collaborated with cross-functional teams to deliver successful projects.",
      skills: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description:
        "Contributed to various web development projects and gained hands-on experience with modern web technologies.",
      skills: ["JavaScript", "HTML", "CSS", "Git"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Professional Experience
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey through various roles and projects in the tech industry.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-500 opacity-20"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect p-6 rounded-lg hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-blue-400 font-medium mb-2">
                      {exp.company}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
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
    </div>
  );
};

export default ExperiencePage;
