import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [navbarTransparent, setNavbarTransparent] = useState(false);
  const [navbar, setNavbar]=useState(true)
  
 
  // Making background of navbar transperent on scrolling
  useEffect(()=>{
   
    const handleScroll = () => {
      const heroSection = document.querySelector('.section-hero');
      const heroSectionHeight = heroSection.clientHeight;
      console.log(heroSectionHeight)
      const navbar =document.querySelector('.section-navbar')


      // Check if the user has scrolled past the hero section
      if (window.scrollY > heroSectionHeight/2) {
        setNavbar(false);
        
      } else {
        setNavbar(true);
      }
    };

    if (window.scrollY > 0) {
      setNavbarTransparent(true);
    } else {
      setNavbarTransparent(false);
    }
    document.addEventListener('scroll', handleScroll)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })



  return (

    navbar && <header className="section-navbar">
    <div className="container">
      <div className="navbar-brand">
        <NavLink to={'/'}>
          <img
            src={logo}
            alt="dharmender's logo"
            width="80px"
            height="60px"
          />
        </NavLink>
      </div>
      <nav className="navbar">
        <ul>
          <li className="nav-item">
            <NavLink to={'/'} className="nav-link"> home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/about'} className="nav-link" > about </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/services'} className="nav-link" > services </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/blog'} className="nav-link"> blog </NavLink>
          </li>
          <li className="nav-item">
            {/* <!-- <a className="nav-link" href="contact.html"> contact </a> --> */}
            <NavLink to={'/contact'} className="nav-link" href="blog.html"> Contact </NavLink>
            {/* <a className="nav-link" href="#section-contact--homepage"> contact </a> */}

          </li>
        </ul>
      </nav>
      </div>
   
  </header>
    
  )
}

export default Navbar