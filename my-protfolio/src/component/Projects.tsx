import React from 'react';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

interface Project {
  title: string;
  category: string;
  image: string;
  tech: string[];
  desc: string;
  link: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: "Core Banking System",
    category: "Full Stack (Laravel & Vue.js)",
    image: "/projects/banking-system.png",
    tech: ["Laravel", "Vue.js", "MySQL", "MFA"],
    desc: "A high-concurrency system for managing financial transactions and accounts.",
    features: ["Real-time Fund Transfers", "Role-Based Access Control (RBAC)", "Multi-factor Authentication"],
    link: "https://banking-system.sohelit.com"
  },
  {
    title: "Multi-Vendor E-commerce",
    category: "PHP & Laravel",
    image: "/projects/multi-vendor.png",
    tech: ["Laravel", "Bootstrap", "MySQL", "SSLCommerz"],
    desc: "Comprehensive marketplace with vendor management and secure payment flow.",
    features: ["Vendor Approval Workflow", "Stock Management", "SSLCommerz Payment Gateway"],
    link: "https://multi-shop.sohelit.com"
  },
  {
    title: "Prescription Management",
    category: "React & PHP (API)",
    image: "/projects/prescription.png",
    tech: ["React", "PHP", "Axios", "PDF Generation"],
    desc: "Digital health solution for tracking patient records and generating prescriptions.",
    features: ["Auto-suggestion Medicine Entry", "Daily Appointment Syncing", "Dynamic PDF Generation"],
    link: "https://rx-power.sohelit.com/dashboard"
  },
  {
    title: "Event Hub & Ticketing",
    category: "PHP & jQuery",
    image: "/projects/event.png",
    tech: ["PHP", "JavaScript", "QR Code", "Bootstrap"],
    desc: "Online ticket booking system with unique QR-based validation.",
    features: ["QR Code Generation", "Automated Invoice", "Data Analytics Dashboard"],
    link: "https://sohelit.com/eventhub"
  },
  {
    title: "Travel Blog & Review Platform",
    category: "WordPress Customization",
    image: "/projects/blog.jpg",
    tech: ["WordPress", "PHP", "Theme Customization", "SEO"],
    desc: "Dynamic travel blog with interactive stories and plugin reviews.",
    features: ["Interactive Travel Stories", "User Comment System", "High-quality Image Galleries"],
    link: "https://sohelit.com/wp"
  },
  {
    title: "Bd-Stall Clone",
    category: "Frontend Design",
    image: "/projects/bdstall.jpg",
    tech: ["HTML5", "CSS3", "Bootstrap 5"],
    desc: "A high-fidelity static clone of the popular Bd-Stall marketplace.",
    features: ["Fully Responsive Layout", "Detailed Product Pages", "Clean UI/UX Implementation"],
    link: "https://bdstall-clone.sohelit.com"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container py-5">
      <div className="text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold text-white mb-3">Professional <span className="gradient-text">Portfolio</span></h2>
        <p className="text-secondary mx-auto" style={{maxWidth: '700px'}}>
          Exploring 6 major projects ranging from financial systems to e-commerce and CMS customization.
        </p>
      </div>

      <div className="row g-4">
        {projects.map((p, i) => (
          <div className="col-lg-4 col-md-6" key={i} data-aos="zoom-in-up" data-aos-delay={i * 50}>
            <div className="card glass-card h-100 border-0 shadow-lg">
              {/* Image Section */}
              <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                <img 
                    src={p.image} 
                    alt={p.title} 
                    className="card-img-top w-100 h-100 object-fit-cover project-image" 
                />
                <div className="position-absolute top-0 end-0 p-2">
                    <span className="badge bg-dark opacity-75">{p.category}</span>
                </div>
                {/* Hover Overlay - optional but looks cool */}
                    <div className="project-overlay d-flex align-items-center justify-content-center">
                        <span className="text-white fw-bold">View Project</span>
                    </div>
            </div>

              <div className="card-body p-4 d-flex flex-column">
                <h4 className="card-title text-white fw-bold">{p.title}</h4>
                <p className="text-secondary small mb-3">{p.desc}</p>
                
                {/* Key Features List */}
                <ul className="list-unstyled mb-4 flex-grow-1">
                   {p.features.map((feature, idx) => (
                     <li key={idx} className="text-light small mb-1">
                       <span className="text-info me-2">▹</span>{feature}
                     </li>
                   ))}
                </ul>

                {/* Tech Stack Badges */}
                <div className="mb-4">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="badge bg-secondary me-1 mb-1 small" style={{fontSize: '0.7rem'}}>{t}</span>
                  ))}
                </div>

                <a href={p.link} target="_blank" rel="noreferrer" 
                   className="btn btn-primary btn-sm d-flex align-items-center justify-content-center gap-2 mt-auto">
                  <FaExternalLinkAlt size={12} /> View Live Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;