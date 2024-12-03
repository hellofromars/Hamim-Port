import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, Star, Code, 
         Database, Layout, Terminal, Cloud, Globe, ChevronDown, Brain, 
         Laptop, Boxes, Workflow, Moon, Sun } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const loadingVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skillsData = [
    {
      title: "Frontend Development",
      icon: <Layout className="skill-icon" />,
      skills: ["React/Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Material UI", "Redux"]
    },
    {
      title: "Backend Development",
      icon: <Terminal className="skill-icon" />,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="skill-icon" />,
      skills: ["AWS", "Docker", "CI/CD", "Kubernetes", "Terraform", "Microservices"]
    },
    {
      title: "Emerging Tech",
      icon: <Brain className="skill-icon" />,
      skills: ["AI/ML Integration", "Web3", "WebGL", "WebRTC", "PWA", "SaaS Architecture"]
    }
  ];

  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "Built a full-stack e-commerce platform with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: <Boxes className="project-icon" />
    },
    {
      title: "AI Task Manager",
      description: "Developed an AI-powered task management system with natural language processing",
      tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      icon: <Workflow className="project-icon" />
    }
  ];

  if (isLoading) {
    return (
      <motion.div 
        className="loader"
        variants={loadingVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="loader-content">
          <motion.div 
            className="loader-text"
            variants={{
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 }
            }}
          >
            HH
          </motion.div>
          <motion.div 
            className="loader-subtitle"
            variants={{
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 }
            }}
          >
            Building Experience...
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <div className="portfolio">
        <motion.div
          className="progress-bar"
          style={{ scaleX }}
        />
        
        <motion.header 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero"
        >
          <div className="stars-container">
            <div className="stars">
              {[...Array(100)].map((_, i) => (
                <motion.div
                  key={i}
                  className="star"
                  style={{
                    width: Math.random() * 4 + 1 + 'px',
                    height: Math.random() * 4 + 1 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, Math.random() * 100 - 50],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.05 }}
            className="profile-image"
          >
            <div className="profile-image-inner">
              <span className="profile-initials">HH</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="main-title"
          >
            <span className="gradient-text">Hamim Hasan</span>
          </motion.h1>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="subtitle"
          >
            Full Stack Developer & Cloud Architect
          </motion.h2>

          <motion.nav
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="nav-container"
          >
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>

          <motion.div
            className="scroll-indicator"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="w-8 h-8 text-green-400" />
          </motion.div>
        </motion.header>

        <main className="main-content">
          {/* About Section */}
          <motion.section
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section"
          >
            <div className="section-inner">
              <h3 className="section-title gradient-text">About Me</h3>
              <div className="about-content">
                <p className="about-text">
                  A passionate full-stack developer with 5+ years of experience in building
                  scalable web applications and cloud solutions. I specialize in modern JavaScript
                  frameworks, cloud architecture, and emerging technologies like AI/ML integration.
                </p>
                <div className="about-stats">
                  <div className="stat-item">
                    <span className="stat-number gradient-text">5+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number gradient-text">50+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number gradient-text">20+</span>
                    <span className="stat-label">Happy Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            id="skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section"
          >
            <div className="section-inner">
              <h3 className="section-title gradient-text">Expertise</h3>
              <div className="skills-grid">
                {skillsData.map((category, idx) => (
                  <motion.div
                    key={idx}
                    className="skill-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="skill-icon-container">{category.icon}</div>
                    <h4 className="skill-title">{category.title}</h4>
                    <ul className="skill-list">
                      {category.skills.map((skill, i) => (
                        <li key={i} className="skill-item">
                          <Star className="star-icon" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            id="experience"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section"
          >
            <div className="section-inner">
              <h3 className="section-title gradient-text">Experience</h3>
              <div className="experience-container">
                {[
                  {
                    title: "Senior Full Stack Developer",
                    company: "Tech Innovators",
                    date: "2023 - Present",
                    points: [
                      "Led development of cloud-native applications using microservices architecture",
                      "Implemented CI/CD pipelines reducing deployment time by 60%",
                      "Mentored junior developers and conducted code reviews",
                      "Architected scalable solutions handling 1M+ daily users"
                    ]
                  },
                  {
                    title: "Full Stack Developer",
                    company: "Digital Solutions Inc",
                    date: "2021 - 2023",
                    points: [
                      "Developed and maintained multiple client projects using React and Node.js",
                      "Integrated AI/ML capabilities improving user experience by 40%",
                      "Implemented responsive designs and optimized performance",
                      "Collaborated with cross-functional teams in an Agile environment"
                    ]
                  }
                ].map((job, idx) => (
                  <motion.div
                    key={idx}
                    className="experience-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                  >
                    <h4 className="job-title">{job.title}</h4>
                    <h5 className="company-name">{job.company}</h5>
                    <p className="job-date">{job.date}</p>
                    <ul className="job-points">
                      {job.points.map((point, i) => (
                        <li key={i} className="job-point">
                          <Code className="point-icon" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section"
          >
            <div className="section-inner">
              <h3 className="section-title gradient-text">Featured Projects</h3>
              <div className="projects-grid">
                {projectsData.map((project, idx) => (
                  <motion.div
                    key={idx}
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="project-icon-container">{project.icon}</div>
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section"
          >
            <div className="section-inner">
              <h3 className="section-title gradient-text">Let's Connect</h3>
              <div className="contact-grid">
                {[
                  {
                    icon: <MailIcon className="contact-icon" />,
                    text: "iftyhamim@gmail.com",
                    href: "mailto:iftyhamim@gmail.com",
                    label: "Email me"
                  },
                  {
                    icon: <PhoneIcon className="contact-icon" />,
                    text: "+358413625113",
                    href: "tel:+358413625113",
                    label: "Call me"
                  },
                  {
                    icon: <GithubIcon className="contact-icon" />,
                    text: "GitHub Profile",
                    href: "https://github.com/yourusername",
                    label: "Check my code"
                  },
                  {
                    icon: <LinkedinIcon className="contact-icon" />,
                    text: "LinkedIn Profile",
                    href: "https://linkedin.com/in/yourusername",
                    label: "Connect with me"
                  }
                ].map((contact, idx) => (
                  <motion.a
                    key={idx}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(74, 222, 128, 0.1)"
                    }}
                  >
                    <span className="contact-icon-container">{contact.icon}</span>
                    <div className="contact-info">
                      <span className="contact-text">{contact.text}</span>
                      <span className="contact-label">{contact.label}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.section>
        </main>

        <motion.footer 
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="footer-content">
            <p className="footer-text">
              © {new Date().getFullYear()} Hamim Hasan. Crafted with passion and modern tech.
            </p>
            <motion.p 
              className="footer-subtitle"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Full Stack Developer | Cloud Architect | Technology Enthusiast
            </motion.p>
          </div>
        </motion.footer>

        {/* Theme Toggle Button */}
        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'dark' ? (
            <Sun className="theme-icon" />
          ) : (
            <Moon className="theme-icon" />
          )}
        </motion.button>
      </div>
    </AnimatePresence>
  );
};

export default App;