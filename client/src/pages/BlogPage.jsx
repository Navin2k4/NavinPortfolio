import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogPage = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [yetToCome, setYetToCome] = useState(true);

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
        <div className="flex flex-col items-center justify-center min-h-[60vh] relative">
          {/* Decorative elements */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center relative"
          >
            <div className="inline-block relative px-4">
              <span className="absolute -inset-4 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-20 blur-lg" />
              <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                  Blog
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
                  Coming Soon
                </span>
              </h1>

              {/* Decorative dots */}
              <div className="absolute -top-6 -right-6 w-12 h-12 grid grid-cols-2 gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40" />
              </div>

              {/* Bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur-sm"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mt-8 px-4"
            >
              Stay tuned for exciting articles about web development, design,
              and technology. We're crafting something amazing for you!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl text-sm font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300 cursor-pointer shadow-lg shadow-blue-500/25"
              >
                <a href="/contact">Notify Me</a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
