import marinapyImg from '../image/marinapy_project_card.svg';
import sharelyzeImg from '../image/sharelyze_project_card.svg';
import textureImg from '../image/texture_project_card.svg';

function Portfolio() {
  return (
    <div className="fade-in">
      <h2 className="section-title">Portfolio</h2>

      <div className="projects-grid" style={{ marginTop: '1rem' }}>

        <div className="project-card fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="project-img">
            <span className="project-tag">SaaS Platform</span>
            <img src={marinapyImg} alt="Marinapy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="project-content">
            <h3>Marinapy – Marina Management</h3>
            <p>Developed a cloud-based SaaS platform for end-to-end operations including berth management, CRM, and billing. Built responsive, map-based data visualization for real-time asset monitoring and implemented self-service onboarding flows.</p>
            <div className="tech-stack">
              <span className="tech-badge">React.js</span>
              <span className="tech-badge">Next.js</span>
              <span className="tech-badge">Ant Design</span>
              <span className="tech-badge">Tailwind CSS</span>
              <span className="tech-badge">REST APIs</span>
            </div>
            <div className="project-links">
              <a href="https://marinapy.com/" className="live-link" target="_blank" rel="noopener noreferrer">
                View Live Project <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="project-card fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="project-img">
            <span className="project-tag">SaaS Platform</span>
            <img src={textureImg} alt="Texture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="project-content">
            <h3>Texture – Digital Marketing</h3>
            <p>Contributed to a SaaS platform delivering AI-powered text analysis and ad enhancement tools. Built dynamic UI components to seamlessly integrate API-driven workflows for ad optimization and context-aware Django template rendering.</p>
            <div className="tech-stack">
              <span className="tech-badge">HTML/CSS</span>
              <span className="tech-badge">Django</span>
              <span className="tech-badge">REST APIs</span>
            </div>
            <div className="project-links">
              <a href="#" className="live-link" target="_blank" rel="noopener noreferrer">
                View Live Project <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="project-card fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="project-img">
            <span className="project-tag">Web App</span>
            <img src={sharelyzeImg} alt="ShareLyze" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="project-content">
            <h3>ShareLyze</h3>
            <p>Designed and developed a secure file-sharing platform supporting images and PDFs. Built a real-time activity tracking system capturing views, user interactions, and IP-level insights to support analytics and security monitoring.</p>
            <div className="tech-stack">
              <span className="tech-badge">JAVASCRIPT</span>
              <span className="tech-badge">HTML/CSS</span>
              <span className="tech-badge">REST APIs</span>
            </div>
            <div className="project-links">
              <a href="https://sharelyze.com/" className="live-link" target="_blank" rel="noopener noreferrer">
                View Live Project <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;

