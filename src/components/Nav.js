import { Link } from "react-router-dom";
import logo from "../assets/practiceLogo.png"
import { useRef } from "react";

const Nav = (props) => {

   // const aboutRef = useRef();
   // props.scroll = aboutRef;
   // const scrollInto = () => aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  
   
   return (
      <nav>
         <Link to="/"><img className="logo" src={logo} alt="Therapy in the Clouds Logo" /></Link>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li>Booking</li>
            <li><Link to="/faq">FAQ</Link></li>
            <li> <Link to="/policy">Privacy Policy</Link></li>

         </ul>
      </nav>
   )
}

export default Nav;