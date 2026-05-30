import "./App.css";

const featuredProjects = [
  {
    name: "Good Appetite Food Delivery App",
    type: "AI Full-Stack",
    description:
      "A full-stack AI-based food delivery application with customer ordering, restaurant owner management, admin approval, and smart food recommendation features.",
    tech: ["React Native", "Spring Boot", "MySQL", "Flask", "Machine Learning"],
    github: "https://github.com/m-i-shakib/good-appetite-food-delivery",
  },
  {
    name: "Khudha Lagse",
    type: "Food Delivery Web",
    description:
      "A food delivery web project with frontend and backend structure. It focuses on food browsing, order workflow, and restaurant-based service management.",
    tech: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot"],
    github: "https://github.com/m-i-shakib/Khudha-Lagse",
  },
  {
    name: "Algorithm Visualizer",
    type: "Java + Algorithms",
    description:
      "A Java-based algorithm visualization project built to understand algorithm execution steps and improve problem-solving knowledge.",
    tech: ["Java", "CSS", "Algorithms"],
    github: "https://github.com/m-i-shakib/algorithm-visualizer",
  },
  {
    name: "Freelancer Web",
    type: "Web Platform",
    description:
      "A Bangladeshi freelancer platform practice project with frontend and backend folders, focused on service posting and web application structure.",
    tech: ["Python", "JavaScript", "HTML"],
    github: "https://github.com/m-i-shakib/Freelancer-Web",
  },
  {
    name: "AI Search Algorithms",
    type: "Artificial Intelligence",
    description:
      "Academic AI project covering search algorithms including BFS, DFS, UCS, Best First Search, and A* Search with practical implementation.",
    tech: ["Python", "Artificial Intelligence", "Search Algorithms"],
    github: "https://github.com/m-i-shakib/ai-search-algorithms",
  },
  {
    name: "ATM Simulation",
    type: "Java OOP",
    description:
      "A Java console-based ATM simulation project showing account operations, transaction flow, and object-oriented programming practice.",
    tech: ["Java", "OOP"],
    github: "https://github.com/m-i-shakib/ATMSimulation",
  },
];

const otherProjects = [
  { name: "Calculator", github: "https://github.com/m-i-shakib/Calculator" },
  { name: "Basic AI", github: "https://github.com/m-i-shakib/basic-ai" },
  { name: "Python All", github: "https://github.com/m-i-shakib/python-all" },
  { name: "C Plus", github: "https://github.com/m-i-shakib/c-plus" },
  { name: "C Code", github: "https://github.com/m-i-shakib/c-code" },
  { name: "Networking", github: "https://github.com/m-i-shakib/networking" },
  {
    name: "Cisco Packet Tracer Labs",
    github: "https://github.com/m-i-shakib/cisco-packet-tracer-labs",
  },
  { name: "Voting System", github: "https://github.com/m-i-shakib/Voting_System" },
  { name: "Latex", github: "https://github.com/m-i-shakib/Latex" },
  { name: "Goku", github: "https://github.com/m-i-shakib/goku" },
];

const skills = [
  "Java",
  "Python",
  "C",
  "C++",
  "JavaScript",
  "React",
  "React Native",
  "Spring Boot",
  "MySQL",
  "Flask",
  "Machine Learning",
  "GitHub",
  "Postman",
  "Selenium",
  "Manual Testing",
  "API Testing",
];

const stats = [
  { value: "19+", label: "GitHub Repositories" },
  { value: "6+", label: "Featured Projects" },
  { value: "10+", label: "Core Technologies" },
  { value: "SQA", label: "Testing Focus" },
];

const services = [
  {
    title: "Full-Stack Development",
    text: "Frontend, backend, database, API integration, and project deployment practice.",
  },
  {
    title: "Software Testing",
    text: "Manual testing, API testing with Postman, Selenium automation basics, and bug reporting.",
  },
  {
    title: "AI & Academic Projects",
    text: "Search algorithms, machine learning practice, and research-focused project work.",
  },
];

function App() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-grid"></div>
        <div className="hero-glass hero-glass-one"></div>
        <div className="hero-glass hero-glass-two"></div>

        <nav className="navbar">
          <a className="brand" href="#home" aria-label="Go to home">
            <span className="brand-mark">S</span>
            <span>Shakib</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-layout">
          <div className="hero-copy">
            <div className="status-pill">
              <span className="live-dot"></span>
              Portfolio Live · Open to Software & SQA Opportunities
            </div>

            <p className="eyebrow">CSE Student · Software Developer · SQA Learner</p>

            <h1>
              Md Moinul Islam <span>Shakib</span>
            </h1>

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

            <div className="stats-row">
              {stats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Animated coding interface">
            <div className="orbit orbit-one">
              <span>React</span>
            </div>
            <div className="orbit orbit-two">
              <span>Java</span>
            </div>
            <div className="orbit orbit-three">
              <span>ML</span>
            </div>

            <div className="terminal-card">
              <div className="terminal-top">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <p>shakib.dev / portfolio.jsx</p>
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
                  <span className="code-prop">stack</span>: [
                  <span className="code-string">"React"</span>,{" "}
                  <span className="code-string">"Spring Boot"</span>,{" "}
                  <span className="code-string">"Python"</span>],
                </p>
                <p className="code-indent">
                  <span className="code-prop">testing</span>:{" "}
                  <span className="code-string">"SQA + API Testing"</span>
                </p>
                <p>{"};"}</p>

                <p className="typing-line">deploy("portfolio")</p>

                <div className="dashboard-card">
                  <div className="dashboard-row">
                    <span>Build</span>
                    <strong>92%</strong>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill fill-one"></div>
                  </div>

                  <div className="dashboard-row">
                    <span>Testing</span>
                    <strong>88%</strong>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill fill-two"></div>
                  </div>

                  <div className="mini-terminal">
                    <span>$</span> npm run dev
                    <em>Ready in 673ms</em>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card card-one">
              <strong>API</strong>
              <span>Postman · REST</span>
            </div>
            <div className="floating-card card-two">
              <strong>Backend</strong>
              <span>Spring Boot</span>
            </div>
            <div className="floating-card card-three">
              <strong>AI</strong>
              <span>Python · ML</span>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#about" aria-label="Scroll to about">
          <span></span>
        </a>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-heading">
          <p>About</p>
          <h2>Building skills through real projects, not just theory.</h2>
        </div>

        <div className="about-grid">
          <p>
            I am a Computer Science student interested in software development,
            backend development, mobile app development, machine learning, and
            software quality assurance. I like learning by building real projects,
            fixing problems, and improving features step by step.
          </p>

          <div className="service-grid">
            {services.map((item) => (
              <article className="service-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills section-shell" id="skills">
        <div className="section-heading">
          <p>Skills</p>
          <h2>My current technical stack.</h2>
        </div>

        <div className="skill-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="projects section-shell" id="projects">
        <div className="section-heading">
          <p>Projects</p>
          <h2>Featured work from my GitHub.</h2>
        </div>

        <p className="section-note">
          These are my strongest projects, showing full-stack development,
          backend work, AI practice, Java programming, and software engineering
          concepts.
        </p>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-top">
                <span>{project.type}</span>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="other-projects section-shell">
        <div className="section-heading">
          <p>Repository List</p>
          <h2>Other GitHub Projects</h2>
        </div>

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

      <section className="contact section-shell" id="contact">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Want to see my code or connect with me?</h2>
            <p>
              You can view my GitHub projects and professional profile using
              the links below.
            </p>
          </div>

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
        </div>
      </section>
    </main>
  );
}

export default App;
