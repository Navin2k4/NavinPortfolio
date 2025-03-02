import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Journey = () => {
  const timeline = [
    {
      year: "2019",
      events: [
        {
          title: "Found My Intrest",
          subtitle: "Stunning websites got me!",
          icon: "pi pi-code",
          color: "from-emerald-600 to-teal-600",
        },
      ],
    },
    {
      year: "2020",
      events: [
        {
          title: "First Place in SGFI Tournament",
          subtitle: "National Level Carrom Championship",
          icon: "pi pi-star",
          color: "from-amber-500 to-yellow-500",
        },
      ],
    },
    {
      year: "2022",
      events: [
        {
          title: "High School Graduate",
          subtitle: "Computer Science Major",
          icon: "pi pi-graduation-cap",
          color: "from-sky-600 to-blue-600",
        },
        {
          title: "Started B.Tech",
          subtitle: "Computer Science & Engineering",
          icon: "pi pi-desktop",
          color: "from-indigo-600 to-violet-600",
        },
      ],
    },
    {
        year: "2023",
        events: [
          {
          title: "VCET Connect",
          subtitle: "Full Stack College Management System",
          icon: "pi pi-server",
          color: "from-green-600 to-emerald-600",
        },
        {
          title: "Android Development Intern",
          subtitle: "NSIC Training Program",
          icon: "pi pi-mobile",
          color: "from-rose-600 to-pink-600",
        },
        {
          title: "Web Development Intern",
          subtitle: "Teach Nook",
            icon: "pi pi-globe",
          color: "from-orange-600 to-amber-600",
          },
        ],
      },
    {
        year: "2024",
        events: [
          {
          title: "Skip The Doctor",
          subtitle: "Freelance Full Stack Project",
          icon: "pi pi-heart-fill",
          color: "from-cyan-600 to-sky-600",
        },
        {
          title: "Skip The Clinic",
          subtitle: "Freelance Full Stack Project",
          icon: "pi pi-heart-fill",
          color: "from-cyan-600 to-sky-600",
        },
        {
          title: "Technical Trainer",
          subtitle: "Full Stack Development Bootcamp",
            icon: "pi pi-users",
          color: "from-fuchsia-600 to-purple-600",
          },
        ],
      },
    {
        year: "2025",
        events: [
          {
          title: "Full Stack Developer",
          subtitle: "Beauroi Technologies",
          icon: "pi pi-code",
          color: "from-blue-600 to-indigo-600",
        },
        {
          title: "HR Management Platform",
          subtitle: "Enterprise Software Development",
          icon: "pi pi-building",
          color: "from-violet-600 to-purple-600",
          },
        ],
      },
  ];

  // Sort timeline by year in descending order and calculate initial index
  const sortedTimeline = useMemo(() => {
    return [...timeline].sort((a, b) => parseInt(b.year) - parseInt(a.year));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // sm breakpoint
        setItemsToShow(1);
        setIsMobile(true);
      } else if (width < 768) {
        // md breakpoint
        setItemsToShow(2);
        setIsMobile(false);
      } else if (width < 1024) {
        // lg breakpoint
        setItemsToShow(3);
        setIsMobile(false);
      } else {
        setItemsToShow(4);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, sortedTimeline.length - itemsToShow);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleYears = useMemo(() => {
    return sortedTimeline.slice(currentIndex, currentIndex + itemsToShow);
  }, [currentIndex, sortedTimeline]);

  return (
    <div className="py-4 sm:py-8 lg:py-12 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            My Journey
          </h2>
        </motion.div>

        {/* Mobile View - Vertical List */}
        <div className="block sm:hidden px-4">
          {sortedTimeline.map((year, yearIndex) => (
            <motion.div
              key={yearIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: yearIndex * 0.1 }}
              className="mb-8 last:mb-4"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-16 h-10 rounded-xl bg-white/5 backdrop-blur-sm">
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {year.year}
                  </span>
                </div>
                <div className="h-px flex-1 ml-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
              </div>

              <div className="space-y-3 pl-2">
                {year.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: yearIndex * 0.1 + eventIndex * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          animate={{
                            y: [0, -3, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`w-8 h-8 rounded-lg bg-gradient-to-r ${event.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <motion.i
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`${event.icon} text-white text-base`}
                          />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-xs text-gray-400">
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

        {/* Desktop View - Slider */}
        <div className="hidden sm:block relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-2 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-all ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <i className="pi pi-chevron-left text-white text-base" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className={`px-2 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-all ${
                currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <i className="pi pi-chevron-right text-white text-base" />
            </button>
          </div>

          {/* Horizontal Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20" />

          {/* Timeline Items */}
          <div className="relative overflow-hidden w-full">
            <div className="w-full" style={{ overflow: "clip" }}>
              <motion.div
                className="flex"
                style={{
                  width: `${(sortedTimeline.length / itemsToShow) * 100}%`,
                  gap: "2rem",
                }}
                initial={false}
                animate={{
                  x: `${
                    -currentIndex *
                    (100 / (sortedTimeline.length / itemsToShow))
                  }%`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {sortedTimeline.map((year, yearIndex) => (
              <motion.div
                key={yearIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: yearIndex * 0.2 }}
                    className="relative flex-1"
              >
                {/* Year Marker */}
                    <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-18 h-12 rounded-2xl bg-white/5 backdrop-blur-sm relative">
                    {/* Dot on timeline */}
                        <div className="absolute -top-[19px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
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
                          transition={{
                            delay: yearIndex * 0.2 + eventIndex * 0.1,
                          }}
                      className="group"
                    >
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center gap-4">
                              <motion.div
                                whileHover={{
                                  scale: 1.15,
                                  boxShadow: "0 0 20px rgba(255,255,255,0.3)",
                                }}
                                animate={{
                                  y: [0, -5, 0],
                                  boxShadow: [
                                    "0 0 0px rgba(255,255,255,0)",
                                    "0 0 10px rgba(255,255,255,0.2)",
                                    "0 0 0px rgba(255,255,255,0)",
                                  ],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className={`w-10 h-10 rounded-lg bg-gradient-to-r ${event.color} flex items-center justify-center flex-shrink-0`}
                              >
                                <motion.i
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1,
                                    rotate: [0, 10, 0, -10, 0],
                                  }}
                                  transition={{
                                    duration: 0.5,
                                    delay: yearIndex * 0.2 + eventIndex * 0.1,
                                    rotate: {
                                      duration: 5,
                                      repeat: Infinity,
                                      ease: "linear",
                                    },
                                  }}
                                  className={`${event.icon} text-white text-lg`}
                                />
                              </motion.div>
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
