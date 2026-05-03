function Contact({ portfolioData }) {
  return (
    <div className="fade-in contact-section">
      <div className="section-header">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
      </div>

      <div className="contact-grid-enhanced">
        {portfolioData.contactLinks.map((link, i) => (
          <a 
            key={link.id} 
            href={link.url} 
            target="_blank" 
            rel="noreferrer" 
            className="contact-card-v2 fade-in" 
            style={{ animationDelay: `${0.1 + (i * 0.1)}s` }}
          >
            <div className="card-v2-icon">
              <i className={link.iconClass}></i>
            </div>
            <div className="card-v2-content">
              <span>{link.platform}</span>
              <h3>{link.handle}</h3>
              <p>Connect with me via {link.platform.toLowerCase()}</p>
            </div>
            <div className="card-v2-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </a>
        ))}
      </div>

      <div className="cta-box">
        <div className="cta-content">
          <h3>Let's build something <span className="gradient-text">extraordinary</span></h3>
          <p>Currently available for freelance work and full-time positions.</p>
          <a href="mailto:thakor.manju.391@gmail.com" className="btn-cta">
            Get in Touch <i className="fas fa-paper-plane"></i>
          </a>
        </div>
        <div className="availability-indicator-v2">
          <div className="pulse-dot"></div>
          <span>Available Now</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
