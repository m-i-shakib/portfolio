import "./App.css";

const featuredProjects = [
  {
    name: "Good Appetite Food Delivery App",
    description:
      "A full-stack AI-based food delivery application with customer ordering, restaurant owner management, admin approval, and smart food recommendation features.",
    tech: ["React Native", "Spring Boot", "MySQL", "Flask", "Machine Learning"],
    github: "https://github.com/m-i-shakib/good-appetite-food-delivery",
  },
  {
    name: "Khudha Lagse",
    description:
      "A food delivery web project with frontend and backend structure. It focuses on food browsing, order workflow, and restaurant-based service management.",
    tech: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot"],
    github: "https://github.com/m-i-shakib/Khudha-Lagse",
  },
  {
    name: "Algorithm Visualizer",
    description:
      "A Java-based algorithm visualization project built to understand algorithm execution steps and improve problem-solving knowledge.",
    tech: ["Java", "CSS", "Algorithms"],
    github: "https://github.com/m-i-shakib/algorithm-visualizer",
  },
  {
    name: "Freelancer Web",
    description:
      "A Bangladeshi freelancer platform practice project with frontend and backend folders, focused on service posting and web application structure.",
    tech: ["Python", "JavaScript", "HTML"],
    github: "https://github.com/m-i-shakib/Freelancer-Web",
  },
  {
    name: "AI Search Algorithms",
    description:
      "Academic AI project covering search algorithms including BFS, DFS, UCS, Best First Search, and A* Search with practical implementation.",
    tech: ["Python", "Artificial Intelligence", "Search Algorithms"],
    github: "https://github.com/m-i-shakib/ai-search-algorithms",
  },
  {
    name: "ATM Simulation",
    description:
      "A Java console-based ATM simulation project showing account operations, transaction flow, and object-oriented programming practice.",
    tech: ["Java", "OOP"],
    github: "https://github.com/m-i-shakib/ATMSimulation",
  },
];

const otherProjects = [
  {
    name: "Calculator",
    github: "https://github.com/m-i-shakib/Calculator",
  },
  {
    name: "Basic AI",
    github: "https://github.com/m-i-shakib/basic-ai",
  },
  {
    name: "Python All",
    github: "https://github.com/m-i-shakib/python-all",
  },
  {
    name: "C Plus",
    github: "https://github.com/m-i-shakib/c-plus",
  },
  {
    name: "C Code",
    github: "https://github.com/m-i-shakib/c-code",
  },
  {
    name: "Networking",
    github: "https://github.com/m-i-shakib/networking",
  },
  {
    name: "Cisco Packet Tracer Labs",
    github: "https://github.com/m-i-shakib/cisco-packet-tracer-labs",
  },
  {
    name: "Voting System",
    github: "https://github.com/m-i-shakib/Voting_System",
  },
  {
    name: "Latex",
    github: "https://github.com/m-i-shakib/Latex",
  },
  {
    name: "Goku",
    github: "https://github.com/m-i-shakib/goku",
  },
];

function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay"></div>

        <nav>
          <h2>Shakib</h2>

          <div>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-layout">
          <div className="hero-text">
            <p className="tag">CSE Student · Software Developer · SQA Learner</p>

            <h1>Md Moinul Islam Shakib</h1>

            <p className="intro">
              I build practical software projects using Java, Python, React,
              React Native, Spring Boot, MySQL, Flask, and Machine Learning.
              This portfolio presents my academic, backend, AI, web, and
              programming projects.
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

          <div className="hero-visual">
            <div className="glow glow-one"></div>
            <div className="glow glow-two"></div>

            <div className="floating-badge badge-one">&lt;/&gt; Code</div>
            <div className="floating-badge badge-two">Spring Boot</div>
            <div className="floating-badge badge-three">React</div>
            <div className="floating-badge badge-four">ML</div>

            <div className="terminal-card">
              <div className="terminal-top">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <p>portfolio.jsx</p>
              </div>

              <div className="terminal-body">
                <p>
                  <span className="code-key">const</span>{" "}
                  <span className="code-var">developer</span> = {"{"}
                </p>
                <p className="code-indent">
                  <span className="code-prop">name</span>:{" "}
                  <span className="code-string">"Shakib"</span>,
                </p>
                <p className="code-indent">
                  <span className="code-prop">role</span>:{" "}
                  <span className="code-string">"Software Developer"</span>,
                </p>
                <p className="code-indent">
                  <span className="code-prop">focus</span>: [
                  <span className="code-string">"Java"</span>,{" "}
                  <span className="code-string">"Python"</span>,{" "}
                  <span className="code-string">"React"</span>]
                </p>
                <p>{"}"}</p>

                <p className="typing-line">deploy("portfolio")</p>

                <div className="status-box">
                  <div className="status-row">
                    <span>Build Progress</span>
                    <span>92%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill fill-one"></div>
                  </div>

                  <div className="status-row">
                    <span>Testing</span>
                    <span>88%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill fill-two"></div>
                  </div>

                  <div className="status-row">
                    <span>Deployment</span>
                    <span>Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>

        <p>
          I am a Computer Science student interested in software development,
          backend development, mobile app development, machine learning, and
          software quality assurance. I like learning by building real projects,
          fixing problems, and improving features step by step.
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
          <span>Machine Learning</span>
          <span>GitHub</span>
          <span>Postman</span>
          <span>Selenium</span>
          <span>Manual Testing</span>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>Featured Projects</h2>

        <p className="section-note">
          These are my strongest projects, showing full-stack development,
          backend work, AI practice, Java programming, and software engineering
          concepts.
        </p>

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

      <section className="other-projects">
        <h2>Other GitHub Projects</h2>

        <p className="section-note">
          More practice projects covering programming, AI, networking, LaTeX,
          and academic work.
        </p>

        <div className="other-list">
          {otherProjects.map((project) => (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              key={project.name}
            >
              {project.name}
            </a>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact</h2>

        <p>You can view my code and professional profile using the links below.</p>

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