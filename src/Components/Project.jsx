import randomquote from '../images/random-quote.webp'
import calculator from '../images/calculator.webp'
import markdown from '../images/markdown.webp'
import drum from '../images/drum-machine.webp'
import workout from '../images/Workout.jpeg'
import youtube from '../images/Youtube.jpeg'



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
                      <img src={youtube} alt="workout-buddy project image"/>
                      <div className="project-content">
                        <figcaption>Youtube-Like Website</figcaption>
                      </div> 
                    </figure>
                </div>
                <div className='project-hover'>
                <a href="https://youtube-clone15.vercel.app" target="_blank">
                  <button className='btn'>Visit Website</button>
                  </a>
                </div>
              </div>
            <div className="project-div">
              <div className="project-image">
                  <figure>
                    <img src={workout} alt="workout-buddy project image"/>
                    <div className="project-content">
                      <figcaption>Workout Buddy</figcaption>
                    </div>
                     
                  </figure>
              </div>
              <div className='project-hover'>
              <a href="https://workout-buddy-tawny.vercel.app/" target="_blank">
                <button className='btn'>Visit Website</button>
                </a>
              </div>
            </div>


            <div className="project-div">
              <div className="project-image">
                    <figure>
                      <img src={randomquote} alt="random-quote project image"/>
                      <div className="project-content">
                        <figcaption>Workout Random Qoute</figcaption>
                      </div> 
                    </figure>
              </div>
              <div className='project-hover'>
              <a href="https://randomquot.netlify.app" target="_blank">
                <button className='btn'>Visit Website</button>
              </a>
               </div>
          </div>

        <div className="project-div">
          <div className="project-image">
              <figure>
                <img src={calculator} alt="calculator project image"/>
                <div className="project-content">
                  <figcaption>Calculator React</figcaption>
                </div> 
              </figure>
          </div>
          <div className='project-hover'>
          <a href="https://calculatorbyd.netlify.app/" target="_blank">
            <button className='btn'>Visit Website</button>
            </a>
          </div>
        </div>

        <div className="project-div">
          <div className="project-image">
              <figure>
                <img src={markdown} alt="Markdown Previewer project image"/>
                <div className="project-content">
                  <figcaption>Markdown Previewer</figcaption>
                </div> 
              </figure>
          </div>
          <div className='project-hover'>
            <a href="https://markdown-previewerrr.netlify.app/" target="_blank">
              <button className='btn'>Visit Website</button>
            </a>
          </div>
        </div>

        <div className="project-div">
          <div className="project-image">
              <figure>
                <img src={drum} alt="Drum machine project image"/>
                <div className="project-content">
                  <figcaption>Drum Machine</figcaption>
                </div> 
              </figure>
          </div>
          <div className='project-hover'>
            <a href="https://drum-machines.netlify.app/" target="_blank">
              <button className='btn'>Visit Website</button>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Project