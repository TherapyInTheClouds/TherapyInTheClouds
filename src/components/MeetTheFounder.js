import About from "./About"
import {useLayoutEffect } from "react";

const MeetTheFounder = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <section className="servicesComponent">
            <div className="headerImg">
                <h2>Meet the founder</h2>
            </div>
          <About/>
           
        </section>
    )
}

export default MeetTheFounder