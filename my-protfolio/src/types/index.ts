import { type ReactElement } from 'react';

/** Skill categories used by TechnicalSkills component */
export interface Skill {
  name: string;
  icon: ReactElement;
  color: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

/** Project entry used by Projects component */
export interface Project {
  title: string;
  category: string;
  image: string;
  tech: string[];
  desc: string;
  link: string;
  features: string[];
}

/** Timeline entry used by Timeline component */
export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  icon: ReactElement;
}
