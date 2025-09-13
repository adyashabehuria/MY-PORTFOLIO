import React, { useEffect, useState } from "react";
import './App.css';

const projects = [
  { title: "Portfolio Website", desc: "Responsive personal portfolio using React & modern CSS." },
  { title: "AI Chatbot", desc: "Interactive AI chatbot integrating OpenAI API for learning." },
  { title: "E-commerce App", desc: "Full-stack e-commerce platform with cart & payment integration." },
  { title: "Smart Wallet | SmartFund", desc: "AI-powered financial assistant for women with Crisis Shield.", highlight: true },
  { title: "Library Management System", desc: "Manage books, users, and transactions efficiently in a library environment." }
];

const skills = [
  { name: "DSA", desc: "Data Structures & Algorithms concepts, problem-solving skills, preparing for coding interviews." },
  { name: "Cybersecurity", desc: "Basics of network security, ethical hacking, and security best practices." },
  { name: "AI & ML", desc: "Learning AI concepts, model development, and integration in projects like chatbots and fintech apps." },
  { name: "Web Development", desc: "HTML, CSS, JavaScript, React; building interactive and responsive web interfaces." }
];

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Scroll reveal
    const revealElements = document.querySelectorAll('.project-card, .skill-card');
    
    // Trigger reveal on load for all cards
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealOnScroll = () => {
      revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) el.classList.add('reveal');
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Navbar */}
      <nav>
        <h1>Adyasha Behuria</h1>
        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('footer')}>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        {windowWidth > 768 && [...Array(6)].map((_, i) => (
          <div key={i} className="particle" style={{
            width: `${10 + Math.random()*15}px`,
            height: `${10 + Math.random()*15}px`,
            top: `${Math.random()*80}%`,
            left: `${Math.random()*90}%`,
            animationDuration: `${15 + Math.random()*10}s`,
            animationDelay: `${Math.random()*5}s`
          }} />
        ))}
        <h2>Hi, I'm Adyasha</h2>
        <p>
          I’m learning to create functional web experiences,
          exploring front-end development, AI integration, fintech solutions, and cybersecurity.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollToSection('projects')}>View My Work</button>
          <button className="btn-linkedin" onClick={() => window.open("https://www.linkedin.com/in/adyasha-behuria-95a049345/", "_blank")}>
            LinkedIn Profile
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h3>Projects</h3>
        <div className="project-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className={`project-card ${proj.highlight ? 'highlight' : ''}`}>
              <h4>{proj.title}</h4>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="projects" id="skills">
        <h3>Skills & Learning</h3>
        <div className="project-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-card project-card">
              <h4>{skill.name}</h4>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="footer">
        <p>Contact me: <a href="mailto:adyabehuria@gmail.com" className="email-link">adyabehuria@gmail.com</a></p>
        &copy; 2025 Adyasha Behuria
      </footer>
    </div>
  );
};

export default App;
