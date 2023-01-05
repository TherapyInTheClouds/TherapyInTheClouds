import { Link } from "react-router-dom";

const Nav = () => {
   return (
      <nav>
         <ul>
            <li>
               <img className="logo" src="" alt="" />
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bookings">Booking</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
         </ul>
      </nav>
   )
}

export default Nav;