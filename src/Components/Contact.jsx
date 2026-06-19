import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-header">
        <h2>Let's Connect</h2>
        <p>
          Open to internships, full-time opportunities and
          freelance collaborations.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-card">
          <i className="bi bi-envelope-fill"></i>
          <h3>Email</h3>
          <a href="mailto:ebinesh1403@gmail.com">
            ebinesh1403@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <i className="bi bi-telephone-fill"></i>
          <h3>Phone</h3>
          <a href="tel:+919500158879">+91 95001 58879</a>
        </div>

        <div className="contact-card">
          <i className="bi bi-linkedin"></i>
          <h3>LinkedIn</h3>
          <a href="https://linkedin.com/in/ebinesh-b1825ae"
            target="_blank"
            rel="noreferrer"
            >
            View Profile
            </a>
        </div>

      </div>

    </section>
  );
}

export default Contact;