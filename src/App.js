import "./styles/styles.scss";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Faq from "./components/Faq";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Bookings from "./components/Bookings";
import Policy from "./components/Policy";

function App() {
  return (
    <div> 
      <Nav/>
      <Routes>
        <Route path='/' element={< LandingPage/>}/>
        <Route path='/bookings' element={< Bookings/>}/>
        <Route exact path='/faq' element={< Faq/>}/>
        <Route path='/policy' elemtn={<Policy/>}/>
      </Routes>
     
      
       
      <Footer/>
    </div>
  );
}

export default App;
