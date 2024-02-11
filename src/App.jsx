import { useState } from "react";
import "./App.css";
import NavbarComponent from "./component/navbar/NavbarComponent";
import Footer from "./component/footer/Footer";
import HomePage from "./page/homePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Project from "./page/project/Project";
import Skil from "./page/skil/Skil";
import Contact from "./page/contact/Contact";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/skil" element={<Skil/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
