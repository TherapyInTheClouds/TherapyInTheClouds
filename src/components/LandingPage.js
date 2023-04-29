
import { useRef } from "react";
import {useLayoutEffect } from "react";
import Footer from "../components/Footer";
import Offerings from "./Offerings";
import About from "./About";

const LandingPage = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const aboutRef = useRef();
  const scrollInto = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });

   
  return (
    <>
      <header>
        <div className="headerContent wrapper">
          <h1>Welcome to Therapy in the Clouds.</h1>
          <p className="SubTitle">Where we take therapy off the couch and into the virtual clouds!</p>
          <button onClick={scrollInto}>Learn More</button>
        </div>
      </header>

      <section className="headline wrapper">
        <p>
          Therapy In the Clouds is a virtual private practice offering
          psychotherapy and counselling services across the province of Ontario.
          We work with you to unpack the lens through which you see yourself
          today, to change how you view yourself tomorrow.
        </p>
      </section>
      <div ref={aboutRef}>
         <About />
      </div>
    <section className="offering wrapper">
        <h2>Services</h2>
        <Offerings/>
    </section>
    
    <Footer/>
    </>
  );
};

export default LandingPage;
