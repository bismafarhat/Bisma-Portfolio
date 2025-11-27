import { LucideIcon, Code2, Layout, Terminal, Cpu, Database, Palette, Zap, Users, Brain, Award } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  date: string;
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: "Frontend" | "Tools" | "Soft Skills";
}

export interface Certification {
  title: string;
  provider: string;
  duration?: string;
}

export const personalInfo = {
  name: "Bisma Farhat",
  role: "Frontend Developer",
  email: "bismafarhat93@gmail.com",
  phone: "+92-3485112749",
  location: "Islamabad, Pakistan",
  linkedin: "https://www.linkedin.com/in/bisma-farhat-21b070248/",
  github: "https://github.com/bismafarhat",
  about: "Frontend Developer (Beginner) with foundational skills in HTML, CSS, JavaScript and React. Passionate about building responsive and user-friendly websites, and eager to enhance skills through hands-on projects and professional training. Quick learner with a strong motivation to grow as a web developer."
};

export const skills: Skill[] = [
  { name: "React.js", icon: Code2, category: "Frontend" },
  { name: "JavaScript (ES6+)", icon: Terminal, category: "Frontend" },
  { name: "HTML5 & CSS3", icon: Layout, category: "Frontend" },
  { name: "Responsive Design", icon: Palette, category: "Frontend" },
];

export const coreSkills: Skill[] = [
  { name: "Problem Solving", icon: Brain, category: "Soft Skills" },
  { name: "Team Collaboration", icon: Users, category: "Soft Skills" },
  { name: "Communication", icon: Zap, category: "Soft Skills" },
  { name: "Flexibility", icon: Zap, category: "Soft Skills" },
];

export const tools: Skill[] = [
  { name: "Git/GitHub", icon: Database, category: "Tools" },
  { name: "VS Code", icon: Cpu, category: "Tools" },
];

export const experience: Experience[] = [
  {
    company: "IDRAK Ai Ltd",
    role: "Frontend Developer Intern",
    period: "Aug 2023 – Aug 2023",
    location: "Islamabad, Pakistan",
    description: [
      "Built small projects like a counter and To-Do list in JavaScript.",
      "Improved DOM manipulation and UI skills."
    ]
  },
  {
    company: "CODEXIER",
    role: "E-commerce Developer Intern",
    period: "July 2023 – Aug 2023",
    location: "Islamabad, Pakistan",
    description: [
      "Added 100+ products, optimized SEO content, improved listings.",
      "Achieved 30 percent growth in product visibility."
    ]
  },
  {
    company: "Google Developer Student Club",
    role: "Web Team Member",
    period: "Oct 2023 – May 2024",
    location: "Gulberg Greens",
    description: [
      "Contributed to web-related activities and attended sessions on modern frameworks."
    ]
  },
  {
    company: "IEEE Women In Engineering",
    role: "Volunteer",
    period: "Oct 2023 – May 2024",
    location: "Gulberg Greens",
    description: [
      "Assisted in organizing tech events, enhancing teamwork and communication skills."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "E-Commerce Website",
    description: "Developed a full-stack e-commerce website with product listings, authentication, and cart functionality. Worked with REST APIs, backend routing, and MongoDB integration to handle dynamic product data.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    date: "May 2024"
  },
  {
    title: "Responsive Landing Page",
    description: "Designed a modern landing page with animations and adaptive layout. Optimized for mobile-first responsive design.",
    tech: ["HTML", "CSS", "Javascript"],
    date: "May 2024"
  }
];

export const education = [
  {
    degree: "BS Computer Science",
    institution: "Riphah International University, Islamabad",
    period: "Jan 2022 – Dec 2025",
    gpa: "3.0"
  }
];

export const certifications: Certification[] = [
  {
    title: "Introduction to Front-End Development",
    provider: "Meta – Coursera"
  },
  {
    title: "MERN Stack Course",
    provider: "NAVTTC",
    duration: "3 Months"
  },
  {
    title: "Frontend Development Bootcamp",
    provider: "7 Days"
  },
  {
    title: "HTML, CSS, JavaScript",
    provider: "NFTP"
  }
];
