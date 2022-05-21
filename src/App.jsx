import React from "react";
import Header from "./componants/header/Header";
import Nav from "./componants/nav/Nav";
import About from "./componants/about/About";
import Skills from "./componants/skills/Skills";
import Services from "./componants/services/Services";
import Projects from "./componants/projects/Projects.jsx";
import Quotes from "./componants/quotes/Quotes";
import Contact from "./componants/contact/Contact";
import Footer from "./componants/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Quotes />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
