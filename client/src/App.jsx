import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { AuthProvider } from "./context/AuthContext";
import { NavbarProvider, useNavbar } from "./context/NavbarContext";
import { HelmetProvider } from "react-helmet-async";

// Layout Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Main Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboard from "./pages/AdminDashboard";

const AppContent = () => {
  const { isNavbarVisible } = useNavbar();

  return (
    <div className="flex flex-col min-h-screen">
      {isNavbarVisible && <NavBar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          {/* <Route path="/testimonials" element={<TestimonialsPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <PrimeReactProvider>
          <NavbarProvider>
            <Router>
              <ScrollToTop />
              <AppContent />
            </Router>
          </NavbarProvider>
        </PrimeReactProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
