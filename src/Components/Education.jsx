import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">

      <div className="education-title">
        <h2>Education</h2>
        <p>My Academic Journey</p>
      </div>

      <div className="education-container">

        <div className="edu-card">
          <div className="year">2021 - 2025</div>

          <h3>B.E Electronics & Communication Engineering</h3>

          <h4>St. Joseph's College of Engineering</h4>

          <p>CGPA : 7.84</p>
        </div>

        <div className="edu-card">
          <div className="year">2020 - 2021</div>

          <h3>Higher Secondary Certificate (HSC)</h3>

          <h4>SPK Govt Boys Hr. Sec School</h4>

          <p>Percentage : 74%</p>
        </div>

        <div className="edu-card">
          <div className="year">2018 - 2019</div>

          <h3>Secondary School Leaving Certificate (SSLC)</h3>

          <h4>KVS Matric Hr. Sec School</h4>

          <p>Percentage : 68%</p>
        </div>

      </div>

    </section>
  );
}
export default Education;