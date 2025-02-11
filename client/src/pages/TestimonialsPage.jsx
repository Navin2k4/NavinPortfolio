import React, { useState } from "react";
import { motion } from "framer-motion";

const TestimonialsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO at TechCorp",
      company: "TechCorp Inc.",
      image: "https://via.placeholder.com/150",
      content:
        "Working with this developer was an absolute pleasure. Their attention to detail and innovative solutions helped us achieve our goals faster than expected.",
      rating: 5,
      project: "E-commerce Platform",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "Innovation Labs",
      image: "https://via.placeholder.com/150",
      content:
        "Exceptional problem-solving skills and a great communicator. Delivered our project on time and exceeded our expectations.",
      rating: 5,
      project: "Mobile App Development",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "CTO",
      company: "StartUp Hub",
      image: "https://via.placeholder.com/150",
      content:
        "A true professional who brings both technical expertise and creative thinking to the table. Would definitely work with them again.",
      rating: 5,
      project: "AI Integration",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Marketing Director",
      company: "Digital Solutions",
      image: "https://via.placeholder.com/150",
      content:
        "Their work on our website redesign was transformative. We've seen a significant increase in user engagement since launch.",
      rating: 5,
      project: "Website Redesign",
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <motion.i
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`pi pi-star${
            index < rating ? "-fill" : ""
          } text-yellow-400 text-sm sm:text-base`}
        ></motion.i>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-16">
          {/* Vertical Title - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block w-24 flex-shrink-0 relative"
          >
            <div className="sticky top-40">
              <div className="vertical-text text-6xl sm:text-8xl font-bold text-white opacity-10 tracking-widest">
                REVIEWS
              </div>
            </div>
          </motion.div>

          {/* Mobile Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Client <span className="text-blue-400">Reviews</span>
            </h1>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 sm:mb-12 lg:mb-16"
            >
              <div className="bg-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                  {/* Image and Info Section */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 lg:block">
                      <motion.img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-full lg:h-auto aspect-square rounded-xl sm:rounded-2xl object-cover shadow-xl"
                        whileHover={{ scale: 1.02 }}
                      />
                      <div className="flex-1 lg:mt-6">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                          {testimonials[activeIndex].name}
                        </h3>
                        <p className="text-blue-400 font-medium mt-1">
                          {testimonials[activeIndex].role}
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          {testimonials[activeIndex].company}
                        </p>
                        <div className="mt-2 lg:mt-4">
                          <StarRating
                            rating={testimonials[activeIndex].rating}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-2/3">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <div className="text-4xl sm:text-5xl text-blue-500 opacity-30 mb-4 sm:mb-6">
                          "
                        </div>
                        <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                          {testimonials[activeIndex].content}
                        </p>
                      </div>
                      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <p className="text-gray-400 text-sm">Project</p>
                          <p className="text-white font-semibold mt-1">
                            {testimonials[activeIndex].project}
                          </p>
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                          {testimonials.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveIndex(index)}
                              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                                index === activeIndex
                                  ? "bg-blue-500 w-4 sm:w-6"
                                  : "bg-gray-600 hover:bg-gray-500"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Testimonials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {testimonials.map(
                (testimonial, index) =>
                  index !== activeIndex && (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setActiveIndex(index)}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full transition-all duration-300 hover:bg-white/10">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl object-cover"
                          />
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-white">
                              {testimonial.name}
                            </h3>
                            <p className="text-blue-400 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm line-clamp-3 mb-3 sm:mb-4">
                          "{testimonial.content}"
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-white text-sm font-medium">
                            {testimonial.project}
                          </p>
                          <motion.div
                            initial={false}
                            animate={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            className="text-blue-400"
                          >
                            <i className="pi pi-arrow-right"></i>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsPage;
