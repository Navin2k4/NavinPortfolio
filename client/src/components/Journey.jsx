import React from "react";
import { motion } from "framer-motion";

const Journey = () => {
  const timeline = [
    {
      year: "2022",
      events: [
        {
          title: "Started Engineering",
          subtitle: "Computer Science",
          icon: "pi pi-book",
          color: "from-cyan-600 to-blue-600",
        },
      ],
    },
    {
        year: "2023",
        events: [
          {
            title: "VCET Connect Project",
            subtitle: "College Management System",
            icon: "pi pi-desktop",
            color: "from-green-600 to-teal-600",
          },
          {
            title: "Android Development",
            subtitle: "NSIC Internship",
            icon: "pi pi-android",
            color: "from-orange-600 to-red-600",
          },
          {
            title: "Web Development",
            subtitle: "Teach nook Internship",
            icon: "pi pi-globe",
            color: "from-yellow-600 to-amber-600",
          },
        ],
      },
    {
        year: "2024",
        events: [
          {
            title: "Freelance Developer",
            subtitle: "Building Healthcare Solutions",
            icon: "pi pi-briefcase",
            color: "from-blue-600 to-indigo-600",
          },
          {
            title: "Train The Trainer",
            subtitle: "Full Stack Development",
            icon: "pi pi-users",
            color: "from-purple-600 to-pink-600",
          },
        ],
      },
  ];

  return (
    <div className="py-8 sm:py-12 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            My Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Timeline Line */}
          <div className="hidden sm:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20" />

          {/* Timeline Items */}
          <div className="grid sm:grid-cols-3 gap-8">
            {timeline.map((year, yearIndex) => (
              <motion.div
                key={yearIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: yearIndex * 0.2 }}
                className="relative"
              >
                {/* Year Marker */}
                <div className="flex sm:justify-center mb-6">
                  <div className="flex items-center justify-center w-18 h-12 rounded-2xl bg-white/5 backdrop-blur-sm relative">
                    {/* Dot on timeline */}
                    <div className="hidden sm:block absolute -top-[19px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      {year.year}
                    </span>
                  </div>
                </div>

                {/* Events List */}
                <div className="space-y-4">
                  {year.events.map((event, eventIndex) => (
                    <motion.div
                      key={eventIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: yearIndex * 0.2 + eventIndex * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${event.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <i className={`${event.icon} text-white text-lg`} />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {event.title}
                            </h3>
                            <p className="text-sm text-gray-400">
                              {event.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
