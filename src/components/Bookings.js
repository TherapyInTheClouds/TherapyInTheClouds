//this page will include the booking information again as well as the calnder widget
import {useLayoutEffect } from "react";
import BookingFooter from "./BookingFooter.js"

const Bookings = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <section className="book">
      <h2>Contact Us</h2>
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
     
    </section>
    <BookingFooter/>
    </>
  );
};

export default Bookings;
