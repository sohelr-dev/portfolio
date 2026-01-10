import React from 'react';
import { 
  SiLaravel, SiReact, SiVuedotjs , SiJavascript, SiJquery, 
  SiPhp, SiMysql, SiBootstrap, SiGithub, SiWordpress, SiGraphql 
} from 'react-icons/si';

interface SkillCategory {
  category: string;
  skills: { name: string; icon: JSX.Element; color: string }[];
}

const skillData: SkillCategory[] = [
  {
    category: "Backend & Language",
    skills: [
      { name: "PHP (Advanced)", icon: <SiPhp />, color: "#777BB4" },
      { name: "Laravel (Expert)", icon: <SiLaravel />, color: "#F05340" },
      { name: "MySQL (Eloquent)", icon: <SiMysql />, color: "#4479A1" },
      { name: "GraphQL & REST", icon: <SiGraphql />, color: "#E10098" },
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "React & Vue.js", icon: <div className="d-flex gap-1"><SiReact /><SiVuedotjs  /></div>, color: "#61DAFB" },
      { name: "jQuery", icon: <SiJquery />, color: "#0769AD" },
      { name: "Bootstrap 5", icon: <SiBootstrap />, color: "#7952B3" },
    ]
  },
  {
    category: "Integrations & Tools",
    skills: [
      { name: "SSLCommerz / Stripe", icon: <span className="fw-bold">$$</span>, color: "#00d2ff" },
      { name: "JWT / Sanctum", icon: <span className="fw-bold">🔐</span>, color: "#92fe9d" },
      { name: "WordPress Custom", icon: <SiWordpress />, color: "#21759B" },
      { name: "Git & C-Panel", icon: <SiGithub />, color: "#ffffff" },
    ]
  }
];

const TechnicalSkills: React.FC = () => {
  return (
    <section id="skills" className="container py-5">
      <div className="text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold text-white">Technical <span className="gradient-text">Competencies</span></h2>
        <p className="text-secondary">Comprehensive skill set in modern web technologies and secure architectures.</p>
      </div>

      <div className="row g-4">
        {skillData.map((group, idx) => (
          <div className="col-lg-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
            <div className="glass-card p-4 h-100">
              <h5 className="mb-4 text-info fw-bold border-bottom border-secondary pb-2">
                {group.category}
              </h5>
              <div className="d-flex flex-column gap-3">
                {group.skills.map((skill, i) => (
                  <div key={i} className="d-flex align-items-center gap-3">
                    <span style={{ color: skill.color, fontSize: '1.5rem' }}>{skill.icon}</span>
                    <span className="text-light">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;