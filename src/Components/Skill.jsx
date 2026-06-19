import "./Skill.css";

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="section-title">
        <h2>Tech Stack</h2>
        <p>Technologies I use to build modern web applications</p>
      </div>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Frontend</h3>

          <div className="skill-tags">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Bootstrap</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>

          <div className="skill-tags">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>REST API</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Database</h3>

          <div className="skill-tags">
            <span>MongoDB</span>
            <span>MySQL</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>

          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>MySQL Workbench</span>
            <span>VS Code</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;