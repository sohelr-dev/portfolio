import React from 'react';
import { FaGraduationCap, FaAward } from 'react-icons/fa';

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  icon: JSX.Element;
}

const timelineData: TimelineItem[] = [
  {
    year: "2025",
    title: "Professional Diploma in Web Application Development",
    institution: "IsDB-BISEW IT Scholarship Programme",
    description: "Intensive 788-hour training on Laravel, React, Vue.js, and WordPress. [cite: 31, 32, 40]",
    icon: <FaAward />
  },
  {
    year: "2022",
    title: "BSc in Statistics",
    institution: "Habibullah Bahar College, Dhaka",
    description: "Achieved CGPA 3.16. Developed strong analytical reasoning and logical precision. [cite: 10, 42]",
    icon: <FaGraduationCap />
  },
  {
    year: "2018",
    title: "Higher Secondary Certificate (Science)",
    institution: "Science Background",
    description: "Completed with a focus on analytical thinking and problem-solving. [cite: 43]",
    icon: <FaGraduationCap />
  }
];

const Timeline: React.FC = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-5 fw-bold gradient-text" data-aos="fade-up">Education & Awards</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {timelineData.map((item, index) => (
            <div className="d-flex mb-4" key={index} data-aos="fade-left" data-aos-delay={index * 100}>
              <div className="me-4">
                <div className="glass-card rounded-circle d-flex align-items-center justify-content-center" 
                     style={{ width: '60px', height: '60px', color: '#00d2ff', fontSize: '1.5rem' }}>
                  {item.icon}
                </div>
                {index !== timelineData.length - 1 && (
                  <div className="mx-auto bg-secondary" style={{ width: '2px', height: '100px', opacity: '0.3' }}></div>
                )}
              </div>
              <div className="glass-card p-4 flex-grow-1">
                <span className="badge bg-info text-dark mb-2">{item.year}</span>
                <h4 className="fw-bold">{item.title}</h4>
                <h6 className="text-info">{item.institution}</h6>
                <p className="text-secondary small mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;