export const projects = [
  {
    title: "VCET-Connect",
    description:
      "A comprehensive academic management platform designed for VCET's ecosystem. Streamline administrative processes, enhance communication, and maintain transparency across all departments.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "/vcetconnect.png",
    category: "React",
    demoLink: "https://vcet-connect.onrender.com/",
    githubLink: "#",
    features: [
      "Leave Management",
      "OD Management",
      "Defaulter Management",
      "CGPA Calculator",
    ],
  },
  {
    title: "Urban Uplift",
    description:
      "A platform to report issues, collaborate with authorities, and make your community better. Together, we can create positive change.",
    tags: ["React", "Node.js", "MongoDB", "React Prime"],
    image: "/urbanuplift.png",
    category: "React",
    demoLink: "https://themainone.onrender.com/",
    githubLink: "#",
    features: ["Issue Reporting", "Collaboration", "Positive Change"],
  },
  {
    title: "Skip The Doctor",
    description:
      "Expert care online—book consults, prescription refills, and follow-ups anytime, anywhere. Your health, simplified.",
    tags: ["NextJs", "ShadCN", "PostgreSQL", "Supabase"],
    image: "/std.png",
    category: "NextJs",
    demoLink: "https://skipthedoctor.ca/",
    githubLink: "#",
    features: [
      "Book Consults",
      "Prescription Refills",
      "Follow-ups",
      "Your Health",
    ],
  },
  {
    title: "HR Management System",
    description:
      "Streamline your HR processes with our comprehensive human resource management system. Everything you need in one powerful platform.",
    tags: ["React", "GraphQL", "PostgreSQL", "Ant UI"],
    image: "/hrms.png",
    category: "React",
    demoLink: "https://hrms-rwyv.onrender.com/",
    githubLink: "#",
    features: [
      "Employee Management",
      "Leave Management",
      "Performance Management",
      "Payroll Management",
    ],
  },
  {
    title: "Skip The Clinic",
    description:
      "Expert care online—book consults, prescription refills, and follow-ups anytime, anywhere. Your health, simplified.",
    tags: ["NextJs", "ShadCN", "PostgreSQL", "Supabase"],
    image: "/stc.png",
    category: "NextJs",
    demoLink: "https://skiptheclinic.ca/",
    githubLink: "#",
    features: [
      "Book Consults",
      "Prescription Refills",
      "Follow-ups",
      "Your Health",
    ],
  },
  {
    title: "Promptopia",
    description:
      "Discover, share, and explore AI prompts with ease. Join a community of creators and innovators.",
    tags: ["NextJs", "ShadCN", "PostgreSQL", "Supabase"],
    image: "/promptopia.png",
    category: "NextJs",
    demoLink: "https://promptopia-mauve.vercel.app/",
    githubLink: "#",
    features: ["Discover", "Share", "Explore", "Community"],
  },
  {
    title: "Eventify",
    description:
      "Eventify is a platform that allows you to discover, share, and explore events with ease. Join a community of creators and innovators.",
    tags: ["NextJs", "ShadCN", "PostgreSQL", "Supabase"],
    image: "/eventify.png",
    category: "NextJs",
    demoLink: "https://evently-beige-eight.vercel.app/",
    githubLink: "#",
    features: ["Discover", "Share", "Explore", "Community"],
  },

  {
    title: "Nike Frontend",
    description:
      "A modern and responsive frontend for Nike, built with React, Tailwind CSS, and Framer Motion.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/nike.png",
    category: "React",
    demoLink: "https://nike-frontend-one.vercel.app/",
    githubLink: "#",
    features: ["Modern", "Responsive", "Framer Motion", "Tailwind CSS"],
  },
];

export const PORTFOLIO_SECTIONS = {
  HERO: "hero",
  ABOUT: "about",
  SKILLS: "skills",
  PROJECTS: "projects",
  EXPERIENCE: "experience",
  CONTACT: "contact",
};

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", icon: "pi pi-github", url: "https://github.com/Navin2k4" },
  {
    name: "GeeksForGeeks",
    icon: "pi pi-database",
    url: "https://auth.geeksforgeeks.org/user/NavinKumarMNK",
  },
  {
    name: "HackerRank",
    icon: "pi pi-verified",
    url: "https://www.hackerrank.com/profile/22cseb48_Navin",
  },
  {
    name: "LeetCode",
    icon: "pi pi-code",
    url: "https://leetcode.com/u/navinkumaran2004/",
  },
  {
    name: "LinkedIn",
    icon: "pi pi-linkedin",
    url: "https://www.linkedin.com/in/navin2004/",
  },
  { name: "Twitter", icon: "pi pi-twitter", url: "https://x.com/navin_2k4" },
  {
    name: "Instagram",
    icon: "pi pi-instagram",
    url: "https://www.instagram.com/navin_2k4/",
  },
];

export const SKILLS = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
  tools: ["Git", "Docker", "AWS", "Firebase", "Figma"],
};

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const footerLinks = {
  portfolio: [
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    // { name: "Testimonials", path: "/testimonials" },
  ],
  resources: [{ name: "Blog", path: "/blog" }],
};

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: "pi pi-linkedin",
    url: "https://www.linkedin.com/in/navin2004/",
    color: "hover:text-blue-400",
  },
  {
    name: "GitHub",
    icon: "pi pi-github",
    url: "https://github.com/Navin2k4",
    color: "hover:text-gray-100",
  },
  {
    name: "Twitter",
    icon: "pi pi-twitter",
    url: "https://x.com/navin_2k4",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: "pi pi-instagram",
    url: "https://www.instagram.com/navin_2k4/",
    color: "hover:text-pink-400",
  },
];
