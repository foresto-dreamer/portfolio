function About() {

  return (

    <section id="about" className="about">

      <div className="about-container">

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <p className="about-text">
          I'm a Computer Science undergraduate at KIIT with a strong
          interest in cybersecurity, cloud computing, and secure
          software development.

          I enjoy exploring how systems work internally and building
          practical tools related to networking, security and software
          engineering.
        </p>

        <div className="skills-section">

          <h3>Technical Skills</h3>

          <div className="skills-grid">

            <div className="skill-category">
              <h4>Languages</h4>
              <span>Python</span>
              <span>Java</span>
              <span>C</span>
              <span>C++</span>
              <span>JavaScript</span>
            </div>

            <div className="skill-category">
              <h4>Frameworks</h4>
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
            </div>

            <div className="skill-category">
              <h4>Tools</h4>
              <span>Git</span>
              <span>Docker</span>
              <span>Kali Linux</span>
            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

export default About