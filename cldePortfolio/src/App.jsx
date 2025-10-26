import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Database } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Built a portfolio to showcase projects and skills using reusable React components with responsive design and deployed on Netlify",
      tech: ["React.js", "Node.js", "CSS", "JavaScript"],
      link: "https://gtk-portfolio.netlify.app/"
    },
    {
      title: "Interactive Smoky Cursor App",
      description: "Created a desktop app with a toggle-enabled smoky cursor trail effect using CSS animations and JavaScript for real-time interactivity",
      tech: ["Electron.js", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/Gagan-341/Animated_cursor"
    },
    {
      title: "Skin Cancer Classification",
      description: "Built a CNN model on the HAM10000 dataset for cancer type classification with preprocessing, imbalance handling, and regularization to improve accuracy",
      tech: ["Python", "CNN", "Deep Learning", "TensorFlow"],
      link: "https://github.com/Gagan-341/Skin_cancer_classifier"
    },
    {
      title: "YouTube Video Popularity Prediction",
      description: "Developed a Random Forest regression model to predict YouTube video popularity using metadata, achieving improved prediction accuracy",
      tech: ["Python", "Linear Regression", "Random Forest"],
      link: "https://github.com/Gagan-341/YT_videos_popularity_prediction"
    }
  ];
  
  // const skills = [
  //   { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"], icon: Code },
  //   { name: "Backend", items: ["Node.js", "Express", "Python", "REST APIs"], icon: Database },
  //   { name: "Design", items: ["Figma", "UI/UX", "Responsive Design", "Animations"], icon: Palette },
  //   { name: "Tools", items: ["Git", "Docker", "AWS", "CI/CD"], icon: Zap }
  // ];
  const skills = [
    { name: "Languages & DB", items: ["C", "C++", "Python", "JavaScript", "HTML", "CSS", "MySQL", "MongoDB"], icon: Code },
    { name: "Frameworks & Libraries", items: ["React.js", "Electron.js", "NumPy", "Pandas", "Matplotlib", "scikit-learn", "TensorFlow", "Keras","NLP" ], icon: Database },
    { name: "Fundamentals", items: ["Data Structures & Algorithms", "OOP", "Machine Learning", "Deep Learning"], icon: Palette },
    { name: "Tools & Platforms", items: ["VS Code", "PyCharm", "Anaconda", "Jupyter Notebook", "Tableau", "Power BI"], icon: Zap }
  ];

  return (
    //<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
    //<div className="min-h-screen bg-slate-900 text-white">
    //<div className="min-h-screen bg-black text-white">
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${activeSection === item ? 'text-cyan-400' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize hover:text-cyan-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-6 animate-fade-in">
            <div className="w-56 h-56 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
              <img 
                src="/meimg2.jpg" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hi, I'm Gagan T kottary
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            AI & Web Development Enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Enthusiastic and motivated engineering student specializing in Artificial Intelligence and Web Development.
Passionate about solving complex problems with hands-on experience in React.js, Machine Learning, and Deep Learning.
Eager to apply technical knowledge to build real-world applications and continuously learn emerging technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
             
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((skill, i) => (
                      <li key={i} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <a 
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group cursor-pointer block"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            I’m eager to collaborate on exciting projects, learn from others, and contribute to meaningful work in AI and web development.
          </p>
          <div className="flex justify-center gap-6 mb-10">
            <a 
              href="mailto:gagantkottary@gmail.com"
              className="p-4 bg-slate-800/50 rounded-full hover:bg-cyan-400/20 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Gagan-341"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-full hover:bg-purple-400/20 border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/gagan-t-kottary-ag7x2pk9mb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 rounded-full hover:bg-cyan-400/20 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <p className="text-gray-300 mb-2">Email me at</p>
            <a 
              href="mailto:your.email@example.com"
              className="text-2xl font-bold text-cyan-400 hover:text-purple-400 transition-colors"
            >
              gagantkottary@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Gagan T kottary. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}