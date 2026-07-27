const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: "fab fa-react", color: "#61DAFB" },
        { name: "Next.js", icon: "si si-nextdotjs", color: "var(--text-main)" },
        { name: "JavaScript (ES6+)", icon: "fab fa-js", color: "#F7DF1E" },
        { name: "TypeScript", icon: "si si-typescript", color: "#3178C6" },
        { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
        {
          name: "Express.js",
          icon: "si si-express",
          color: "var(--text-main)",
        },
        { name: "REST APIs", icon: "fas fa-server", color: "#4CAF50" },
        {
          name: "JWT Authentication",
          icon: "fas fa-user-shield",
          color: "#FF9800",
        },
      ],
    },

    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "si si-mongodb", color: "#47A248" },
        { name: "Mongoose", icon: "fas fa-database", color: "#8B0000" },
      ],
    },

    {
      title: "UI & Styling",
      skills: [
        { name: "Tailwind CSS", icon: "si si-tailwindcss", color: "#38B2AC" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
        { name: "Ant Design", icon: "fas fa-cubes", color: "#1890FF" },
        { name: "Material UI", icon: "si si-mui", color: "#007FFF" },
        {
          name: "Responsive Design",
          icon: "fas fa-mobile-alt",
          color: "#FF5722",
        },
      ],
    },

    {
      title: "State Management",
      skills: [
        { name: "Redux Toolkit", icon: "si si-redux", color: "#764ABC" },
        { name: "Context API", icon: "fab fa-react", color: "#61DAFB" },
      ],
    },

    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
        { name: "GitHub", icon: "fab fa-github", color: "var(--text-main)" },
        { name: "Postman", icon: "si si-postman", color: "#FF6C37" },
        { name: "Vite", icon: "si si-vite", color: "#646CFF" },
        { name: "Render", icon: "fas fa-cloud", color: "#46E3B7" },
        { name: "Vercel", icon: "si si-vercel", color: "var(--text-main)" },
        { name: "Netlify", icon: "si si-netlify", color: "#00C7B7" },
      ],
    },
  ];

  return (
    <div className="fade-in">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-container-v2">
        {skillCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            className="tech-stack-section fade-in"
            style={{ animationDelay: `${catIndex * 0.1}s` }}
          >
            <h3 className="tech-stack-heading">{category.title}</h3>

            <div className="tech-stack-pills">
              {category.skills.map((skill, index) => (
                <span key={index} className="tech-pill">
                  <i
                    className={skill.icon}
                    style={{
                      marginRight: "10px",
                      color: skill.color,
                    }}
                  ></i>
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
