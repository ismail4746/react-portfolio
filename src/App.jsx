import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Element, scroller } from 'react-scroll';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative min-h-screen">
      <div className="absolute inset-0 z-[-1] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-8">
        <Nav />
        <Navbar />

        <Element name="hero" >
          <Hero />
        </Element>

        <Element name="about" >
          <About />
        </Element>

        <Element name="experience" >
          <Experience />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <Element name="technologies">
          <Technologies />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
};

export default App;
