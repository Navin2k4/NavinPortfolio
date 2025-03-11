import React from "react";
import { blogPosts } from "../utils/blogContents";

const CallToAction = () => {
  const blog = blogPosts[0];

  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide">
          Featured Blog Post
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold mb-4 leading-tight">
              {blog.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {blog.date} • By <span className="text-indigo-500">{blog.author}</span>
            </p>
            <p className="text-gray-300 text-base mb-8 leading-relaxed">
              {blog.description}
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition-all transform hover:scale-105 shadow-lg">
              <a href={"/blog/" + blog.id}>Read More

              </a>
            </button>
          </div>

          {/* Full Width Image */}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
