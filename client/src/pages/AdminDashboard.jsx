import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminDashboard = () => {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  if (!isAdmin) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard title="Total Projects" value="12" icon="📁" />
            <StatCard title="Blog Posts" value="8" icon="📝" />
            <StatCard title="Skills" value="24" icon="💡" />
            <StatCard title="Testimonials" value="6" icon="⭐" />
            <StatCard title="Experience" value="4" icon="💼" />
            <StatCard title="Messages" value="15" icon="✉️" />
          </div>
        );
      case "projects":
        return <ProjectsManager />;
      case "blog":
        return <BlogManager />;
      case "skills":
        return <SkillsManager />;
      case "testimonials":
        return <TestimonialsManager />;
      case "messages":
        return <MessagesManager />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 mb-8">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Welcome to Dashboard
              </h1>
              <p className="mt-1 text-blue-100">
                Manage your portfolio content here
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-4">
            <TabButton
              name="overview"
              active={activeTab === "overview"}
              onClick={() => setActiveTab("overview")}
              icon="📊"
            >
              Overview
            </TabButton>
            <TabButton
              name="projects"
              active={activeTab === "projects"}
              onClick={() => setActiveTab("projects")}
              icon="📁"
            >
              Projects
            </TabButton>
            <TabButton
              name="blog"
              active={activeTab === "blog"}
              onClick={() => setActiveTab("blog")}
              icon="📝"
            >
              Blog
            </TabButton>
            <TabButton
              name="skills"
              active={activeTab === "skills"}
              onClick={() => setActiveTab("skills")}
              icon="💡"
            >
              Skills
            </TabButton>
            <TabButton
              name="testimonials"
              active={activeTab === "testimonials"}
              onClick={() => setActiveTab("testimonials")}
              icon="⭐"
            >
              Testimonials
            </TabButton>
            <TabButton
              name="messages"
              active={activeTab === "messages"}
              onClick={() => setActiveTab("messages")}
              icon="✉️"
            >
              Messages
            </TabButton>
          </nav>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-xl p-6 mb-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

// Component for tab buttons
const TabButton = ({ name, active, onClick, icon, children }) => (
  <button
    onClick={onClick}
    className={`
      group inline-flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
      ${
        active
          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
          : "text-gray-300 hover:bg-white/10 hover:text-white"
      }
    `}
  >
    <span className="mr-2">{icon}</span>
    {children}
  </button>
);

// Component for statistics cards
const StatCard = ({ title, value, icon }) => (
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden rounded-xl">
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="text-3xl">{icon}</span>
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-300 truncate">
              {title}
            </dt>
            <dd className="text-3xl font-semibold text-white">{value}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

// Placeholder components for different sections
const ProjectsManager = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-medium text-white">Projects Management</h3>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30">
        Add New Project
      </button>
    </div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Project Cards Placeholder */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
        >
          <div className="h-40 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg mb-4"></div>
          <h4 className="text-white font-medium">Project {i}</h4>
          <p className="text-gray-400 text-sm mt-2">
            Project description goes here...
          </p>
        </div>
      ))}
    </div>
  </div>
);

const BlogManager = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-medium text-white">Blog Posts Management</h3>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30">
        Create New Post
      </button>
    </div>
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
        >
          <h4 className="text-white font-medium">Blog Post {i}</h4>
          <p className="text-gray-400 text-sm mt-2">
            Post preview goes here...
          </p>
        </div>
      ))}
    </div>
  </div>
);

const SkillsManager = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-medium text-white">Skills Management</h3>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30">
        Add New Skill
      </button>
    </div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg"></div>
            <div>
              <h4 className="text-white font-medium">Skill {i}</h4>
              <p className="text-gray-400 text-sm">90%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TestimonialsManager = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-medium text-white">
        Testimonials Management
      </h3>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30">
        Add New Testimonial
      </button>
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full"></div>
            <div>
              <h4 className="text-white font-medium">Client Name {i}</h4>
              <p className="text-gray-400 text-sm mt-2">
                Testimonial content goes here...
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MessagesManager = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-medium text-white">Messages</h3>
    </div>
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-white font-medium">Sender Name {i}</h4>
              <p className="text-gray-400 text-sm mt-1">
                Message preview goes here...
              </p>
            </div>
            <span className="text-sm text-gray-400">2 days ago</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AdminDashboard;
