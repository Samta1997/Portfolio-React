import { NavLink } from 'react-router-dom'
import main from '../images/main.webp'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
         {/* <!-- ========== Start contact home Section ========== --> */}

        <div className="section-contact--homepage" id="section-contact--homepage">
            <div className="container grid grid-two--cols">
                <div className="contact-content">
                <h2 className="contact-title">Get in Touch</h2>
                <p>Reach Out for Collaboration, Inquiries, or Just to Say Hello</p>
                <div className="btn">
                    <a href="contact.html">
                    start now <i className="fa-solid fa-arrow-circle-right"></i>
                    </a>
                </div>
                </div>
                <div className="contact-image">
                <img src={main} alt="a guy doing coding"/>
                </div>
            </div>
        </div>

        {/* <!-- ========== End contact home Section ========== --> */}

        {/* <!-- ========== Start   FOOTER Section ========== --> */}

        <footer>
            <div className="container grid grid-four--cols">
                <div className="footer-1--div">
                <div className="logo-brand">
                    <a href="index.html" className="footer-subheading">Dharmender Singh</a>
                </div>
                <p>Reach Out for Collaboration, Inquiries, or Just to Say Hello</p>
                <div className="social-footer--icons">
                    <a href="https://www.facebook.com/vickey.samta/" target="_blank" alt="my facebook profile link" >
                        <FaFacebook/>
                    </a>
                    <a href="https://www.linkedin.com/in/dharmender-singh/" target="_blank" alt="my youtube channel link" >
                        <FaLinkedin/>
                    </a>
                    <a href="https://github.com/Samta1997" target="_blank" alt="my instagram profile link"  >
                        <FaGithub />
                    </a>
                </div>

            </div>

            <div className="footer-2--div">
                <p className="footer-subheading">  Go to </p>
                <ul>
                    <li> <NavLink to={'/'} > Home </NavLink> </li>
                    <li> <NavLink to={'/about'}> About </NavLink> </li>
                    <li> <NavLink to={'/contact'}> Contact</NavLink> </li>
                    <li> <NavLink to={'/blog'}> Blog </NavLink> </li>
                    <li> <NavLink to={'/services'}> Services </NavLink> </li>
                </ul>
            
            </div>

            <div className="footer-3--div">
                <p className="footer-subheading">  </p>
                
            
            </div>
            

            <div className="footer-4--div">
                <p className="footer-subheading"> Blogs </p>
                <ul>
                <li> <NavLink to={'/blog1'}  className="blog_link"> OpenAI Sora: First Impression </NavLink> </li>
                <li> <NavLink to={'/'}   className="blog_link"> This blog will be available soon </NavLink> </li>
                <li> <NavLink to={'/'} className="blog_link"> This blog will be available soon </NavLink> </li>
                <li> <NavLink to={'/'} className="blog_link"> This blog will be available soon </NavLink> </li>
                <li> <NavLink to={'/'} className="blog_link">This blog will be available soon  </NavLink> </li>
            </ul>
            </div>

            </div>
        </footer>

    </>
  )
}

export default Footer