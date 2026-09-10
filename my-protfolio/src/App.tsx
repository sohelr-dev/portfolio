import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components import
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import TechnicalSkills from './component/TechnicalSkills';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Timeline from './component/Timeline';
import Footer from './component/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS Animation
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="portfolio-wrapper">
      <Navbar />

      <main>
        <Hero />

        <div className="container my-5">
           <hr className="border-secondary opacity-25" />
        </div>

        <TechnicalSkills />

        <Experience />

        <Projects />

        <Timeline />
      </main>

      <Footer />
    </div>
  );
};

export default App;
