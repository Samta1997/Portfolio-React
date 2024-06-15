import mobile from '../images/mobile.webp'

const WhyChoose = () => {
  return (
    <section className="section-why--choose">
    <div className="container">
      <h2 className="section-common-heading">Why Choose Me</h2>
      <p className="section-common-subheading">
        Choose me for innovative web solutions, tailored expertise, and unparalleled dedication to your online success.
      </p>
    </div>

    <div className="container grid grid-three--cols">
        <div className="choose-left--div text-align--right" >

          <div className="why-choose--div" data-aos="zoom-in-up" data-aos-delay="300">
            <p className="common-text--highlight">1</p>
            <h3 className="section-common--title">Experience</h3>
            <p>
              With over 5 years of experience crafting diverse web solutions, 
              I bring expertise and reliability to every project undertaken.
            </p>
          </div>

          <div
          className="why-choose--div"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <p className="common-text--highlight">2</p>
          <h3 className="section-common--title">Expertise</h3>
          <p>
            Proficient in front-end, back-end, and full-stack development 
            technologies, I offer comprehensive and versatile solutions for clients.
          </p>
        </div>

        <div
          className="why-choose--div"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <p className="common-text--highlight">3</p>
          <h3 className="section-common--title">Quality</h3>
          <p>
            Committed to delivering robust, scalable, and visually appealing web 
            solutions, I prioritize excellence in every aspect of development.
          </p>
        </div>

        </div>

        {/* <!--? center part of image  --> */}

        <div className="choose-center--div">
          <figure>
            <img src={mobile} alt="thapa technical offical new website "/>
          </figure>
        </div>

        {/* <!--? right side the contetn  --> */}
        <div className="choose-right--div text-align--left">

          <div className="why-choose--div" data-aos="zoom-in-up" data-aos-delay="400">
            <p className="common-text--highlight">4</p>
            <h3 className="section-common--title">Efficiency</h3>
            <p>
              I ensure fast turnaround with a focus on clean code and optimal performance, 
              guaranteeing timely delivery without compromising quality or reliability.
            </p>
          </div>

          <div
          className="why-choose--div text-align--left"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <p className="common-text--highlight">5</p>
          <h3 className="section-common--title">Communication</h3>
          <p>
            Clear, prompt, and transparent communication throughout the project lifecycle 
            fosters trust and collaboration with clients at every stage.
          </p>
        </div>

        <div
          className="why-choose--div text-align--left"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <p className="common-text--highlight">6</p>
          <h3 className="section-common--title">Client-Centric</h3>
          <p>
            Dedicated to exceeding expectations and driving positive outcomes,
            I prioritize client satisfaction and success above all else in every project.
          </p>
        </div>

        </div>
    </div>
    </section>
  )
}

export default WhyChoose