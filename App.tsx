import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Download, 
  ExternalLink, 
  Github, 
  ChevronRight,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Mail
} from 'lucide-react';
import { 
  PROFILE, 
  EXPERIENCE, 
  PROJECTS, 
  EDUCATION, 
  CERTIFICATIONS, 
  SKILL_CATEGORIES, 
  SOCIAL_LINKS 
} from './constants';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => scrollTo('home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            PH.
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="px-4 py-2 text-sm font-medium text-slate-950 bg-blue-400 rounded-full hover:bg-blue-300 transition-colors"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4 shadow-xl">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-left text-lg text-slate-300 hover:text-blue-400 py-2 border-b border-slate-800/50"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Available for new opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {PROFILE.name}
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              {PROFILE.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollTo('contact')}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
              >
                Let's Talk <ChevronRight size={18} />
              </button>
              <a 
                href={PROFILE.resumeLink}
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg transition-all border border-slate-700 flex items-center gap-2"
              >
                Resume <Download size={18} />
              </a>
            </div>
            
            <div className="flex gap-4 pt-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-800/50 hover:bg-slate-800 hover:text-blue-400 rounded-full transition-all border border-slate-700/50"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Abstract decorative shapes behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <img 
                src="https://picsum.photos/400/400?grayscale" 
                alt={PROFILE.name}
                className="w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl relative z-10"
              />
              <div className="absolute bottom-4 right-4 z-20 bg-slate-800 p-3 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3 animate-bounce-slow">
                 <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                   <Code2 size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-slate-400">Specializing in</p>
                   <p className="font-bold text-sm">Full-Stack Dev</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
            About Me
            <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            {PROFILE.about}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="text-blue-400" size={18} />
              {PROFILE.location}
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Briefcase className="text-blue-400" size={18} />
              {PROFILE.title}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
          <p className="text-slate-400 max-w-2xl">A comprehensive overview of my technical skills and tools I use to build scalable solutions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.category} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-colors group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-100">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
              <p className="text-slate-400">My professional journey and key achievements.</p>
            </div>
            <button className="text-blue-400 font-medium flex items-center gap-2 hover:text-blue-300 transition-colors">
              Download Resume <Download size={16} />
            </button>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 md:pl-0">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
                
                <div className={`md:flex items-start justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]"></div>

                  {/* Date (Desktop) */}
                  <div className={`hidden md:block w-[45%] ${index % 2 === 0 ? 'text-left' : 'text-right'} pt-1`}>
                    <span className="text-lg font-medium text-blue-400">{exp.period}</span>
                  </div>

                  {/* Content Card */}
                  <div className="md:w-[45%] relative">
                    {/* Mobile Timeline Line */}
                    <div className="md:hidden absolute left-[-29px] top-2 w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-950"></div>
                    <div className="md:hidden absolute left-[-24px] top-5 bottom-[-48px] w-px bg-slate-800"></div>

                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:bg-slate-800/50 transition-all hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 group">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                          <p className="text-slate-300 font-medium">{exp.company}</p>
                        </div>
                        {exp.logo && <img src={exp.logo} alt={exp.company} className="w-10 h-10 rounded bg-slate-800 object-cover" />}
                      </div>
                      
                      <p className="md:hidden text-sm text-blue-400 mb-4 flex items-center gap-2">
                        <Calendar size={14} /> {exp.period}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500/50 rounded-full flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 border-t border-slate-800 pt-4">
                        {exp.skills.map(skill => (
                          <span key={skill} className="text-xs font-medium text-slate-500 bg-slate-950 px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl">A selection of projects that showcase my passion for building complex systems.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all flex flex-col h-full group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-80"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-2 inline-block">
                    {project.role}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6 flex-1">
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                        {project.features.slice(0, 3).map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-800 text-blue-300 text-xs rounded border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-500" /> Education
            </h2>
            <div className="space-y-8">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative pl-6 border-l-2 border-slate-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-900 border-2 border-blue-500 rounded-full"></div>
                  <h3 className="text-lg font-bold text-slate-200">{edu.institution}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-1">{edu.degree}</p>
                  <p className="text-slate-500 text-sm mb-2">{edu.period}</p>
                  {edu.details && <p className="text-slate-400 text-sm">{edu.details}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-blue-500" /> Certifications
            </h2>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors">
                  <div>
                    <h3 className="font-bold text-slate-200">{cert.name}</h3>
                    <p className="text-sm text-slate-500">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={`mailto:${PROFILE.email}`}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              <Mail size={20} /> Say Hello
            </a>
            <a 
              href={PROFILE.resumeLink}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all border border-slate-700 flex items-center gap-2"
            >
              <Download size={20} /> Download CV
            </a>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  className="text-slate-500 hover:text-blue-400 transition-colors"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;