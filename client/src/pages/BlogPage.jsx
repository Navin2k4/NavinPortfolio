import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAllPosts } from "../utils/blogContents";
import { useNavbar } from "../context/NavbarContext";

const BlogPage = () => {
  const blogPosts = getAllPosts();
  const { toggleNavbar } = useNavbar();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Extract unique categories and count posts in each
  const categories = [
    "All",
    ...new Set(blogPosts.flatMap((post) => post.category)),
  ];
  const categoryCount = categories.reduce((acc, category) => {
    if (category === "All") {
      acc[category] = blogPosts.length;
    } else {
      acc[category] = blogPosts.filter((post) =>
        post.tags.includes(category)
      ).length;
    }
    return acc;
  }, {});

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.tags.includes(selectedCategory);
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    toggleNavbar(true);
  }, [toggleNavbar]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-30 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/4 space-y-6 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-auto scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-700"
          >
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800/50 rounded-xl border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500/50 backdrop-blur-sm"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Categories */}
            <div className="bg-gray-800/30 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1.5">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                        : "text-gray-400 hover:bg-gray-700/50"
                    }`}
                  >
                    <span>{category}</span>
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-gray-900/50">
                      {categoryCount[category]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Posts */}
            <div className="bg-gray-800/30 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">
                Trending
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="block group"
                  >
                    <div className="flex gap-3 items-center">
                      {post.image && (
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/4"
          >
            <div className="grid gap-6">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="bg-gray-800/30 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:bg-gray-800/50 hover:border-blue-500/30">
                      <div className="flex flex-col md:flex-row md:h-[280px]">
                        {post.image && (
                          <div className="md:w-2/5 lg:w-1/3 relative">
                            <div className="h-48 md:h-full relative">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent"></div>
                            </div>
                          </div>
                        )}
                        <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between relative">
                          <div className="space-y-3 sm:space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {post.tags?.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 sm:px-2.5 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors line-clamp-2">
                              {post.title}
                            </h2>
                            <p className="text-sm sm:text-base text-gray-400 line-clamp-2 sm:line-clamp-3">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4 sm:mt-6">
                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                              <span className="flex items-center gap-1">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {post.date}
                              </span>
                              <span className="hidden sm:inline">•</span>
                              <span className="flex items-center gap-1">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                {post.readTime}
                              </span>
                            </div>
                            <span className="text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-1 text-sm sm:text-base">
                              Read More
                              <svg
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
