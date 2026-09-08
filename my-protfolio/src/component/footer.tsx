import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaGlobe } from 'react-icons/fa';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="py-5 text-center glass-card mt-5 border-0 rounded-0">
      <div className="container">
        <h2 className="fw-bold text-white mb-3" data-aos="fade-up">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '600px' }} data-aos="fade-up">
          Have a project in mind or looking for a dedicated Full Stack Web Developer?
          I'm always open to discussing new opportunities and collaborations.
        </p>

        <p className="mb-2 text-light">
          <FaGlobe className="text-info me-2" />Malibagh, Gulbagh, Dhaka-1217, Bangladesh
        </p>

        {/* Clickable contact links */}
        <p className="mb-4">
          <a href="mailto:sohe.4273@gmail.com" className="text-info text-decoration-none me-4">
            <FaEnvelope className="me-1" />sohe.4273@gmail.com
          </a>
          <a
            href="https://wa.me/8801580919769"
            target="_blank"
            rel="noreferrer"
            className="text-success text-decoration-none"
          >
            <FaWhatsapp className="me-1" />+880 1580-919769
          </a>
        </p>

        {/* Social buttons */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          <a
            href="https://github.com/sohelr-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '44px', height: '44px' }}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sohel715"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="btn btn-outline-info rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '44px', height: '44px' }}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://sohelit.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Main Domain"
            className="btn btn-outline-success rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '44px', height: '44px' }}
          >
            <FaGlobe />
          </a>
        </div>

        <p className="mt-4 small text-secondary mb-0">
          &copy; {year} Sohel Rana. All Rights Reserved. Built with React, TypeScript &amp; Bootstrap.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
