const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: "fab fa-react", color: "#61DAFB" },
        { name: "Next.js", icon: "si si-nextdotjs", color: "var(--text-main)" },
        { name: "JavaScript (ES6+)", icon: "fab fa-js", color: "#F7DF1E" },
        { name: "TypeScript", icon: "fab fa-js-square", color: "#3178C6" },
        { name: "HTML5 & CSS3", icon: "fab fa-html5", color: "#E34F26" },
      ],
    },
    {
      title: "UI & Styling",
      skills: [
        { name: "Tailwind CSS", icon: "si si-tailwindcss", color: "#38B2AC" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
        { name: "Ant Design", icon: "fas fa-cubes", color: "#1890FF" },
        { name: "Responsive Design", icon: "fas fa-mobile-alt", color: "var(--primary-color)" },
      ],
    },
    {
      title: "Tools, Platforms & Concepts",
      skills: [
        { name: "Git & GitHub", icon: "fab fa-github", color: "var(--text-main)" },
        { name: "Vite", icon: "si si-vite", color: "#646CFF" },
        { name: "REST APIs", icon: "fas fa-sync-alt", color: "#4CAF50" },
        { name: "Redux Toolkit", icon: "si si-redux", color: "#764ABC" },
      ],
    },
  ];

  return (
    <div className="fade-in">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-container-v2">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="tech-stack-section fade-in" style={{ animationDelay: `${catIndex * 0.1}s` }}>
            <h3 className="tech-stack-heading">{category.title}</h3>
            <div className="tech-stack-pills">
              {category.skills.map((skill, index) => (
                <span key={index} className="tech-pill">
                  <i className={skill.icon} style={{ marginRight: '10px', color: skill.color }}></i>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
