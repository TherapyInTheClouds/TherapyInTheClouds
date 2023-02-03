import { Link } from "react-router-dom";
import badge from "../assets/psychTodayBadge.png"
//import footer from "../assets/cloudFooter.svg"

const Footer = () => {
    return (
        <footer>
            <div className="wrapper footerContent">
                {/* <img className="footerImg" src={footer} alt="" /> */}
                <form action="https://formsubmit.co/cassandra@therapyintheclouds.ca" method="POST">
                    <h4>Get In Touch</h4>
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input name="name" id="name" type="text" placeholder="Your Name" />
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <input name="email" id="email" type="email" placeholder="Your Email" />
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <textarea name="message" id="message" placeholder="Your Message" rows="4" ></textarea>
                    <button>Send Message</button>
                </form>
                <section>
                    <div className="crisisSupport">
                        <p>*If you or someone you know is experiencing an emergency, a crisis or is in immediate danger, please call 9-1-1 or attend your nearest hospital or emergency department.</p>
                        <p>*If you are in need of crisis support lines:</p>
                        <ul>
                            <li>Toronto distress center (416 408 4357)</li>
                            <li>Gerstein center (416 929 5200)</li>
                            <li>Assaulted women’s helpline (1 866 863 0511)</li>
                            <li>Kids help phone (1800 668 6868)</li>
                            <li>310 COPE – York Support Services Network (1 855 310 2673)</li>
                            <li>Durham crisis and mental health line (1 800 742 1890)</li>
                            <li>Oakville distress center (905 849 4541)</li>
                        </ul>
                    </div>
                    <div className="buttons">
                        <button><Link to="/services">Book Now</Link></button>
                        <button><Link to="/policy">Privacy Policy</Link></button>
                        <div className="socialMedia">
                            <a href="https://www.psychologytoday.com/profile/908641" class="sx-verified-seal">
                                <img src={badge} alt="psychology today verification badge with link to profile"/>
                            </a>
                            <a href="https://www.psychologytoday.com/profile/908641">
                                <i className="fa-brands fa-instagram small"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <p className="builtBy">Designed and Built by <a href="https://www.linkedin.com/in/anjalee-benedict/">Anjalee Benedict</a> & <a href="https://www.linkedin.com/in/brittany-freitas/">Brittany Freitas</a></p>
        </footer>
    )
}

export default Footer;