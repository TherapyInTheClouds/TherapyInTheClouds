import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import headshot from "../assets/headshot.jpg";

const LandingPage = (props) => {
  const [showMoreQual, setShowMoreQual] = useState(false);
  const [showMoreApproach, setShowMoreApproach] = useState(false);

  const showQualIntro = () => setShowMoreQual(!showMoreQual);
  const showApproach = () => setShowMoreApproach(!showMoreApproach);
  const aboutRef = useRef();
  const scrollInto = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <header>
        <div className="headerContent wrapper">
          <h1>Virtual therapy meeting your unique needs.</h1>
          <button onClick={scrollInto}>Learn More</button>
        </div>
      </header>

      <section className="headline wrapper">
        <p>
          Therapy In the Clouds is a virtual wellness clinic offering
          psychotherapy and counselling services across the province of Ontario.
          We work with you to unpack the lens through which you see yourself
          today, to change how you view yourself tomorrow.
        </p>
      </section>

      <section className="about">
        <div className="wrapper about">
          <div className="bio">
            
              <h4>Meet The Founder</h4>
            
            <h3>Welcome, my name is Cassandra Fezzuoglio</h3>
            <p>Registered Social Worker, Therapist and Practice Founder</p>

            <p>
              I started Therapy in the Clouds with the goal of shaking up how we
              view therapy, and what it can truly be. As humans, we grow and
              flourish when we find ourselves in unfamiliar spaces. I truly
              believe both the art and science of therapy provides a space to
              nourish this growth by acknowledging and deconstructing our
              emotions, thoughts, and behaviours.
            </p>

            <p>
              I work with individuals experiencing challenges with self-esteem,
              self-compassion, and self- doubt. I often work with my clients to
              support them in dissecting the relationships they have with
              others. However, the journey of therapy truly begins with the
              exploration of the relationship we have with ourselves.
            </p>
            <div className="approach" onClick={showApproach}>
              <h5>Therapeutic Approach</h5>
              <i class="fa-solid fa-plus"></i>
            </div>
            {showMoreApproach ? (
              <>
                <p>
                  I practice from an eclectic model of therapy that focuses
                  closely on Cognitive Behavioural Therapy (CBT). I support you
                  by working to challenge your negative thought patterns in
                  order to deepen our understanding of your emotions and thereby
                  shift your actions. I am a firm believer that we often need to
                  “feel to heal,” and through understanding ourselves, we can
                  create conscious spaces for healing and growth.
                </p>
                <p>
                  Populations I support : Individuals, youth, adults, couples &
                  families.
                </p>
              </>
            ) : null}

            <div className="qualifications" onClick={showQualIntro}>
              <h5>Qualifications</h5>
              <i className="fa-solid fa-plus"></i>
            </div>

            {showMoreQual ? (
              <ul className="qualsList">
                <li>
                  Registered Social Worker, Ontario College of Social Workers
                  and Social Service Workers
                </li>
                <li>Masters of Social Work, The University of Windsor</li>
                <li>
                  Bachelors of Arts Degree, Human Rights and Equity Studies
                  (Honours)
                </li>
                <li>
                  Cognitive Behaviour Therapy, University of Toronto O.I.S.E.
                </li>
              </ul>
            ) : null}
          </div>

          <div className="headshot">
            <img
              src={headshot}
              alt="headshot of Therapy In The Clouds Practice Founder, Cassandra Fezzuoglio"
            />
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="offering wrapper">
        <h2>Our Services</h2>
        <div className="services">
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
    </>
  );
};

export default LandingPage;
