import { useState, useEffect } from 'react';
import portfolioData from './data.json';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Skills from './components/Skills';


function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="layout-container">
      {/* SIDEBAR */}
      <Sidebar theme={theme} toggleTheme={toggleTheme} portfolioData={portfolioData} />

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* TOP NAVIGATION */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* CONTENT CARD */}
        <div className="content-card fade-in" style={{ animationDelay: '0.2s' }}>
          {activeTab === 'about' && <About />}
          {activeTab === 'resume' && <Resume />}
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'portfolio' && <Portfolio />}

          {activeTab === 'blogs' && <Blogs portfolioData={portfolioData} />}
          {activeTab === 'contact' && <Contact portfolioData={portfolioData} />}
        </div>

      </main>
    </div>
  );
}

export default App;
