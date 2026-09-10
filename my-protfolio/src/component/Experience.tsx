import React from 'react';
import { FaBriefcase, FaBuilding, FaServer } from 'react-icons/fa';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: 'April 2026 – August 2026',
    role: 'Web Developer (Laravel)',
    company: 'Bavaria Garment Exporter',
    highlights: [
      'Developed and maintained a multi-tenant SaaS ERP platform using Laravel.',
      'Deployed and managed Rozalia Smart Ops ERP on a DigitalOcean cloud server.',
      'Integrated Asana, Hubstaff, GitHub, Notion, and Slack into ERP workflows.',
      'Configured Apache, SSL certificates, Supervisor queue workers, and cron jobs.',
    ],
  },
  {
    period: 'September 2025 – January 2026',
    role: 'Trainee Programmer',
    company: 'Base Software Ltd',
    highlights: [
      'Contributed to coding, debugging, testing, and client-support activities.',
      'Worked with the team to investigate issues and deliver reliable solutions.',
    ],
  },
];

const Experience: React.FC = () => (
  <section id="experience" className="container py-5">
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="fw-bold text-white">Professional <span className="gradient-text">Experience</span></h2>
      <p className="text-secondary mb-0">Hands-on experience building, deploying, and supporting web applications.</p>
    </div>

    <div className="row justify-content-center g-4">
      {experiences.map((experience, index) => (
        <div className="col-lg-6" key={experience.company} data-aos="fade-up" data-aos-delay={index * 100}>
          <article className="glass-card h-100 p-4">
            <div className="d-flex align-items-start gap-3 mb-3">
              <span className="text-info fs-3"><FaBriefcase /></span>
              <div>
                <span className="badge bg-info text-dark mb-2">{experience.period}</span>
                <h4 className="text-white fw-bold mb-1">{experience.role}</h4>
                <p className="text-info mb-0"><FaBuilding className="me-2" />{experience.company}</p>
              </div>
            </div>
            <ul className="list-unstyled mb-0">
              {experience.highlights.map((highlight) => (
                <li className="text-light small d-flex gap-2 mb-2" key={highlight}>
                  <FaServer className="text-info mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
