//this page will include the booking information again as well as the calnder widget


const Bookings = () => {
  return (
    <section className="book  wrapper">
      <h3>GET IN TOUCH</h3>
      <p>use the form below to send me an email about any questions you may have or clikc book now to schedule a timeslot directly</p>

      <form 
        action="https://formsubmit.co/cassandra@therapyintheclouds.ca"
        method="POST"
      >
        <label for="_captcha"></label>
        <input type="hidden" name="_captcha" value="false" />

        <label for="_next"></label>
        <input
          type="hidden"
          name="_next"
          value="https://therapyintheclouds.ca/pages/thanks.html"
        />
        <div class="formItem">
          <label for="name">Name</label>
          <input className="name" type="text" id="name" name="name" required />
        </div>

        <div class="formItem">
          <label for="pronouns">Pronouns</label>
          <input class="proouns" type="text" id="pronouns" name="pronouns" />
        </div>

        <div class="formItem">
          <label for="number">Phone Number</label>
          <input class="number" type="tel" id="number" name="number" />
        </div>

        <div class="formItem">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div class="formItem">
          <label for="message">Message</label>
          <textarea name="message" id="message" cols="20" rows="10"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <p>
        Billing information: Please note: Therapy in the Clouds does not provide
        direct billing to insurance providers. Payment for the session is due at
        the start of the session.  Clients will be provided with a receipt for
        service, including the therapist’s name, designation, and registration
        number. Payment is accepted by e-transfer only to
        cassandra@therapyintheclouds.ca
      </p>

      <p>
        Cancellation and missed session policy: Please be advised that each
        client session is scheduled specifically for you, thus we ask you
        provide a minimum of 24-hour notice if you are requesting to reschedule
        or cancel your appointment.  If such notice is not received a minimum of
        24 hours prior to the session start time, the full fee is required for
        the session.
      </p>
    </section>
  );
};

export default Bookings;
