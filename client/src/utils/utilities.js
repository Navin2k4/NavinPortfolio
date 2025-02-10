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
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },

];

export const SOCIAL_LINKS = [
  { name: "GitHub", icon: "pi pi-github", url: "#" },
  { name: "LinkedIn", icon: "pi pi-linkedin", url: "#" },
  { name: "Twitter", icon: "pi pi-twitter", url: "#" },
  { name: "Instagram", icon: "pi pi-instagram", url: "#" },
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
      { name: "Testimonials", path: "/testimonials" },
    ],
    resources: [
      { name: "Blog", path: "/blog" },
    ]
  };

  export  const socialLinks = [
    {
      name: "GitHub",
      icon: "pi pi-github",
      url: "https://github.com/yourusername",
      color: "hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      icon: "pi pi-linkedin",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: "pi pi-twitter",
      url: "https://twitter.com/yourusername",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: "pi pi-instagram",
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-400",
    },
  ];