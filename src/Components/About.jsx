import research from '../images/research.webp'
import design from '../images/design.webp'
import coding from '../images/Coding.webp'

const About = () => {
  return (
    <section className="section-about">
    <div className="container">
      <h2 className="section-common-heading">About me</h2>
      <p className="section-common-subheading">
        Helping Your business through Research, Design, and
        Development Excellence.
      </p>
    </div>

    <div className="container grid grid-three--cols">
      <div className="about-div" data-aos="fade-up" data-aos-delay="300">
        <div className="icon">
          <img src={research} alt="thapa eduhub research team" />
        </div>
        <h3 className="section-common--title">Who I am</h3>
        <p>
          I'm a dedicated web developer with 3+ years of experience in web development, driven by a curiosity for 
          technology and a passion for crafting digital experiences.
        </p>
      </div>

      <div className="about-div" data-aos="fade-up" data-aos-delay="300">
        <div className="icon">
          <img src={design} alt="thapa eduhub research team" />
        </div>
        <h3 className="section-common--title">My Expertise</h3>
        <p>
          I specialize in front-end and back-end development, proficient in HTML, CSS, 
                  JavaScript, React.js, Node.js, and databases like MongoDB and MySQL.
        </p>
      </div>

      <div className="about-div" data-aos="fade-up" data-aos-delay="300">
        <div className="icon">
          <img src={coding} alt="thapa eduhub research team" />
        </div>
        <h3 className="section-common--title">My Approach</h3>
        <p>
          I prioritize continuous learning. With clean code and a focus on performance, I strive to exceed client 
                  expectations and drive positive outcomes.
        </p>
      </div>
    </div>
  </section>

  )
}

export default About