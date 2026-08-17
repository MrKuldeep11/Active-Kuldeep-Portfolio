export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  technologies: string[];
  liveDemoUrl: string;
  githubUrl: string;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Bootstrap", "Tailwind CSS", "React", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Git", "GitHub"],
  },
  {
    title: "AI & Workflow",
    skills: ["AI Tools", "Prompt Design", "Automation", "Product Thinking", "Learning Mindset"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "LUXORA — Premium E-Commerce Platform",
    description:
      "A modern e-commerce platform with product discovery, cart management, wishlist functionality, responsive UI, and premium shopping experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Smart Study Management System",
    description:
      "A complete study management platform designed to organize students, teachers, courses, attendance, assignments, notes, and academic workflows.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Study Assistant",
    description:
      "An AI-focused study assistant concept designed to help students work with learning materials and create a smarter study workflow.",
    technologies: ["AI", "Python", "Flask", "SQLite"],
    liveDemoUrl: "#",
    githubUrl: "#",
  },
];
