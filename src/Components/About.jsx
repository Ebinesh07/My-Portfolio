import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-header">
        <h2>About Me</h2>
        <p>
          Passionate MERN Stack Developer focused on building
          scalable web applications and solving real-world
          problems through technology.
        </p>
      </div>

      <div className="about-content">

        <div className="about-text">
          <h3>Who Am I?</h3>

          <p>
            I'm an Electronics and Communication Engineering
            graduate with a strong interest in Full Stack Web
            Development.
          </p>

          <p>
            I enjoy creating modern web applications using
            React.js, Node.js, Express.js and MongoDB while
            continuously improving my problem-solving and
            development skills.
          </p>
        </div>

        <div className="about-cards">

          <div className="info-card">
            <h3>3+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="info-card">
            <h3>MERN</h3>
            <p>Full Stack Developer</p>
          </div>

          <div className="info-card">
            <h3>2025</h3>
            <p>ECE Graduate</p>
          </div>

          <div className="info-card">
            <h3>Open</h3>
            <p>For Opportunities</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;