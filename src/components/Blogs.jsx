import { useState } from 'react';

function Blogs({ portfolioData }) {
  const [selectedBlog, setSelectedBlog] = useState(null);

  if (selectedBlog) {
    return (
      <div className="fade-in blog-article-view">
        <div className="article-top-nav">
          <button className="btn-back-refined" onClick={() => setSelectedBlog(null)}>
            <i className="fas fa-chevron-left"></i>
            <span>Back to Feed</span>
          </button>
        </div>
        
        <div className="article-header">
          <div className="blog-meta-wrapper">
            <span className="blog-category-tag">{selectedBlog.category}</span>
            <div className="blog-meta-divider"></div>
            <span className="blog-read-time">
              <i className="far fa-clock"></i> {selectedBlog.readTime}
            </span>
            <div className="blog-meta-divider"></div>
            <span className="blog-publish-date">
              <i className="far fa-calendar-alt"></i> {selectedBlog.date}
            </span>
          </div>
          <h2 className="article-main-title">{selectedBlog.title}</h2>
        </div>

        <div className="article-hero-wrapper">
          <img src={selectedBlog.imageUrl} alt={selectedBlog.title} className="article-hero-img" />
          <div className="hero-overlay-gradient"></div>
        </div>

        <div className="article-content-container">
          <div className="article-body">
            {selectedBlog.fullContent.map((block, index) => {
              if (block.type === 'h3') return <h3 key={index}>{block.text}</h3>;
              if (block.type === 'h4') return <h4 key={index}>{block.text}</h4>;
              if (block.type === 'code') return (
                <pre key={index}>
                  <code>{block.text}</code>
                </pre>
              );
              return <p key={index} dangerouslySetInnerHTML={{ __html: block.text }}></p>;
            })}
          </div>
          
          <div className="article-footer">
            <div className="share-section">
              <span>Share this article:</span>
              <div className="share-icons">
                <button title="Share on Twitter"><i className="fab fa-twitter"></i></button>
                <button title="Share on LinkedIn"><i className="fab fa-linkedin-in"></i></button>
                <button title="Copy Link"><i className="fas fa-link"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in">
      <div className="section-header">
        <h2 className="section-title">Latest Insights</h2>
        <p className="section-subtitle">Exploring technologies, design patterns, and engineering best practices.</p>
      </div>

      <div className="blog-grid">
        {portfolioData.blogs.map((blog, i) => (
          <div 
            key={blog.id} 
            className="blog-card-enhanced fade-in" 
            style={{ animationDelay: `${0.1 + (i * 0.1)}s` }}
            onClick={() => setSelectedBlog(blog)}
          >
            <div className="blog-card-image-box">
              <img src={blog.imageUrl} alt={blog.title} className="blog-img-main" />
              <div className="blog-category-badge">{blog.category}</div>
            </div>
            
            <div className="blog-card-details">
              <div className="blog-top-meta">
                <span><i className="far fa-clock"></i> {blog.readTime}</span>
                <span>{blog.date}</span>
              </div>
              <h3 className="blog-title-text">{blog.title}</h3>
              <p className="blog-summary-text">{blog.description}</p>
              
              <div className="blog-card-footer">
                <span className="read-more-link">
                  Read Full Article <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
