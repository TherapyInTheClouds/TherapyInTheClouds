import React, { useState } from "react";
import BookingFooter from "./BookingFooter.js";

const Bookings = () => {
  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameVisible, setIsNameVisible] = useState(true);
  const [isPronounsVisible, setIsPronounsVisible] = useState(true);
  const [isNumberVisible, setIsNumberVisible] = useState(true);
  const [isEmailVisible, setIsEmailVisible] = useState(true);
  const [isMessageVisible, setIsMessageVisible] = useState(true);

  const handleInputChange = (event, setState, setIsVisible) => {
    const { value } = event.target;
    setState(value);
    setIsVisible(value === "");
  };

  return (
    <>
      <section className="book">
        <h2>Contact Us</h2>
        <div className="sectionContent wrapper">
          <div className="getInTouch">
            <h3>
              Ready to get started? Send us an email with any questions you may have.
            </h3>
          </div>

          <div className="formContainer">
            <h4>Get in touch</h4>
            <p>
              Getting started with therapy is rarely easy. We're happy to answer any questions you may have or chat to
              see if our approach is a good fit for your unique needs and goals. Send us an email below:
            </p>
            <form action="https://formsubmit.co/cassandra@therapyintheclouds.ca" method="POST">
              <label htmlFor="_captcha"></label>
              <input type="hidden" name="_captcha" value="false" />

              <div className="formItem">
                {isNameVisible && <label htmlFor="name">Name</label>}
                <input
                  className="name"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => handleInputChange(event, setName, setIsNameVisible)}
                  required
                />
              </div>

              <div className="formItem">
                {isPronounsVisible && <label htmlFor="pronouns">Pronouns</label>}
                <input
                  className="pronouns"
                  type="text"
                  id="pronouns"
                  name="pronouns"
                  value={pronouns}
                  onChange={(event) => handleInputChange(event, setPronouns, setIsPronounsVisible)}
                />
              </div>

              <div className="formItem">
                {isNumberVisible && <label htmlFor="number">Phone Number</label>}
                <input
                  className="number"
                  type="tel"
                  id="number"
                  name="number"
                  value={number}
                  onChange={(event) => handleInputChange(event, setNumber, setIsNumberVisible)}
                />
              </div>

              <div className="formItem">
                {isEmailVisible && <label htmlFor="email">Email</label>}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => handleInputChange(event, setEmail, setIsEmailVisible)}
                  required
                />
              </div>

              <div className="formItem">
                {isMessageVisible && <label htmlFor="message">Message</label>}
                <textarea
                  name="message"
                  id="message"
                  cols="20"
                  rows="10"
                  value={message}
                  onChange={(event) => handleInputChange(event, setMessage, setIsMessageVisible)}
                ></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
      <BookingFooter />
    </>
  );
};

export default Bookings;