import { useState } from "react";
import "./App.css";
import profilePhoto from "./assets/shakib-profile.jpg";

const github = "https://github.com/m-i-shakib";
const linkedin = "https://www.linkedin.com/in/moinul-islam-shakib-7687201b9/";
const codeforces = "https://codeforces.com/profile/m_i_shakib__";

const posts = [
  {
    title: "Good Appetite Food Delivery App",
    subtitle: "AI-powered full-stack food ordering system",
    desc:
      "A practical project with React Native, Spring Boot, MySQL, Flask, weather context, admin workflow, and food recommendation ideas.",
    tag: "Full Stack",
    link: "https://github.com/m-i-shakib/good-appetite-food-delivery",
  },
  {
    title: "Khudha Lagse",
    subtitle: "Food delivery web project",
    desc:
      "A web app practice project for browsing food, handling order flow, and learning frontend-backend structure.",
    tag: "Web",
    link: "https://github.com/m-i-shakib/Khudha-Lagse",
  },
  {
    title: "Algorithm Visualizer",
    subtitle: "Learning algorithms by visual execution",
    desc:
      "A Java project built to understand algorithm steps and improve problem-solving knowledge through visual practice.",
    tag: "Java",
    link: "https://github.com/m-i-shakib/algorithm-visualizer",
  },
  {
    title: "AI Search Algorithms",
    subtitle: "BFS, DFS, UCS, Best First Search, and A* Search",
    desc:
      "Academic AI work focused on search techniques, path finding, and intelligent state exploration.",
    tag: "AI",
    link: "https://github.com/m-i-shakib/ai-search-algorithms",
  },
  {
    title: "Freelancer Web",
    subtitle: "Bangladeshi freelancer platform practice",
    desc:
      "A web platform idea with frontend and backend folders, focused on service posting and user workflow.",
    tag: "Python",
    link: "https://github.com/m-i-shakib/Freelancer-Web",
  },
  {
    title: "ATM Simulation",
    subtitle: "Java OOP console project",
    desc:
      "A Java console application for account operations, transaction flow, and object-oriented programming basics.",
    tag: "OOP",
    link: "https://github.com/m-i-shakib/ATMSimulation",
  },
];

const categories = [
  "React",
  "Java",
  "Python",
  "SQA",
  "AI",
  "Spring Boot",
  "MySQL",
  "Postman",
];

const popular = [
  ["GitHub Profile", "All source code and public repositories", github],
  ["LinkedIn Profile", "Professional profile and career details", linkedin],
  ["Codeforces Profile", "Problem-solving practice", codeforces],
  ["Good Appetite", "Main full-stack AI project", "https://github.com/m-i-shakib/good-appetite-food-delivery"],
  ["Algorithm Visualizer", "Java and algorithm practice", "https://github.com/m-i-shakib/algorithm-visualizer"],
];

const courses = [
  ["Manual Testing", "Test cases, bug reports, QA mindset"],
  ["API Testing", "Postman, request/response validation"],
  ["Automation Basics", "Selenium practice and scripts"],
];

function App() {
  const [dark, setDark] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [soundOff, setSoundOff] = useState(true);

  return (
    <main className={dark ? "page dark" : "page"}>
      <div className="bg-orb orb-a"></div>
      <div className="bg-orb orb-b"></div>
      <div className="bg-orb orb-c"></div>

      <header className="top-nav">
        <a href="#top" className="brand-mark">
          <span className="brand-face">
            <img src={profilePhoto} alt="Md Moinul Islam Shakib" />
          </span>
          <span className="brand-name">m_i_shakib_</span>
        </a>

        <nav className="main-nav">
          <a href="#categories">categories</a>
          <a href="#courses">courses</a>
          <a href="#goodies">goodies</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-illustration">
          <div className="photo-card">
            <img src={profilePhoto} alt="Md Moinul Islam Shakib" />
          </div>
          <span className="sticker sticker-one">React</span>
          <span className="sticker sticker-two">SQA</span>
          <span className="sticker sticker-three">Java</span>
        </div>

        <div className="hero-copy">
          <p className="kicker">Software Developer · SQA Learner</p>
          <h1>
            Friendly projects and notes for my software journey.
          </h1>
          <p>
            I’m Md Moinul Islam Shakib. I build academic, web, backend, AI,
            testing, and programming projects, then keep the best work here like
            a developer blog.
          </p>
        </div>
      </section>

      <section className="main-layout">
        <div className="feed-column">
          <div className="section-heading">
            <h2>Articles and Tutorials</h2>
          </div>

          <div className="post-feed">
            {posts.map((post) => (
              <article className="post" key={post.title}>
                <a href={post.link} target="_blank" rel="noreferrer">
                  <div className="post-top">
                    <span>{post.tag}</span>
                    <strong>Read more</strong>
                  </div>
                  <h3>{post.title}</h3>
                  <h4>{post.subtitle}</h4>
                  <p>{post.desc}</p>
                </a>
              </article>
            ))}
          </div>
        </div>

        <aside className="side-column">
          <section className="mini-panel" id="about">
            <img src={profilePhoto} alt="Md Moinul Islam Shakib" />
            <h2>Hi, I’m Shakib.</h2>
            <p>
              I focus on software development, SQA, AI projects, backend work,
              and competitive programming.
            </p>
          </section>

          <section className="mini-panel" id="popular">
            <h2>Popular Content</h2>
            <div className="popular-list">
              {popular.map((item, index) => (
                <a href={item[2]} target="_blank" rel="noreferrer" key={item[0]}>
                  <b>{index + 1}</b>
                  <span>
                    {item[0]}
                    <small>{item[1]}</small>
                  </span>
                </a>
              ))}
            </div>
          </section>
        </aside>
      </section>

      <section className="category-section" id="categories">
        <h2>Browse By Category</h2>
        <div>
          {categories.map((category) => (
            <a href="#top" key={category}>{category}</a>
          ))}
        </div>
      </section>

      <section className="course-section" id="courses">
        <h2>Interactive Courses</h2>
        <div className="course-grid">
          {courses.map((course) => (
            <article key={course[0]}>
              <span>✦</span>
              <h3>{course[0]}</h3>
              <p>{course[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter" id="goodies">
        <div>
          <h2>Want to review my work?</h2>
          <p>Open my GitHub, LinkedIn, or Codeforces profile.</p>
        </div>

        <div className="newsletter-links">
          <a href={github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={codeforces} target="_blank" rel="noreferrer">Codeforces</a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>m_i_shakib_</strong>
          <p>Developer portfolio and project notes.</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href={github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={codeforces} target="_blank" rel="noreferrer">RSS / Codeforces</a>
        </div>
      </footer>

      <div className="utility-bar">
        <button type="button" onClick={() => setSearchOpen(true)}>Search</button>
        <button type="button" onClick={() => setSoundOff((value) => !value)}>
          {soundOff ? "Enable sounds" : "Disable sounds"}
        </button>
        <button type="button" onClick={() => setDark((value) => !value)}>
          {dark ? "Activate light mode" : "Activate dark mode"}
        </button>
        <a href={codeforces} target="_blank" rel="noreferrer">RSS Feed</a>
      </div>

      {searchOpen && (
        <div className="search-backdrop">
          <div className="search-panel">
            <button type="button" onClick={() => setSearchOpen(false)}>×</button>
            <h2>Search</h2>
            <input autoFocus placeholder="Search React, Java, SQA, AI..." />
            <div>
              {categories.map((category) => <span key={category}>{category}</span>)}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
