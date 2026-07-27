function Resume() {
  return (
    <div className="fade-in">
      <h2 className="section-title">Resume</h2>

      <div style={{ display: 'grid', gap: '2rem', marginTop: '1rem' }}>
        <div className="fade-in" style={{ animationDelay: '0.1s' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-briefcase" style={{ color: 'var(--primary-color)' }}></i> Experience
          </h3>
         <div className="timeline-wrapper">
  <div className="timeline-item">
    <div className="timeline-date">Sep 2023 - Present</div>
    <h4 className="timeline-title">MERN Stack Developer</h4>
    <div className="timeline-company">PySquad Informatics</div>
    <ul className="timeline-desc">
      <li>Developed full-stack web applications using MongoDB, Express.js, React.js, Next.js, and Node.js.</li>
      <li>Designed and integrated secure REST APIs with Express.js and Node.js.</li>
      <li>Managed MongoDB databases using Mongoose for efficient data storage and retrieval.</li>
      <li>Built responsive and user-friendly interfaces using React.js, Next.js, Tailwind CSS, Bootstrap, and Ant Design.</li>
      <li>Implemented JWT authentication, authorization, and role-based access control.</li>
      <li>Optimized application performance through lazy loading, code splitting, and API optimization.</li>
      <li>Collaborated with cross-functional teams using Git and GitHub in an Agile development environment.</li>
    </ul>
  </div>

            <div className="timeline-item">
              <div className="timeline-date">Jan 2023 - Jun 2023</div>
              <h4 className="timeline-title">Frontend Developer Intern</h4>
              <div className="timeline-company">Tops Technologies</div>
              <ul className="timeline-desc">
                <li>Learned and applied core web technologies: HTML, CSS, JavaScript (ES6+), and React.js.</li>
                <li>Built responsive web pages and mini-projects using modern UI practices.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="fade-in" style={{ animationDelay: '0.2s', marginTop: '1rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-graduation-cap" style={{ color: 'var(--primary-color)' }}></i> Education
          </h3>
          <div className="timeline-wrapper">
            <div className="timeline-item">
              <div className="timeline-date">2018 - 2022</div>
              <h4 className="timeline-title">Bachelor of Computer Applications</h4>
              <div className="timeline-company">Hemchandracharya North Gujarat University</div>
              <ul className="timeline-desc">
                <li>CGPA: 7.67 / 10</li>
                <li>Studied HTML, CSS, JavaScript, OOP, Operating Systems.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
