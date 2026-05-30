import "./App.css";

const featuredProjects = [
  {
    name: "Good Appetite Food Delivery App",
    description:
      "AI-based food delivery application with customer ordering, restaurant management, admin approval, and food recommendation features.",
    tech: ["React Native", "Spring Boot", "MySQL", "Flask", "Machine Learning"],
    github: "https://github.com/m-i-shakib/good-appetite-food-delivery",
  },
  {
    name: "Khudha Lagse",
    description:
      "Food delivery project with frontend and backend structure for browsing food, managing orders, and restaurant workflow.",
    tech: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot"],
    github: "https://github.com/m-i-shakib/Khudha-Lagse",
  },
  {
    name: "Algorithm Visualizer",
    description:
      "Java-based project for visualizing algorithms and improving algorithm learning.",
    tech: ["Java", "CSS"],
    github: "https://github.com/m-i-shakib/algorithm-visualizer",
  },
  {
    name: "Freelancer Web",
    description:
      "A Bangladeshi freelancer web project with frontend and backend folders for service-based platform practice.",
    tech: ["Python", "JavaScript", "HTML"],
    github: "https://github.com/m-i-shakib/Freelancer-Web",
  },
  {
    name: "AI Search Algorithms",
    description:
      "Academic AI project covering BFS, DFS, UCS, Best First Search, and A* Search.",
    tech: ["Python", "Artificial Intelligence"],
    github: "https://github.com/m-i-shakib/ai-search-algorithms",
  },
  {
    name: "ATM Simulation",
    description:
      "Java console-based ATM simulation project showing banking operations and OOP practice.",
    tech: ["Java", "OOP"],
    github: "https://github.com/m-i-shakib/ATMSimulation",
  },
];

function App() {
  return (
    <main>
      <section className="hero">
        <nav>
          <h2>Shakib</h2>
          <div>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="tag">CSE Student · Software Developer · SQA Learner</p>
          <h1>Md Moinul Islam Shakib</h1>
          <p className="intro">
            I build software projects using Java, Python, React, Spring Boot,
            MySQL, and Machine Learning. This portfolio shows my academic,
            web, backend, AI, and programming projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>
            <a
              href="https://github.com/m-i-shakib"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I am a Computer Science student focused on software development,
          backend development, mobile app development, machine learning, and
          software testing. I enjoy building real projects and improving them
          step by step.
        </p>
      </section>

      <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skill-list">
          <span>Java</span>
          <span>Python</span>
          <span>C</span>
          <span>C++</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>React Native</span>
          <span>Spring Boot</span>
          <span>MySQL</span>
          <span>Flask</span>
          <span>GitHub</span>
          <span>SQA</span>
          <span>Postman</span>
          <span>Selenium</span>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <div className="project-card" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a href={project.github} target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Want to see my code or connect with me?</p>

        <div className="contact-links">
          <a
            href="https://github.com/m-i-shakib"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/moinul-islam-shakib-7687201b9/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;