import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/projects/Projects";
import AboutMe from "./pages/aboutMe/AboutMe";
import Contact from "pages/contact/Contact";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AboutMe />}></Route>
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutMe" element={<AboutMe />}></Route>
    </Routes>
  );
};

export default AppRoutes;
