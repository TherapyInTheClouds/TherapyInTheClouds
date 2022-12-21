import { Link } from "react-router-dom";

const Nav = () => {
   return (
      <nav>
         <ul>
            <li>
               <img className="logo" src="" alt="" />
            </li>
            <li><Link to="/"><p>Home</p></Link></li>
            <li><Link to="/bookings"><p>Booking</p></Link></li>
            <li><Link to="/faq"><p>FAQ</p></Link></li>
         </ul>
      </nav>
   )
}

export default Nav;