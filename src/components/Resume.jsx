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
              <h4 className="timeline-title">Frontend Developer</h4>
              <div className="timeline-company">PySquad Informatics</div>
              <ul className="timeline-desc">
                <li>Developed responsive and scalable web applications using React.js, Next.js, HTML, CSS, Tailwind CSS.</li>
                <li>Integrated REST APIs and optimized frontend performance.</li>
                <li>Focused on building user-centric interfaces.</li>
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
