import "./Project.css";
import smartwaste from "../assets/waste-management.png"
import eduverse from "../assets/eduverse.png"

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="project-header">
        <h2>Featured Projects</h2>
        <p>
          A collection of projects showcasing my skills in
          full-stack development, IoT and problem solving.
        </p>
      </div>

      <div className="project-container">

        <div className="project-card">
          
            <img src={eduverse} alt="eduverse" className="project-image"/>
            <h3>EDUVERSE</h3>
          <p>
            Responsive e-learning platform built using
            React.js with modern UI and backend integration.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>

          <div className="project-btns">
            <a href="https://github.com/Ebinesh07/Education-Universe-eduverse-frontend">GitHub</a>
            <a href="https://education-universe-eduverse-frontend.onrender.com/">Live Demo</a>
          </div>
        </div>
        

        <div className="project-card">
            <img src={smartwaste} alt="project" className="project-image" />
          <h3>Smart Waste Management</h3>

          <p>
            IoT based waste monitoring system with
            AI route optimization and real-time tracking.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>IoT</span>
            <span>AI</span>
          </div>

          <div className="project-btns">
            <a href="https://github.com/Ebinesh07/Smart-waste-management-for-cleaning-cities">GitHub</a>
            <a href="https://smart-waste-management-for-cleaning.onrender.com/"
            >Demo </a>
          </div>
        </div>

        <div className="project-card">
          <h3>TruthChain</h3>
        
          <p>
            Public development monitoring platform with
            dashboard analytics and milestone tracking.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Express</span>
            <span>MySQL</span>
          </div>

          <div className="project-btns">
            <a href="#">GitHub</a>
            <a href="#">Demo</a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;