function Navbar({ activeTab, setActiveTab, theme, toggleTheme }) {
  return (
    <nav className="top-nav fade-in" style={{ animationDelay: '0.1s' }}>
      {['about', 'resume', 'skills', 'portfolio', 'blogs', 'contact'].map(tab => (
        <button
          key={tab}
          className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
      <button className="theme-toggle nav-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
        <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
      </button>
    </nav>
  );
}

export default Navbar;
