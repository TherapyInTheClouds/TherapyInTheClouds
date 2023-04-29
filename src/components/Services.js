
import Footer from "../components/Footer";
import Offerings from "./Offerings";
import { useLayoutEffect } from "react";

const Services = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <section className="servicesComponent">
            <div className="headerImg">
                <h2>Services</h2>
            </div>
            <Offerings/>
           
        </section>
        <Footer/>
         
        </>
    )
}

export default Services