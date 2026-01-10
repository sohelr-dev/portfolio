import React from 'react';
import { FaLaravel, FaReact, FaVuejs } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Animation er jonno

const Hero: React.FC = () => {
  return (
    <section id="home" className="container py-5 mt-5 overflow-hidden">
      <div className="row align-items-center min-vh-75">
        
        {/* Left Side: Text Content */}
        <div className="col-md-7">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-3 fw-bold mb-0">Sohel Rana</h1>
            <h3 className="gradient-text mb-4 fw-semibold" style={{ fontSize: '1.8rem' }}>
              Full Stack Web Developer
            </h3>
            
            <p className="lead text-secondary mb-4" style={{ maxWidth: '90%' }}>
              Utilizing a <strong>BSc in Statistics</strong> to apply analytical reasoning 
              and logical precision in solving complex technical challenges within web development.
            </p>

            <div className="mt-4 d-flex flex-wrap gap-2">
              <span className="badge bg-primary p-2">Laravel Expert</span>
            <span className="badge bg-info p-2 text-dark">React/Vue </span>
            <span className="badge bg-success p-2">RESTful APIs</span>
            <span className="badge bg-warning p-2">GraphQL</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Animated Icons */}
        <div className="col-md-5 text-center mt-5 mt-md-0">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="position-relative d-inline-block"
          >
            {/* Glass Card with Floating Animation */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-5 glass-card rounded-circle shadow-lg d-flex align-items-center justify-content-center bg-white bg-opacity-10"
              style={{ backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <div className="d-flex gap-3">
                <FaLaravel size={60} color="#F05340" title="Laravel" />
                <FaReact size={60} color="#61DAFB" title="React" />
                <FaVuejs size={60} color="#4FC08D" title="Vue.js" />
              </div>
            </motion.div>

            {/* Background Glow Effect */}
            <div className="position-absolute top-50 start-50 translate-middle z-n1" 
                 style={{ width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(97,218,251,0.2) 0%, transparent 70%)', filter: 'blur(30px)' }}>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;