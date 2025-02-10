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
          } text-yellow-400`}
        ></motion.i>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex gap-16">
          {/* Vertical Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-32 flex-shrink-0 relative"
          >
            <div className="sticky">
              <div className="vertical-text text-9xl font-bold text-white opacity-10 tracking-widest">
                REVIEWS
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-20"
            >
              <div className="bg-white/5 rounded-3xl p-10 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="md:w-1/3">
                    <motion.img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full aspect-square rounded-2xl object-cover shadow-xl"
                      whileHover={{ scale: 1.02 }}
                    />
                    <div className="mt-6">
                      <h3 className="text-2xl font-bold text-white">
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className="text-blue-400 font-medium mt-1">
                        {testimonials[activeIndex].role}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        {testimonials[activeIndex].company}
                      </p>
                      <div className="mt-4">
                        <StarRating rating={testimonials[activeIndex].rating} />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <div className="text-5xl text-blue-500 opacity-30 mb-6">
                          "
                        </div>
                        <p className="text-gray-300 text-xl leading-relaxed">
                          {testimonials[activeIndex].content}
                        </p>
                      </div>
                      <div className="mt-8 flex items-center justify-between">
                        <div>
                          <p className="text-gray-400 text-sm">Project</p>
                          <p className="text-white font-semibold mt-1">
                            {testimonials[activeIndex].project}
                          </p>
                        </div>
                        <div className="flex gap-3">
                          {testimonials.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveIndex(index)}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === activeIndex
                                  ? "bg-blue-500 w-6"
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

            {/* Other Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      <div className="bg-white/5 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/10">
                        <div className="flex items-start gap-4 mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-xl object-cover"
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {testimonial.name}
                            </h3>
                            <p className="text-blue-400 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm line-clamp-3 mb-4">
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
