import { Link } from "react-router-dom";

const Nav = () => {
    return (
 <div>
         <img className="logo" src="" alt="" />
      <ul>
        <Link to="/">Home</Link> 
        <Link to="/bookings">Booking</Link> 
        <Link to="/faq">FAQ</Link>
      
     </ul>
 </div>
   
    )
}

export default Nav;