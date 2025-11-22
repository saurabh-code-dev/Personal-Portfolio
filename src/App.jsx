import React, { useState, useEffect } from 'react';

import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2, Terminal, ChevronRight } from 'lucide-react';

// Animated Code Window Component
const CodeWindow = ({ code, language = 'javascript' }) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < code.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(prev => prev + code[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, code]);

  return (
    <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700 transform hover:scale-105 transition-transform duration-300 w-full">
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-400 text-sm ml-2">{language}</span>
      </div>
      <div className="p-4 font-mono text-xs sm:text-sm overflow-x-auto break-words">
        <pre className="text-green-400">
          <code>{displayedCode}<span className="animate-pulse">|</span></code>
        </pre>
      </div>
    </div>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sampleCode = `const buildAmazingThings = () => {
  const skills = ['React.js','Next.js', 'Redux', 'JavaScript'];
  const passion = 'Frontend Developer';
  
  return skills.map(skill => ({
    technology: skill,
    level: 'Advanced',
    projects: '10+'
  }));
};

buildAmazingThings();`;

  const projects = [
    {
      title: 'Employee Operations Panel',
      tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS'],
      description: 'Admin Dashboard for managing employee records with CRUD operations, search filters, and sorting features.',
      highlights: ['localStorage persistence', 'Dynamic tables', 'Performance optimized']
    },
    {
      title: 'Progressive Multi-Step Form',
      tech: ['React.js', 'Redux Toolkit', 'JavaScript'],
      description: 'Step-based navigation with real-time validation and auto-save functionality.',
      highlights: ['State persistence', 'Modular architecture', 'Optimized rendering']
    },
    {
      title: 'Foodie-Hunter',
      tech: ['React.js', 'HTML', 'CSS', 'JavaScript'],
      description: 'Dynamic food ordering website with chatbot integration and responsive design.',
      highlights: ['Chatbot integration', 'Cross-device compatible', 'User-friendly UI']
    },
    {
      title: 'Crime Rate Predicition',
      tech: ['HTML', 'CSS', 'JavaScript', 'Flask', 'Python', 'Pandas','Scikit-learn','Matplotlib'],
      description: 'Predictive modeling and visualization identifying high-risk zones with actionable insights.',
      highlights: ['Predictive Analysis', 'Interactive Visualization', 'Data-Driven Insights']
    },
    {
      title: 'Employee Management System',
      tech: ['React.js','Redux Toolkit', 'Tailwind Css', 'JavaScript(ES6+)', 'Farmer-js'],
      description: 'Built a full-stack Employee Management System to automate HR operations, featuring role-based security, real-time dashboards, and seamless CRUD workflows.',
      highlights: ['Efficiency Improvement', 'Process Automation', 'Productivity Boost']
    }
  ];

  const skills = {
    'Languages': ['JavaScript (ES6+)', 'C/C++' , 'Python'],
    'Frontend': ['React.js','Next.js', 'Redux Toolkit', 'HTML5', 'CSS3'],
    'Tools': ['Git & GitHub', 'VS Code', 'Vercel', 'Render'],
    'Concepts': ['Data Structures & Algorithms', 'Database Management System', 'Operating Systems' , 'Computer Network']
  };

  const experience = [
    {
      role: 'Frontend Intern',
      company: 'Krafzen',
      period: 'Oct 2025',
      achievements: [
        'Built responsive, mobile-first interfaces using React.js',
        'Developed reusable components with React Hooks',
        'Implemented Redux Toolkit for state management',
        'Improved loading speed with code-splitting and lazy loading'
      ]
    },
    {
      role: 'Frontend Intern',
      company: 'Web Innovation',
      period: 'June 2024 - July 2024',
      achievements: [
        'Developed scalable React.js applications',
        'Built mobile-first responsive frontend',
        'Tested API endpoints using Postman',
        'Implemented state management and error handling'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white min-h-screen">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SR
            </div>
            <div className="hidden sm:flex gap-6">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition-colors duration-300"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
              
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 sm:pt-20 px-4 sm:px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <div className={`space-y-6 transform transition-all duration-1000 
            ${isVisible.home ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            
            <div className="text-purple-400 font-mono">Hello, I'm</div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r 
              from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Saurabh Singh Rathore
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300">
              Frontend Developer & Machine Learning Enthusiasts
            </h2>

            <p className="text-gray-400 text-base sm:text-lg">
              Crafting beautiful, responsive web experiences with React.js and modern JavaScript.
              Passionate about building scalable applications with clean, maintainable code.
            </p>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/saurabh-code-dev" target="_blank" 
                className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Github size={24} />
              </a>

              <a href="https://www.linkedin.com/in/saurabh023/" target="_blank"
                className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin size={24} />
              </a>

              <a href="mailto:saurabhthakur02310@gmail.com"
                className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* RIGHT (Code Animation) */}
          <div
            className={`transform transition-all duration-[1300ms] delay-300 ease-out-back
              ${isVisible.home
                ? 'translate-x-0 opacity-100 scale-100 rotate-0 drop-shadow-[0_0_15px_rgba(34,197,94,0.35)]'
                : 'translate-x-6 sm:translate-x-20 opacity-0 scale-90 rotate-1 drop-shadow-none'
              }`}>
            <CodeWindow code={sampleCode} />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className={`max-w-6xl w-full transform transition-all duration-1000 
          ${isVisible.about ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>

          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r 
            from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

            {/* Education */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border 
              border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">

              <h3 className="text-2xl font-bold mb-4 text-purple-400">Education</h3>

              <div className="space-y-2">
                <p className="text-xl font-semibold">B.Tech in Computer Science</p>
                <p className="text-gray-400">Shri Ram Murti Smarak College of Engineering</p>
                <p className="text-gray-400">Bareilly, UP</p>
                <p className="text-gray-400">Oct 2021 - July 2025</p>
              </div>

              <br />

              <div className="space-y-2">
                <p className="text-xl font-semibold">Intermediate</p>
                <p className="text-gray-400">Nalanda Public School</p>
                <p className="text-gray-400">Bareilly, UP</p>
                <p className="text-gray-400">2019 - 2021</p>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border 
              border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">

              <h3 className="text-2xl font-bold mb-4 text-purple-400">Experience</h3>

              {experience.map((exp, idx) => (
                <div key={idx} className="mb-6 last:mb-0">
                  <p className="text-lg font-semibold">{exp.role}</p>
                  <p className="text-gray-400">{exp.company}</p>
                  <p className="text-sm text-purple-400">{exp.period}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm">• {achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className={`max-w-6xl w-full transform transition-all duration-1000 
          ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r 
            from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={category}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border 
                  border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                  <Terminal size={20} />
                  {category}
                </h3>

                <ul className="space-y-2">
                  {items.map((skill, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <ChevronRight size={16} className="text-purple-400" />
                      {skill}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className={`max-w-6xl w-full transform transition-all duration-1000 
          ${isVisible.projects ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>

          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r 
            from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border 
                  border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="text-purple-400" size={24} />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                      <ChevronRight size={14} className="text-purple-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className={`max-w-4xl w-full transform transition-all duration-1000 
          ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r 
            from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="space-y-6">

                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all duration-300">
                  <Mail className="text-purple-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:saurabhthakur02310@gmail.com" className="text-lg hover:text-purple-400 transition-colors">
                      saurabhthakur02310@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-all duration-300">
                  <MapPin className="text-purple-400" size={24} />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-lg">Greater Noida, Uttar Pradesh</p>
                  </div>
                </div>

              </div>

              <div className="flex flex-col justify-center space-y-4">
                <p className="text-gray-300 text-lg">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="https://github.com/saurabhthakur02310" target="_blank"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-lg 
                      transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                    <Github size={20} />
                    GitHub
                  </a>

                  <a href="https://linkedin.com/in/saurabhthakur02310" target="_blank"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-lg 
                      transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/20 py-8 text-sm sm:text-base">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Saurabh Singh Rathore.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;
