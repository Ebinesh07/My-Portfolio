import "./Hero.css";
import profile from "../assets/my-photo.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">
        <div className="profile-card">
          <img src={profile} alt="Ebinesh" />
        </div>
      </div>

      <div className="hero-right">

        <h4>Hello, I'm</h4>

        <h1>
          Ebinesh <span>B</span>
        </h1>

        <h2>MERN Stack Developer</h2>

        <p>
          Passionate Full Stack Developer focused on building
          responsive, scalable and user-friendly web applications
          using React.js, Node.js, Express.js and MongoDB.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="secondary-btn"
          >
            Download Resume
          </a>

        </div>

        {/* Social Icons */}

        <div className="social-icons">

          <a
            href="https://www.linkedin.com/in/ebinesh-b1825ae/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="https://github.com/Ebinesh07"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>

          <a href="mailto:ebinesh1403@gmail.com">
            <i className="bi bi-envelope-fill"></i>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;