import { Link } from "react-router-dom";
import logo from "../assets/practiceLogo.png"
import { useState } from "react";

const Nav = (props) => {

   // create a state watch toggle class
   const [active, setActive] = useState(false)

   // Create click function that updates toggle class state
   const toggleClass = () => {
      setActive(!active)
   }

   return (
      <>
         {/* Nav Bar */}
         <nav>
            <div className="navWrapper">
               <Link to="/">
                  <div className="logoContainer">
                     <img className="logo" src={logo} alt="Therapy in the Clouds Logo" />
                  </div>
               </Link>
               <button onClick={toggleClass} className="navIcon">
                  <i className="icon fa-solid fa-bars">
                     <p className="sr-only">click here to open slide-out menu</p>
                  </i>
               </button>
               <div className="navBar">
                  <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><a href="#meetTheFounder">Meet The Founder</a></li>
                     <li><Link to="/services">Services</Link></li>
                     <li><Link to="/faq">FAQ</Link></li>
                     <li> <Link to="/policy">Privacy Policy</Link></li>
                  </ul>
               </div>
            </div>
         </nav>

         {/* Slide-Out Nav */}
         {/* create a ternary that toggles hide show class */}
         <div className={active ? "slideOutNav show" : "slideOutNav hide"} id="slideOutNavElement">
            <button onClick={toggleClass} className="navCloseIcon">
               <i className="icon fa-solid fa-xmark">
                  <p className="sr-only">click here to open slide-out menu</p>
               </i>
            </button>
            <nav>
               <ul>
                  <li><Link to="/" onClick={toggleClass}>Home</Link></li>
                  <li><Link to="/services" onClick={toggleClass}>Services</Link></li>
                  <li><Link to="/faq" onClick={toggleClass}>FAQ</Link></li>
                  <li> <Link to="/policy" onClick={toggleClass}>Privacy Policy</Link></li>
               </ul>
            </nav>
         </div>
      </>
   )
}

export default Nav;