import React from "react";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Freelancer",
      company: "Self Employed",
      location: "Madurai, India",
      period: "JAN 2024 - PRESENT",
      description: "Developed a doctor - patient appointment booking system.",
      skills: [
        "Next.js",
        "PostgreSQL",
        "Supabase",
        "GoogleAPI",
        "Tailwind",
        "Domain Hosting",
        "Team Collaboration",
      ],
    },
    {
      title: "Train The Trainer",
      company: "Velammal College of Engineering and Technology",
      location: "Madurai, India",
      period: "JULY 2024 - AUG 2024",
      description:
        "Trained the students and classMates to become a trainer in full-stack development.",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind",
        "API Development",
        "Team Collaboration",
        "AGILE Workflow",
      ],
    },
    {
      title: "VCET Connect",
      company: "Velammal College of Engineering and Technology",
      location: "Madurai, India",
      period: "JULY 2023 - AUG 2024",
      description:
        "Developed a full-stack web application for the college to manage the leaves, OD's, Defaulters and students Academics.",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind",
        "API Development",
        "Web Hosting",
        "Team Collaboration",
        "AGILE Workflow",
      ],
    },
    {
      title: "Android Developer Intern",
      company: "NSIC",
      location: "Chennai, India",
      period: "DEC 2023 - JAN 2024",
      description:
        "Gained hands-on experience in Android application development using modern tools and technologies.",
      skills: ["Android Studio", "Java", "Android Development", "Kotlin"],
    },
    {
      title: "Web Developer Intern",
      company: "Teach nook",
      location: "Bengaluru, India",
      period: "JAN 2023 - FEB 2023",
      description:
        "Developed web applications and integrated third-party APIs to create interactive user experiences.",
      skills: ["HTML", "CSS", "JavaScript", "Tailwind", "API Integration"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-40 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Title Section */}
        <div className="relative mb-16 sm:mb-24">
          {/* Background Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-0 w-24 h-24 -translate-y-1/2 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-32 h-32 -translate-y-1/2 bg-purple-500/5 rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >
            {/* Main Title */}
            <div className="inline-block relative">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                  Professional
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
                  Experience
                </span>
              </h1>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 grid grid-cols-2 gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40" />
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mt-6"
            >
              My journey through various roles and projects in the tech industry
            </motion.p>

            {/* Bottom Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur-sm"
            />
          </motion.div>
        </div>

        <div className="relative">
          {/* Timeline line - Hidden on mobile */}
          <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-20"></div>

          {/* Experience items */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-4 sm:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 md:text-right">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-white/10"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <span className="text-blue-400 text-sm sm:text-base">
                        {exp.period}
                      </span>
                    </div>
                    <div className="mb-3">
                      <h4 className="text-purple-400 font-medium">
                        {exp.company}
                      </h4>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base mb-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs sm:text-sm border border-blue-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                {/* Timeline dot - Hidden on mobile */}
                <div className="hidden md:flex items-center justify-center w-12">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
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
