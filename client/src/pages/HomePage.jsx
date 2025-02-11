import React from "react";
import HeroSection from "../components/HeroSection";
import MyTechStacks from "../components/MyTechStacks";
import ProjectsSlider from "../components/ProjectsSlider";
import Journey from "../components/Journey";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectsSlider />
      <MyTechStacks />
      <Journey />
    </div>
  );
};

export default HomePage;
