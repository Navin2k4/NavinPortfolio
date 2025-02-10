import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogPage = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring upcoming trends and technologies that will shape the future of web development.",
      date: "March 15, 2024",
      category: "Technology",
      readTime: "5 min read",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Mastering React Hooks",
      excerpt:
        "A comprehensive guide to using React Hooks effectively in your applications.",
      date: "March 10, 2024",
      category: "React",
      readTime: "8 min read",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Building Scalable APIs",
      excerpt:
        "Best practices and patterns for building scalable and maintainable APIs.",
      date: "March 5, 2024",
      category: "Backend",
      readTime: "6 min read",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "UI/UX Design Principles",
      excerpt:
        "Essential design principles every developer should know for better user experience.",
      date: "March 1, 2024",
      category: "Design",
      readTime: "4 min read",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "UI/UX Design Principles",
      excerpt:
        "Essential design principles every developer should know for better user experience.",
      date: "March 1, 2024",
      category: "Design",
      readTime: "4 min read",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  const categories = ["All", "Technology", "React", "Backend", "Design"];

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return blogPosts;
    }
    return blogPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  // Get featured post based on selected category
  const featuredPost = useMemo(() => {
    return filteredPosts[0] || blogPosts[0];
  }, [filteredPosts]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-40">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute w-96 h-96 top-1/2 left-1/2 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 bottom-48 right-48 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Title and Categories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-gray-400 text-xl mb-8">
              Dive into my thoughts and experiences about web development,
              design, and technology.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
              onHoverStart={() => setHoveredPost("featured")}
              onHoverEnd={() => setHoveredPost(null)}
            >
              <div className="glass-effect rounded-2xl overflow-hidden h-full">
                <div className="relative h-full">
                  <motion.img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredPost === "featured" ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm w-fit mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-3">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{featuredPost.date}</span>
                      <span className="text-blue-400">
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                onHoverStart={() => setHoveredPost(index)}
                onHoverEnd={() => setHoveredPost(null)}
              >
                <div className="glass-effect rounded-xl overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      animate={{
                        scale: hoveredPost === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{post.date}</span>
                      <motion.button
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center text-blue-400 hover:text-blue-300"
                      >
                        Read More
                        <i className="pi pi-arrow-right ml-2"></i>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20"
        >
          <div className="glass-effect rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Latest Insights
              </h3>
              <p className="text-gray-300 mb-8">
                Subscribe to my newsletter and never miss out on the latest
                articles and tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
