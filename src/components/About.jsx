function About() {
  return (
    <div className="fade-in">
      <h2 className="section-title">About Me</h2>
      <p className="about-text" style={{ animationDelay: '0.1s' }}>
        I am a <strong className="gradient-text">Frontend Developer</strong> at <strong>PySquad Informatics</strong> with over 2 years of experience. I build responsive, scalable, and performance-driven web applications using modern Javascript ecosystems.
      </p>
      <p className="about-text" style={{ animationDelay: '0.15s' }}>
        My expertise lies in <strong>React.js, Next.js, and modern CSS frameworks</strong>. I thrive in collaborative environments, creating user-centric digital experiences, writing clean code, and ensuring pixel-perfect execution of designs.
      </p>

      <div className="stats-grid">
        <div className="stat-box fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="stat-icon"><i className="fas fa-calendar-alt"></i></div>
          <div className="stat-info">
            <h3>2+</h3>
            <p>Years Exp</p>
          </div>
        </div>
        <div className="stat-box fade-in" style={{ animationDelay: '0.25s' }}>
          <div className="stat-icon"><i className="fas fa-briefcase"></i></div>
          <div className="stat-info">
            <h3>10+</h3>
            <p>Projects</p>
          </div>
        </div>
        <div className="stat-box fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="stat-icon"><i className="fas fa-code"></i></div>
          <div className="stat-info">
            <h3>5+</h3>
            <p>Frameworks</p>
          </div>
        </div>
      </div>

      <div className="tech-stack-section fade-in" style={{ animationDelay: '0.4s' }}>
        <h3 className="tech-stack-heading">Tech Stack</h3>
        <div className="tech-stack-pills">
          {[
            'React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript',
            'HTML5 & CSS3', 'Tailwind CSS', 'Redux Toolkit', 'Bootstrap',
            'Ant Design', 'REST APIs', 'Git & GitHub', 'Framer Motion',
            'Vite', 'Responsive Design', 'Vercel'
          ].map((tech, index) => (
            <span key={index} className="tech-pill">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
