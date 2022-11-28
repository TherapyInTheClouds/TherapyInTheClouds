import { useState } from "react";
import { Link } from "react-router-dom";

  
const Faq = () => { 
    
    const [showAnswer, SetShowAnswer] = useState(false)

    const displayFaq = () => {
        showAnswer(!showAnswer)
    }
  return (

 

    <section>
        <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <div className="question">
            <p>How do I get connected with a therapist?</p>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div>
            <p>
              Each person’s journey to therapy is unique. Therapy in the Clouds
              offers potential clients a free 15-minute phone consultation to
              chat and connect with our therapists. The consultation allows you,
              as the client, to determine your initial therapeutic fit prior to
              committing to booking your first session. 
            </p>
            <Link to="bookings">Book A Consult</Link>
          </div>
        </li>

        <li>
          <div>
            <p>What can I expect during my first session and beyond?</p>
            <i className="fa-regular fa-chevron-down"></i>
          </div>

          <div>
            <p>
              During your first session, the therapist will work to get to know
              you and begin to explore the path which has led you to seeking
              therapeutic support. We are passionate about building rapport with
              our clients, which works towards creating a safe space for healing
              and growth. During this initial session, the therapist will
              collaboratively explore and construct initial goals for service
              with you. 
            </p>
          </div>
        </li>

        <li>
          <div>
            <p>What are you virtual hours of operation?</p>
            <i className="fa-regular fa-chevron-down"></i>
          </div>

          <div>
            <p>
              As a virtual therapy space we offer individual and couples
              psychotherapy and counselling sessions during evenings and
              weekends. Here at Therapy in the Clouds we recognize the potential
              barriers of accessing support during traditional operating hours.
            </p>
          </div>
        </li>

        <li>
          <div>
            <p>How frequent should my sessions with my therapist be?</p>
            <i className="fa-regular fa-chevron-down"></i>
          </div>

          <div>
            <p>
              The frequency of sessions can be discussed and determined
              collaboratively with your therapist during your first
              session. Frequency can vary from weekly or bi-weekly to monthly
              sessions. Please keep in mind that the frequency of your sessions
              can vary and evolve, depending on your needs.
            </p>
          </div>
        </li>

        <li>
          <div>
            <p>Are our conversations confidential?</p>
            <i className="fa-regular fa-chevron-down"></i>
          </div>

          <div>
            <p>
              Here at Therapy in the Clouds we provide potential clients with
              our privacy policy, which transparently outlines how your personal
              health information is collected and stored. Our privacy policy
              outlines the grounds of confidentiality and specific circumstances
              in which your therapist has a duty to report.
            </p>

            <Link to="/Privacy">View our privacy policy</Link>
          </div>
        </li>

        <li>
          <div>
            <p>Can I start and stop my sessions?</p>
            <i className="fa-regular fa-chevron-down"></i>
          </div>

          <div>
            <p>
              Therapy in the Clouds is here to support you on your unique
              journey.  Often clients may work with their therapist for a period
              of time, and take time and space away, to then re-engage at a
              later date.  This is your journey and you are in the driver’s
              seat!
            </p>
          </div>
        </li>

        <li>
          <div>
            <p>What is your cancellation policy?</p>
            <i className="fa-regular fa-chevron-down"></i>
          </div>

          <div>
            <p>
              Each client session is scheduled specifically for you. As a
              result, we ask that you provide a minimum of 24-hours’ notice if
              you are requesting to reschedule or cancel your appointment. If
              such notice is not received within a minimum of 24 hours prior to
              the session start time, the full fee will be charged for the
              session.
            </p>
          </div>
        </li>

        <li>
          <div>
            <p>How is payment processed?</p>
            <i className="fa-regular fa-chevron-down"></i>
          </div>

          <div>
            <p>
              Therapy in the Clouds does not provide direct billing to insurance
              providers. Payment will be due at the start of the
              session. Clients will be provided with a receipt for service,
              which will include the therapist&#39;s name, designation, and
              registration number. Payment is accepted by e-transfer only.
            </p>
          </div>
        </li>

        <li>
          <div>
            <p>How will my session with my therapits be conducted?</p>
            <i className="fa-regular fa-chevron-down"></i>
          </div>

          <div>
            <p>
              Sessions are conducted virtually with your therapist. The
              particular platform that will be used is owlpractice.ca, a website
              that is compliant with Ontario’s Personal Health Information
              Protection Act, 2004 (“PHIPA”). 
            </p>
          </div>
        </li>

        <li>
          <div>
            <p>What is the cost of therapy sessions?</p>
            <i className="fa-regular fa-chevron-down"></i>
          </div>

          <div>
            <p>We offer individual sessions ($175.00) and couples sessions ($185.00).</p>
          </div>
        </li>
        </ul>

        <h3>Have a question we haven't answered? Send us an email below or <Link>book a free consult</Link> to chat directly with a therapist.</h3>

    </section>
  );
};

export default Faq;

        {/* 1.  
 
** Brittany can we put a link to book now for consult**
 
2. What can I expect during my first session and beyond?

3. What are your virtual hours of operation?
As a virtual therapy space we offer individual and couples psychotherapy and counselling
sessions during evenings and weekends. Here at Therapy in the Clouds we recognize the
potential barriers of accessing support during traditional operating hours.


4. How frequent should my sessions with my therapist be?
The frequency of sessions can be discussed and determined collaboratively with your
therapist during your first session. Frequency can vary from weekly or bi-weekly to
monthly sessions. Please keep in mind that the frequency of your sessions can vary and
evolve, depending on your needs. 
5. Are our conversations confidential?
** Brittany Can we include a link to our Privacy Policy Tab**
Here at Therapy in the Clouds we provide potential clients with our privacy policy, which
transparently outlines how your personal health information is collected and stored. Our
privacy policy outlines the grounds of confidentiality and specific circumstances in which
your therapist has a duty to report.
6. Can I start and stop my sessions?
Therapy in the Clouds is here to support you on your unique journey.  Often clients may work
with their therapist for a period of time, and take time and space away, to then re-engage at a later
date.  This is your journey and you are in the driver’s seat!
7. What is your cancellation policy?
Each client session is scheduled specifically for you. As a result, we ask that you provide
a minimum of 24-hours’ notice if you are requesting to reschedule or cancel your
appointment. If such notice is not received within a minimum of 24 hours prior to the
session start time, the full fee will be charged for the session.
8. How is payment processed?
Therapy in the Clouds does not provide direct billing to insurance providers. Payment
will be due at the start of the session. Clients will be provided with a receipt for service,
which will include the therapist&#39;s name, designation, and registration number. Payment is
accepted by e-transfer only.
9. How will my session with my therapist be conducted?
Sessions are conducted virtually with your therapist. The particular platform that will be
used is owlpractice.ca, a website that is compliant with Ontario’s Personal
Health Information Protection Act, 2004 (“PHIPA”). 
10. What is the cost of therapy sessions?
We offer individual sessions ($175.00) and couples sessions ($185.00). */}
 