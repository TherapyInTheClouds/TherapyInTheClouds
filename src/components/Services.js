import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Services = () => {
    return (
        <>
       
        <section className="servicesComponent">
            <div className="headerImg">
                <h2>Services</h2>
            </div>
            <div className="services wrapper">
                <Link className="container service centered" to="/contact">
                    <div>
                        <i class="fa-solid fa-phone"></i>
                        <h3>Free 15 Minute Phone Consultation</h3>
                        <p>
                            Determine your initial therapeutic fit prior to booking your
                            first session through a call with our team.
                        </p>
                        <button>Contact</button>
                    </div>
                </Link>

                <div className="container service centered">
                    <div>
                        <i className="fa-solid fa-user"></i>
                        <h3>Individual Counselling Session</h3>
                        <p>1-on-1 virtual sessions at 50 minutes in length.</p>
                        <p>Cost of session: $175.00</p>
                        <button>
                            <a href="https://portal.owlpractice.ca/therapyintheclouds/booking?therapist_id=1&location_id=1&rate_id=&day=2022-12-21&time=&video_session=0">
                                Book Now
                            </a>
                        </button>
                    </div>
                </div>

                <div className="container service centered">
                    <div>
                        <i className="fa-solid fa-user-group"></i>
                        <h3>Couples Counselling Session</h3>
                        <p>A virtual couples sessions at 50 minutes in length.</p>
                        <p>Cost of session: $185.00</p>
                        <button>
                            {" "}
                            <a href="https://portal.owlpractice.ca/therapyintheclouds/booking?therapist_id=1&location_id=1&rate_id=&day=2022-12-21&time=&video_session=0">
                                Book Now
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
         
        </>
    )
}

export default Services