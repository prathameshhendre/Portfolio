import { 
  Code, 
  Server, 
  Database, 
  Layout, 
  Terminal, 
  Cpu, 
  Linkedin, 
  Github, 
  Mail,
  FileText
} from 'lucide-react';
import { Experience, Project, Education, Certification, SkillCategory, SocialLink } from './types';

export const PROFILE = {
  name: "Prathamesh Hendre",
  title: "Software Engineer",
  tagline: "Full-Stack Development | Java, .NET, Spring Boot, React",
  location: "Pune, Maharashtra, India",
  about: `Passionate Software Developer specializing in Full-Stack and Advanced Computing. Currently Software Engineer at MRI Software, focused on building scalable and maintainable backend systems. Skilled in Java, .NET, Spring Boot, and React, with hands-on experience across frontend and backend development. Driven by curiosity, innovation, and a vision to create technology that truly makes an impact.`,
  email: "prathamesh.hendre@example.com", // Placeholder
  resumeLink: "#"
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/prathamesh-hendre", 
    icon: Linkedin,
    label: "Connect on LinkedIn"
  },
  {
    platform: "GitHub",
    url: "https://github.com/prathamesh-hendre", // Inferred from projects
    icon: Github,
    label: "View GitHub"
  },
  {
    platform: "Email",
    url: `mailto:${PROFILE.email}`,
    icon: Mail,
    label: "Send Email"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "mri-software",
    role: "Software Engineer",
    company: "MRI Software",
    period: "Sep 2025 - Present",
    location: "Pune, Maharashtra, India (Hybrid)",
    description: [
      "Contributing to cutting-edge solutions in the real estate and financial software space.",
      "Building scalable and maintainable backend systems.",
      "Collaborating with cross-functional teams to deliver high-quality software."
    ],
    skills: ["Java", ".NET", "Spring Boot", "React", "Prop-Tech"],
    logo: "https://picsum.photos/id/1/200/200" 
  },
  {
    id: "tdtl-intern",
    role: "Back End Developer",
    company: "The DataTech Labs Inc (TDTL)",
    period: "Jun 2025 - Aug 2025",
    location: "Pune, Maharashtra, India",
    description: [
      "Worked on 3 different projects, including an AI development initiative.",
      "Gained hands-on experience in client interaction and business requirement analysis.",
      "Built backend architecture from scratch, designing scalable and efficient solutions.",
      "Adapted quickly to new technologies in a fast-paced environment."
    ],
    skills: ["Backend Architecture", "AI Integration", "Client Relations", "Time Management"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "nextgen-talenthub",
    title: "NextGen TalentHub",
    role: "Full Stack & AI Integration",
    period: "Mar 2025 - May 2025",
    description: "An AI-driven recruitment and career intelligence platform bridging the gap between talents and recruiters using intelligent automation.",
    features: [
      "AI Resume Review with automatic PDF parsing and ATS feedback.",
      "Skill Gap Analysis using ML models.",
      "AI Interview Bot for mock interviews and evaluations.",
      "SQL Chatbot for natural language database querying.",
      "Three-role system: Admin, Recruiter, Talent."
    ],
    techStack: ["React.js", "Django REST", "MySQL", "TensorFlow", "Redis", "AWS", "DeepFace"],
    githubUrl: "https://github.com/NextGen-TalentHub/backend",
    image: "https://picsum.photos/id/60/800/400"
  },
  {
    id: "taskbuddy",
    title: "TaskBuddy",
    role: "Full Stack Developer",
    period: "Dec 2024 - Feb 2025",
    description: "A full-fledged web service connecting customers with taskers for household and skilled tasks (cleaning, moving, repairs).",
    features: [
      "Responsive frontend using React and Bootstrap.",
      "RESTful APIs with .NET Core for user and booking management.",
      "SQL Server for efficient data management.",
      "Admin dashboard for platform oversight."
    ],
    techStack: ["React", ".NET Core", "SQL Server", "REST APIs", "Bootstrap"],
    githubUrl: "https://github.com/KD3-J018/CDAC-FINAL-PROJECT-KD3",
    image: "https://picsum.photos/id/20/800/400"
  }
];

export const EDUCATION: Education[] = [
  {
    id: "sunbeam",
    institution: "SunBeam Institute of Information Technology",
    degree: "Post Graduate Diploma, Computer Science (CDAC)",
    period: "Aug 2024 - Feb 2025",
    details: "Grade A (Project). Secured 76.25% percentile.",
  },
  {
    id: "mes-coe",
    institution: "Modern Education Society's College of Engineering",
    degree: "Bachelor of Engineering (Computer Engineering)",
    period: "2020 - 2024",
    details: "Grade: 71.60. Active in Technical and Non-Technical clubs.",
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cdac",
    name: "PG Diploma in Advanced Computing (PG-DAC)",
    issuer: "C-DAC ACTS",
    date: "Feb 2025"
  },
  {
    id: "dsa-alpha",
    name: "Alpha (DSA with Java)",
    issuer: "Apna College",
    date: "Mar 2024"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Backend",
    icon: Server,
    skills: ["Java", "Spring Boot", "Spring MVC", "Spring Security", ".NET Framework", ".NET Core", "Hibernate", "RESTful Web Services"]
  },
  {
    category: "Frontend",
    icon: Layout,
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"]
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MySQL", "SQL Server", "JDBC", "Database Design"]
  },
  {
    category: "Tools & DevOps",
    icon: Terminal,
    skills: ["Git", "GitHub", "Maven", "Postman", "AWS (Basic)", "Docker"]
  },
  {
    category: "Core Concepts",
    icon: Cpu,
    skills: ["Data Structures & Algorithms", "OOP", "System Design", "Microservices"]
  }
];