import "./App.css";
import BinaryBackground from "./BinaryBackground";

const featuredProjects = [
  {
    name: "Good Appetite Food Delivery App",
    category: "AI Full-Stack",
    description:
      "A full-stack AI-based food delivery app with customer ordering, restaurant management, admin approval, weather context, and smart food recommendations.",
    tech: ["React Native", "Spring Boot", "MySQL", "Flask", "Machine Learning"],
    github: "https://github.com/m-i-shakib/good-appetite-food-delivery",
  },
  {
    name: "Khudha Lagse",
    category: "Food Delivery Web",
    description:
      "Food delivery web project with frontend and backend workflow for browsing food, managing orders, and practicing restaurant service management.",
    tech: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot"],
    github: "https://github.com/m-i-shakib/Khudha-Lagse",
  },
  {
    name: "Algorithm Visualizer",
    category: "Java + Algorithms",
    description:
      "A Java-based algorithm visualization project built to understand algorithm execution steps and improve problem-solving knowledge.",
    tech: ["Java", "CSS", "Algorithms"],
    github: "https://github.com/m-i-shakib/algorithm-visualizer",
  },
  {
    name: "Freelancer Web",
    category: "Web Platform",
    description:
      "A Bangladeshi freelancer platform practice project with frontend and backend folders, focused on service posting and web application structure.",
    tech: ["Python", "JavaScript", "HTML"],
    github: "https://github.com/m-i-shakib/Freelancer-Web",
  },
  {
    name: "AI Search Algorithms",
    category: "Artificial Intelligence",
    description:
      "Academic AI project covering BFS, DFS, UCS, Best First Search, and A* Search with practical implementation.",
    tech: ["Python", "AI", "Search Algorithms"],
    github: "https://github.com/m-i-shakib/ai-search-algorithms",
  },
  {
    name: "ATM Simulation",
    category: "Java OOP",
    description:
      "Java console-based ATM simulation project showing account operations, transaction flow, and object-oriented programming practice.",
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

const expertise = [
  {
    title: "Software Development",
    text:
      "Build web, mobile, and backend projects using React, React Native, Java, Spring Boot, Python, Flask, and MySQL.",
    icon: "01",
  },
  {
    title: "SQA & Testing",
    text:
      "Practice manual testing, API testing with Postman, Selenium basics, test case design, bug reporting, and software quality workflow.",
    icon: "02",
  },
  {
    title: "AI & Academic Projects",
    text:
      "Work with AI search algorithms, machine learning concepts, research-oriented projects, and practical academic implementation.",
    icon: "03",
  },
];

const process = [
  {
    step: "Step 1",
    title: "Explore My Skills",
    text: "Check my stack, tools, and software testing focus.",
  },
  {
    step: "Step 2",
    title: "Review Projects",
    text: "Open featured projects and inspect the GitHub repositories.",
  },
  {
    step: "Step 3",
    title: "See My Practice Areas",
    text: "Review backend, AI, algorithm, networking, and SQA-related work.",
  },
  {
    step: "Step 4",
    title: "Connect",
    text: "Use GitHub or LinkedIn to view more details or contact me.",
  },
];

const stats = [
  { number: "19+", label: "GitHub Repositories" },
  { number: "6+", label: "Featured Projects" },
  { number: "15+", label: "Technical Skills" },
  { number: "SQA", label: "Career Focus" },
];

function App() {
  return (
    <>
      <BinaryBackground />

      <main className="site-content">
        <header className="site-header">
          <a href="#home" className="logo">
            <span>MS</span>
            <div>
              <strong>Shakib</strong>
              <small>Design Your Career with Code</small>
            </div>
          </a>

          <nav className="nav-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="header-cta">
            Contact Me
          </a>
        </header>

        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-kicker">Your Software & SQA Portfolio Gateway</p>

            <h1>Build. Test. Improve. Grow with real projects.</h1>

            <p className="hero-text">
              I am Md Moinul Islam Shakib, a CSE student focused on software
              development, backend engineering, AI projects, and software quality
              assurance. This portfolio shows my project work, technical skills,
              and career preparation.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                View My Projects
              </a>
              <a
                href="https://github.com/m-i-shakib"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                Find My GitHub
              </a>
            </div>

            <div className="hero-feature-grid">
              <article>
                <span>01</span>
                <h3>Full-Stack Projects</h3>
                <p>Frontend, backend, database, API, and deployment practice.</p>
              </article>
              <article>
                <span>02</span>
                <h3>AI-Powered Work</h3>
                <p>Machine learning, AI search algorithms, and academic AI projects.</p>
              </article>
              <article>
                <span>03</span>
                <h3>SQA Career Focus</h3>
                <p>Manual testing, API testing, Selenium basics, and bug reports.</p>
              </article>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="panel-top">
              <span className="panel-dot"></span>
              <p>Portfolio Status</p>
            </div>

            <h2>Live Developer Profile</h2>

            <div className="panel-code">
              <p>
                <span>const</span> candidate = {"{"}
              </p>
              <p> name: "Shakib",</p>
              <p> focus: "Software + SQA",</p>
              <p> stack: ["Java", "Python", "React"],</p>
              <p>{"};"}</p>
            </div>

            <div className="panel-progress">
              <div>
                <p>Project Readiness</p>
                <strong>92%</strong>
              </div>
              <span>
                <i></i>
              </span>
            </div>

            <div className="panel-progress">
              <div>
                <p>SQA Preparation</p>
                <strong>88%</strong>
              </div>
              <span>
                <i className="short"></i>
              </span>
            </div>
          </aside>
        </section>

        <section className="stats-band">
          {stats.map((item) => (
            <article key={item.label}>
              <strong>{item.number}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="about section-block" id="about">
          <div className="section-title">
            <p>About Me</p>
            <h2>Explore my learning journey and technical direction.</h2>
          </div>

          <div className="about-layout">
            <div className="about-card">
              <h3>Who I am</h3>
              <p>
                I am a Computer Science student focused on software development,
                backend development, mobile app development, machine learning,
                and software quality assurance. I learn by building real
                projects, fixing problems, and improving features step by step.
              </p>
              <a href="#contact">View Contact Details</a>
            </div>

            <div className="image-stack">
              <div className="image-card card-a">
                <h3>Academic Projects</h3>
                <p>AI, algorithms, Java, networking, and research work.</p>
              </div>
              <div className="image-card card-b">
                <h3>Career Preparation</h3>
                <p>SQA tools, testing workflow, GitHub portfolio, and CV-ready skills.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="expertise section-block" id="expertise">
          <div className="section-title centered">
            <p>Expertise & Services</p>
            <h2>What I am building my career around.</h2>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <article key={item.title} className="expertise-card">
                <span>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#projects">Learn More</a>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-block" id="projects">
          <div className="section-title centered">
            <p>Featured Work</p>
            <h2>Projects that show my practical skills.</h2>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-category">{project.category}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a href={project.github} target="_blank" rel="noreferrer">
                  Open GitHub
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="process section-block">
          <div className="section-title centered">
            <p>How It Works</p>
            <h2>How to review my portfolio.</h2>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="other-projects section-block">
          <div className="section-title centered">
            <p>Repository List</p>
            <h2>Other GitHub Projects</h2>
          </div>

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

        <section className="contact section-block" id="contact">
          <div className="contact-banner">
            <div>
              <p>Ready to view my work?</p>
              <h2>Explore my GitHub projects and professional profile.</h2>
            </div>

            <div className="contact-actions">
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

        <footer className="footer">
          <div>
            <h3>Shakib</h3>
            <p>Design Your Career with Code</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#expertise">Expertise</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
