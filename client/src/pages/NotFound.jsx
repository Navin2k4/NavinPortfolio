import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavbar } from "../context/NavbarContext";

const NotFound = () => {
  const lightControls = useAnimation();
  const pulseControls = useAnimation();
  const { toggleNavbar } = useNavbar();

  useEffect(() => {
    // Hide navbar when component mounts
    toggleNavbar(false);

    // Show navbar when component unmounts
    return () => toggleNavbar(true);
  }, [toggleNavbar]);

  const startPulseAnimation = async () => {
    await pulseControls.start({
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.7, 0.3],
      transition: { duration: 0.5 },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <motion.div
            className="absolute w-[40rem] h-[40rem] -top-48 -left-48 bg-blue-500/30 rounded-full mix-blend-overlay filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute w-[35rem] h-[35rem] top-1/3 right-1/4 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.1, 0.15],
              rotate: [360, 270, 180, 90, 0],
            }}
            transition={{
              duration: 15,
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* 404 Text with Artistic Elements */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-[15rem] text-[10rem] font-bold leading-none pt-10 relative z-10"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white/50 via-white/20 to-transparent">
              4
            </span>
            <motion.span
              animate={{
                filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 40px rgba(255,255,255,0.6)",
                  "0 0 20px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white/60 via-white/30 to-transparent"
            >
              0
            </motion.span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white/50 via-white/20 to-transparent">
              4
            </span>
          </motion.h1>

          {/* Decorative Lines */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                style={{
                  width: "100%",
                  transform: `rotate(${i * 45}deg) translateX(-50%)`,
                  transformOrigin: "left center",
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* SVG Light and Quote */}
        <div className="relative w-96 h-96 mx-auto">
          {/* Enhanced Light Beam SVG */}
          <motion.svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Multiple Light Beams */}
            {[...Array(3)].map((_, i) => (
              <motion.path
                key={i}
                d={`M 50 30 L ${20 + i * 10} 80 L ${80 - i * 10} 80 Z`}
                fill="url(#lightGradient)"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}

            {/* Central Light Source */}
            <motion.circle
              cx="50"
              cy="30"
              r="3"
              fill="white"
              animate={{
                r: [3, 4, 3],
                opacity: [0.8, 1, 0.8],
                filter: ["blur(2px)", "blur(4px)", "blur(2px)"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Enhanced Gradient */}
            <defs>
              <linearGradient
                id="lightGradient"
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
              >
                <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                <stop offset="40%" stopColor="white" stopOpacity="0.3" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Interactive Light Source */}
          <Link to="/">
            <motion.div
              className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onHoverStart={() => startPulseAnimation()}
            >
              <motion.div
                className="w-8 h-8 rounded-full bg-white"
                style={{
                  boxShadow:
                    "0 0 40px 20px rgba(255,255,255,0.3), inset 0 0 10px rgba(255,255,255,0.5)",
                }}
                animate={lightControls}
              >
                <motion.div
                  className="absolute -inset-8 rounded-full"
                  animate={pulseControls}
                  initial={{ opacity: 0, scale: 1 }}
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                  }}
                />
              </motion.div>
            </motion.div>
          </Link>

          {/* Enhanced Quote Text */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-2xl text-gray-300 font-light leading-relaxed tracking-wide">
              <motion.span
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                The void feels heavy,
              </motion.span>
              <br />
              but the way out is
              <motion.span
                className="font-medium text-white inline-block ml-2"
                animate={{
                  textShadow: [
                    "0 0 8px rgba(255,255,255,0.5)",
                    "0 0 16px rgba(255,255,255,0.8)",
                    "0 0 8px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                light
              </motion.span>
              <br />
              <motion.span
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                Keep looking
              </motion.span>
            </p>
          </motion.div>
        </div>

        {/* Enhanced Hint Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-gray-400 mt-8 text-sm tracking-widest uppercase"
        >
          Click the light to find your way home
        </motion.p>
      </div>

      {/* Enhanced Floating Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            i % 3 === 0
              ? "w-1 h-1 bg-blue-400/30"
              : i % 3 === 1
              ? "w-2 h-2 bg-purple-400/20"
              : "w-0.5 h-0.5 bg-white/40"
          }`}
          initial={{
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [null, Math.random() * -300],
            x: [null, (Math.random() - 0.5) * 400],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default NotFound;
