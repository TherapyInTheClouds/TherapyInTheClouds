import { Link } from "react-router-dom";
import badge from "../assets/psychTodayBadge.png"

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <a href=""></a>
                <i className="fa-brands fa-instagram"></i>
             
                <a href="https://www.psychologytoday.com/profile/908641" class="sx-verified-seal">hello
                <img src={badge}/>
                </a>
            </div>
            <button><Link>Get in Touch</Link></button>
            <Link to="/policy">Privacy Policy</Link>
        </footer>
    )
}

export default Footer;