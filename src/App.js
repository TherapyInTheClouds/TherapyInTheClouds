import "./styles/styles.scss";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Faq from "./components/Faq";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Bookings from "./components/Bookings";
import Policy from "./components/Policy";
import { useState } from "react";

function App() {

  //const scrollInto = () => aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const [scroll, setScroll] = useState();
  
  

  return (
    <div> 
      <Nav scroll={scroll}/>
      <Routes>
        <Route path='/' element={<LandingPage setScroll={setScroll} />}/>
        <Route path='/bookings' element={< Bookings/>}/>
        <Route exact path='/faq' element={< Faq/>}/>
        <Route path='/policy' element={<Policy/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
