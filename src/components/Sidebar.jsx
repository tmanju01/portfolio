import profilePic from '../image/profile-pic.jpeg';

function Sidebar({ theme, toggleTheme, portfolioData }) {
  // Separate WhatsApp and Email for the top list, and others for social links
  const contactInfo = portfolioData.contactLinks.filter(link =>
    link.platform === 'WHATSAPP' || link.platform === 'EMAIL'
  );

  const socialLinks = portfolioData.contactLinks.filter(link =>
    link.platform !== 'WHATSAPP' && link.platform !== 'EMAIL'
  );

  // Other static info
  const otherInfo = [
    { label: 'Location', value: 'Gujarat, India', icon: 'fas fa-map-marker-alt' },
    { label: 'Current Organisation', value: 'PySquad Informatics', icon: 'fas fa-building' }
  ];

  return (
    <aside className="sidebar fade-in">
      <button className="theme-toggle sidebar-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
        <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
      </button>
      <div className="profile-img-container">
        <img
          src={profilePic}
          alt="Manju Thakor"
          className="profile-img"
          width="130"
          height="130"
        />
      </div>
      <h2>Manju Thakor</h2>
      <div className="badges">
        <span className="badge">Frontend Developer</span>
        <span className="badge">React.js Expert</span>
      </div>

      <div className="info-list">
        {/* Priority Contact Info (WhatsApp, Email) */}
        {contactInfo.map((link) => (
          <div className="info-item" key={link.id}>
            <div className="info-icon"><i className={link.iconClass}></i></div>
            <div className="info-content">
              <p>{link.platform}</p>
              <a href={link.url} target={link.platform === 'WHATSAPP' ? "_blank" : "_self"} rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h4>{link.handle}</h4>
              </a>
            </div>
          </div>
        ))}

        {/* Other Info */}
        {otherInfo.map((info, index) => (
          <div className="info-item" key={index}>
            <div className="info-icon"><i className={info.icon}></i></div>
            <div className="info-content">
              <p>{info.label}</p>
              <h4>{info.value}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="social-links">
        {socialLinks.map((link) => (
          <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className="social-link" title={link.platform}>
            <i className={link.iconClass}></i>
          </a>
        ))}
      </div>
      <a
        href="/Manju_Thakor_Resume.pdf"
        download="Manju_Thakor_Resume.pdf"
        className="btn-download"
      >
        <i className="fas fa-download" style={{ marginRight: '8px' }}></i> Download CV
      </a>
      {/* <a href="#" className="btn-download">
        <i className="fas fa-download" style={{ marginRight: '8px' }}></i> Download CV
      </a> */}
    </aside>
  );
}

export default Sidebar;
