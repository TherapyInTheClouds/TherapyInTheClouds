//this page will include the booking information again as well as the calnder widget


const Bookings = () => {
  return (
    <section className="book">
      <h2>Booking</h2>
      <div className="sectionContent wrapper">
      <div className="getInTouch">
     <h3>Ready to get started? Send us an email with any questions you may have. </h3>
  
      </div>

      <div className="formContainer">
      <h4>Get in touch</h4>
      <p>Getting started with therapy is rarely easy. We're happy to answer any questions you may have or chat to see if our approach is a good fit for your unique needs and goals. Send us an email below:</p>
      <form 
        action="https://formsubmit.co/cassandra@therapyintheclouds.ca"
        method="POST"
      >
        <label for="_captcha"></label>
        <input type="hidden" name="_captcha" value="false" />

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
        
        
      </div>



      
      </div>
     
      
    <div className="billingPolicies wrapper">
          <p>
      Please note: Therapy in the Clouds does not provide
        direct billing to insurance providers. Payment for the session is due at
        the start of the session.  Clients will be provided with a receipt for
        service, including the therapist’s name, designation, and registration
        number. Payment is accepted by e-transfer only to
        cassandra@therapyintheclouds.ca
      </p>

      <p>
        Please be advised that each
        client session is scheduled specifically for you, thus we ask you
        provide a minimum of 24-hour notice if you are requesting to reschedule
        or cancel your appointment.  If such notice is not received a minimum of
        24 hours prior to the session start time, the full fee is required for
        the session.
      </p>
        </div>
    </section>
  );
};

export default Bookings;
