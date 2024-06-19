import {  FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { SiRedux, SiSocketdotio } from "react-icons/si";

const Course = () => {
  return (
    <section className="section-course">
    <div className="container">
      <h2 className="section-common-heading">My Skills</h2>
      <p className="section-common-subheading">
        Here are my Web Deveopment skills
      </p>
    </div>

    <div className="container grid grid-four--cols">
      <div className="course-div">
            <div className="fa-brands">
                <FaHtml5/>
            </div>
        <h3 className="section-common--title">HTML</h3>
        <p>Web content structure with essential markup language.</p>
      </div>

      <div className="course-div">
        <div className="icon">
            <div className="fa-brands">
                <FaCss3Alt/>
            </div>
        </div>
        <h3 className="section-common--title">CSS</h3>
        <p>Styling web elements for visually appealing websites.</p>
      </div>
      <div className="course-div">
        <div className="icon">
            <div className="fa-brands">
                <IoLogoJavascript/>
            </div>
        </div>
        <h3 className="section-common--title">JavaScript</h3>
        <p>
          Dynamic language powering interactive web applications.
        </p>
      </div>

      <div className="course-div">
        <div className="icon">
            <div className="fa-brands">
                <FaReact/>
            </div>
        </div>
        <h3 className="section-common--title">React</h3>
        <p>JavaScript library for building interactive UIs.</p>
      </div>

      <div className="course-div">
        <div className="icon">
            <div className="fa-brands">
                <DiNodejs/>
            </div>
        </div>
        <h3 className="section-common--title">Nodejs</h3>
        <p>
          Runtime for scalable server-side JavaScript applications.
        </p>
      </div>

      <div className="course-div">
        <div className="icon">
            <div className="fa-brands">
                <DiMongodb/>
            </div>
        </div>
        <h3 className="section-common--title">MongoDB</h3>
        <p>
        MongoDB empowers scalable, flexible, efficient data management..
        </p>
      </div>

      <div className="course-div">
        <div className="icon">
            <div className="fa-brands">
                <SiRedux/>
            </div>
        </div>
        <h3 className="section-common--title">Redux</h3>
        <p>
        Redux streamlines state management with predictability.
        </p>
      </div>

      <div className="course-div">
        <div className="icon">
            <div className="fa-brands">
                <SiSocketdotio/>
            </div>
        </div>
        <h3 className="section-common--title">Socket.io</h3>
        <p>
        Socket.io enables real-time communication effortlessly.
        </p>
      </div>

    </div>
     
      
     
  </section>
  )
}

export default Course