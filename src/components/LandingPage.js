import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <>
      <header>
        <h1>Your wellness journey starts here.</h1>
        <button>Learn More</button>
      </header>

      <section className="About">
        <div>
          <div>
            <i class="fa-solid fa-phone"></i>
            <h3>Free 15 Minute Phone Consultation</h3>
            <p>Determine your initial therapeutic fit prior to booking your first session through a call with our team.</p>
            <Link to="/Bookings">Book Now</Link>
          </div>
        </div>

        <div>
          <i class="fa-solid fa-user"></i>
          <h3>Individual Counselling Session</h3>
          <p>1-on-1 virtual sessions at 50 minutes in length. Cost of session: $175.00</p>
          <Link to="/Bookings">Book Now</Link>
        </div>

        <div>
        <i class="fa-solid fa-user-group"></i>
          <h3>Couples Counselling Session</h3>
          <p>A virtual couples sessions at 50 minutes in length. Cost of session: $185.00</p>
          <Link to="/Bookings">Book Now</Link>
        </div>

      </section>
    </>
  );
};

export default LandingPage;
