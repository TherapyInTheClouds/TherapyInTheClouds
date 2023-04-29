import "./styles/styles.scss";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Faq from "./components/Faq";
import LandingPage from "./components/LandingPage";

import Bookings from "./components/Bookings";
import Policy from "./components/Policy";
import Services from "./components/Services"
import MeetTheFounder from "./components/MeetTheFounder";



function App() {
  
  return (
    <div> 
      <Nav/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route exact path='/faq' element={<Faq/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/contact' element={<Bookings/>} />
        <Route path='/meetTheFounder' element={<MeetTheFounder/>} />
      </Routes>
     
    </div>
  );
}

export default App;
