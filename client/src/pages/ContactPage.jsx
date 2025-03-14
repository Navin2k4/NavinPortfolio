import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "../utils/utilities";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(
      () => setNotification({ show: false, type: "", message: "" }),
      5000
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        showNotification(
          "success",
          "Message sent successfully! Thank you for reaching out."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        showNotification("error", "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      showNotification("error", "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "pi pi-envelope",
      label: "Email",
      value: "navinkumaran2004@gmail.com",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: "pi pi-phone",
      label: "Phone",
      value: "+91 8610703970",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "pi pi-map-marker",
      label: "Location",
      value: "Madurai, TN",
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-28 pb-20 relative">
      {/* Notification */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-24 right-4 z-50 p-4 rounded-lg shadow-lg ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            } text-white max-w-md`}
          >
            <div className="flex items-center space-x-2">
              <i
                className={`pi ${
                  notification.type === "success"
                    ? "pi-check-circle"
                    : "pi-times-circle"
                }`}
              ></i>
              <p>{notification.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                CONTACT
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
              Get in <span className="text-blue-400">Touch</span>
            </h1>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Left Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8"
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div>
                    <label
                      className="block text-gray-300 text-sm mb-1.5"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-300 text-sm mb-1.5"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-300 text-sm mb-1.5"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-300 text-sm mb-1.5"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white text-sm resize-none"
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl text-sm font-medium 
                      ${
                        isSubmitting
                          ? "opacity-75 cursor-not-allowed"
                          : "hover:from-blue-600 hover:to-blue-700"
                      } 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 
                      transition-all duration-300`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <i className="pi pi-spinner animate-spin mr-2"></i>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Right Column - Contact Info & Social Links */}
              <div className="space-y-6 sm:space-y-8">
                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Contact Information
                  </h2>
                  <div className="grid gap-4 sm:gap-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div
                          className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-r ${info.color}`}
                        >
                          <i
                            className={`${info.icon} text-lg sm:text-xl text-white`}
                          ></i>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{info.label}</p>
                          <p className="text-white font-medium text-sm sm:text-base">
                            {info.value}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Connect With Me
                  </h2>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <i
                          className={`${social.icon} text-lg sm:text-xl ${social.color} group-hover:scale-110 transition-transform duration-300`}
                        ></i>
                        <span className="text-white text-sm sm:text-base font-medium">
                          {social.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
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

export default ContactPage;
