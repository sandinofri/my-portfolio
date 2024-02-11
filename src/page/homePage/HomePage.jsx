import React from "react";
import HeroComponent from "../../component/hero/HeroComponent.jsx";
import About from "../../component/about/About.jsx";
import NewProject from "../../component/newProject/NewProject.jsx";
import NewSkil from "../../component/newSkil/NewSkil.jsx";

const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <About />
      <NewProject />
      <NewSkil />
    </>
  );
};

export default HomePage;
