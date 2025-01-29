import React from "react";
import Navbar from "./components/Navbar/Navbar";

import Hero from "./Sections/Hero";
import AboutMe from "./Sections/AboutMe";
import MySpecialization from "./Sections/MySpecialization";
import MySkills from "./Sections/MySkills";
import MyProjects from "./Sections/MyProjects";
import MyEducation from "./Sections/MyEducation"
import MyContact from "./Sections/MyContact";
import Footer from "./Sections/Footer";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Hero />
        <AboutMe />
        <MySpecialization />
        <MySkills />
        <MyProjects />
        <MyEducation/>
        <MyContact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
