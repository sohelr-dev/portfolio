import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components import
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import TechnicalSkills from './component/TechnicalSkills';
import Projects from './component/Projects';
import Timeline from './component/Timeline';

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
        
        <Projects />
        
        <Timeline />
      </main>

      <footer className="py-5 text-center glass-card mt-5 border-0 rounded-0">
        <div className="container">
          <p className="mb-2">Malibagh, Gulbagh, Dhaka</p>
          <p className="mb-3 text-info">Email: sohe.4273@gmail.com | WhatsApp: +8801580919769</p>
          <div className="d-flex justify-content-center gap-4">
            <a href="https://github.com/sohelr-dev" target="_blank" className="text-white text-decoration-none">GitHub</a>
            <a href="https://linkedin.com/in/sohel715" target="_blank" className="text-white text-decoration-none">LinkedIn</a>
            <a href="https://sohelit.com" className="text-white text-decoration-none">Main Domain</a>
          </div>
          <p className="mt-4 small text-secondary">© {new Date().getFullYear()} Sohel Rana. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;