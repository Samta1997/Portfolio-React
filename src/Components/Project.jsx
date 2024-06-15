import randomquote from '../images/random-quote.webp'
import calculator from '../images/calculator.webp'
import markdown from '../images/markdown.webp'
import drum from '../images/drum-machine.webp'



const Project = () => {
  return (
    <>
        <section className="section-project">
      <div className="container">
        <h2 className="section-common-heading">My Projects</h2>
        <p className="section-common-subheading">
          Here are my Projects
        </p>
      </div>
      <div className="container grid grid-four--cols">
        <div className="project-div">
          <div className="project-image">
            <figure>
              <img src={randomquote} alt="random-quote project image"/>
              <div className="project-content">
                <figcaption>Random Quote</figcaption>
                <a href="https://randomquot.netlify.app/" target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
              </div>
 
            </figure>
          </div>
        </div>

        <div className="project-div">
          <div className="project-image">
            <figure>
              <img src={calculator} alt="calculator project image"/>
              <div className="project-content">
                <figcaption>Calculator</figcaption>
                <a href="https://calculatorbyd.netlify.app/" target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </figure>
          </div>
        </div>

        <div className="project-div">
          <div className="project-image">
            <figure>
              <img src={markdown} alt="markdown-previewer project image"/>
              <div className="project-content">
                <figcaption>Markdown Previewer</figcaption>
                <a href="https://markdown-previewerrr.netlify.app/" target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </figure>
          </div>
        </div>

        <div className="project-div">
          <div className="project-image">
            <figure>
              <img src={drum} alt="drum-machine project image"/>
              <div className="project-content">
                <figcaption>Drum Machine</figcaption>
                <a href="https://drum-machines.netlify.app/" target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Project