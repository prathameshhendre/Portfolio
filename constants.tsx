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
  tagline: "Software Engineer at MRI Software | Prop-Tech | Full-Stack Development | Java, .NET, Spring Boot, React",
  location: "Pune, Maharashtra, India",
  about: "Passionate Software Developer specializing in Full-Stack and Advanced Computing. Currently Software Engineer at MRI Software, focused on building scalable and maintainable backend systems. Skilled in Java, .NET, Spring Boot, and React, with hands-on experience across frontend and backend development. Previously contributed to AI-driven projects during my internship at The Data Tech Labs. Driven by curiosity, innovation, and a vision to create technology that truly makes an impact.",
  email: "prathamesh.hendre@example.com", 
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
    url: "https://github.com/prathamesh-hendre", 
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
    location: "Pune, Maharashtra, India · Hybrid",
    description: [
      "Contributing to cutting-edge solutions in the real estate and financial software space.",
      "Building scalable and maintainable backend systems.",
      "Collaborating with talented professionals to deliver high-quality software."
    ],
    skills: ["Java", ".NET", "Spring Boot", "React", "Prop-Tech"],
    logo: "https://ui-avatars.com/api/?name=MRI&background=0D8ABC&color=fff" 
  },
  {
    id: "tdtl-intern",
    role: "Back End Developer",
    company: "The DataTech Labs Inc (TDTL)",
    period: "Jun 2025 - Aug 2025",
    location: "Pune, Maharashtra, India",
    description: [
      "Worked on 3 different projects, including a project related to AI development.",
      "Gained hands-on experience in client interaction, improving communication and understanding real-world business requirements.",
      "Built backend architecture from scratch, designing scalable and efficient solutions.",
      "Learned to quickly adapt and pick up new technologies and concepts when required.",
      "Practiced time management and multitasking to handle multiple responsibilities effectively in a fast-paced environment."
    ],
    skills: ["Backend Architecture", "AI Integration", "Client Relations", "Time Management", "Full-Stack Development"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "nextgen-talenthub",
    title: "NextGen TalentHub",
    role: "Full Stack & AI Integration",
    period: "Mar 2025 - May 2025",
    description: "An AI-driven recruitment and career intelligence platform bridging the gap between talents and recruiters using intelligent automation, resume analytics, and interview evaluation. The system supports three roles — Admin, Recruiter, and Talent — each with personalized dashboards.",
    features: [
      "AI Resume Review – Automatic PDF parsing, ATS feedback, and summary generation.",
      "Skill Gap Analysis – Identifies missing skills for target roles using ML models.",
      "AI Interview Bot – Conducts mock interviews, evaluates responses, and generates a digital Skill Passport.",
      "SQL Chatbot – Conversational interface for querying the database using natural language.",
      "Salary & Cultural Insights – Provides real-time benchmarking and workplace culture guidance."
    ],
    techStack: ["React.js", "Django REST", "MySQL", "TensorFlow", "Transformers", "Redis", "AWS", "DeepFace"],
    githubUrl: "https://github.com/NextGen-TalentHub/backend",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "taskbuddy",
    title: "TaskBuddy",
    role: "Full Stack Developer",
    period: "Dec 2024 - Feb 2025",
    description: "A full-fledged web service connecting customers with taskers for various household and skilled tasks like cleaning, moving, and repairs. Addresses the real-world challenge of finding trusted help on-demand.",
    features: [
      "Responsive and intuitive frontend using React and Bootstrap.",
      "RESTful APIs with .NET Core to manage user data, tasker profiles, and bookings.",
      "SQL Server for efficient data management and optimized database performance.",
      "Admin dashboard to facilitate user, tasker, and booking management."
    ],
    techStack: ["React", ".NET Core", "SQL Server", "REST APIs", "Bootstrap", "Git"],
    githubUrl: "https://github.com/KD3-J018/CDAC-FINAL-PROJECT-KD3",
    image: "https://images.unsplash.com/photo-1581578731117-104f2a869a30?q=80&w=1000&auto=format&fit=crop"
  }
];

export const EDUCATION: Education[] = [
  {
    id: "sunbeam",
    institution: "SunBeam Institute of Information Technology",
    degree: "PG Diploma in Advanced Computing (PG-DAC)",
    period: "Aug 2024 - Feb 2025",
    details: "Grade A. Secured 76.25% percentile. Comprehensive learning in Java, .NET, Database Technologies, Web-based Programming, Algorithms & Data Structures.",
  },
  {
    id: "mes-coe",
    institution: "Modern Education Society's College of Engineering",
    degree: "Bachelor of Engineering (Computer Engineering)",
    period: "2020 - 2024",
    details: "Grade: 71.60. Active in Technical and Non-Technical clubs and cultural programs.",
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
    category: "Languages & Core",
    icon: Code,
    skills: ["Java", "Core Java", "C#", "Data Structures & Algorithms", "Dynamic Programming"]
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: ["Spring Boot", "Spring MVC", "Spring Security", ".NET Framework", "J2EE Web Services", "Hibernate", "RESTful WebServices"]
  },
  {
    category: "Frontend Development",
    icon: Layout,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MySQL", "SQL Server", "JDBC", "SQL"]
  },
  {
    category: "Tools & Process",
    icon: Terminal,
    skills: ["Git", "Project Architecture", "Client Relations", "Time Management", "Maven", "Postman"]
  }
];