function About() {
  return (
    <div className="fade-in">
      <h2 className="section-title">About Me</h2>
      <p className="about-text" style={{ animationDelay: "0.1s" }}>
        I am a <strong className="gradient-text">Mern Stack Developer</strong>{" "}
        at <strong>PySquad Informatics</strong> with over 3 years of experience.
        I develop scalable, secure, and high-performance full-stack web
        applications using{" "}
        <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
      </p>
      <p className="about-text" style={{ animationDelay: "0.15s" }}>
        My expertise lies in{" "}
        <strong>MongoDB, Express.js, React.js, and Node.js (MERN Stack)</strong>
        . I build scalable full-stack applications, develop REST APIs, integrate
        databases, and deliver responsive, high-performance user experiences
        with clean and maintainable code.
      </p>

      <div className="stats-grid">
        <div className="stat-box fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="stat-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div className="stat-info">
            <h3>3+</h3>
            <p>Years Exp</p>
          </div>
        </div>
        <div className="stat-box fade-in" style={{ animationDelay: "0.25s" }}>
          <div className="stat-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="stat-info">
            <h3>10+</h3>
            <p>Projects</p>
          </div>
        </div>
        <div className="stat-box fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="stat-icon">
            <i className="fas fa-code"></i>
          </div>
          <div className="stat-info">
            <h3>5+</h3>
            <p>Frameworks</p>
          </div>
        </div>
      </div>

      <div
        className="tech-stack-section fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <h3 className="tech-stack-heading">Tech Stack</h3>
        <div className="tech-stack-pills">
          {[
            "MongoDB",
            "Express.js",
            "React.js",
            "Next.js",
            "Node.js",
            "JavaScript (ES6+)",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap",
            "Redux Toolkit",

            "Ant Design",
            "Material UI",
            "REST APIs",
            "JWT Authentication",
            "Mongoose",
            "Axios",
            "Git",
            "GitHub",
            "Postman",

            "Framer Motion",
            "Responsive Design",
          ].map((tech, index) => (
            <span key={index} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
