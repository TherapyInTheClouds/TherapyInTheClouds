import { useState } from "react";
import Footer from "../components/Footer";

const Faq = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const displayAnswer = (i) => {
    if (showAnswer === i) {
      return setShowAnswer(null)
    }
    setShowAnswer(i)
    
   
      }

  const faqData = [
    {
      question: "How can I get connected with a therapist?",
      answer:
        "Each person's journey to therapy is unique. Therapy in the Clouds offers potential clients a free 15-minute phone consultation to chat and connect with our therapists. The consultation allows you, as the client, to determine your initial therapeutic fit prior to committing to booking your first session.",
    },

    {
      question: "What can I expect during my first session and beyond?",
      answer:
        "During your first session, the therapist will work to get to know you and begin to explore the path which has led you to seeking therapeutic support. We are passionate about building rapport with our clients, which works towards creating a safe space for healing and growth. During this initial session, the therapist will collaboratively explore and construct initial goals for service with you.",
    },

    {
      question: "What are your virtual hours of operation?",
      answer:
        "As a virtual private practice we offer individual and couples psychotherapy and counselling sessions during evenings and weekends. Here at Therapy in the Clouds we recognize the potential barriers of accessing support during traditional operating hours.",
    },

    {
      question: "How frequent should my sessions with my therapist be?",
      answer:
        "The frequency of sessions can be discussed and determined collaboratively with your therapist during your first session. Frequency can vary from weekly or bi-weekly to monthly sessions. Please keep in mind that the frequency of your sessions can vary and evolve, depending on your needs.",
    },

    {
      question: "Are our conversations confidential?",
      answer:
        "Here at Therapy in the Clouds we provide potential clients with our privacy policy, which transparently outlines how your personal health information is collected and stored. Our privacy policy outlines the grounds of confidentiality and specific circumstances in which your therapist has a duty to report.",
    },

    {
      question: "Can I start and stop my sessions?",
      answer:
        "Therapy in the Clouds is here to support you on your unique journey. Often clients may work with their therapist for a period of time, and take time and space away, to then re-engage at a later date. This is your journey and you are in the driver's seat!",
    },

    {
      question: "What is your cancellation policy?",
      answer:
        "Each client session is scheduled specifically for you. As a result, we ask that you provide a minimum of 24-hours notice if you are requesting to reschedule or cancel your appointment. If such notice is not received within a minimum of 24 hours prior to the session start time, the full fee will be charged for the session.",
    },

    {
      question: "How is payment processed?",
      answer:
        "Therapy in the Clouds does not provide direct billing to insurance providers. Payment will be due at the start of each session. Clients will be provided with a receipt for service, which will include the therapist's name, designation, and registration number. Payment is accepted by e-transfer only.",
    },

    {
      question: "What is the cost of therapy sessions?",
      answer:
        "We offer individual sessions ($175.00) and couples sessions ($185.00).",
    },
  ];


  return (
    <>
    <section className="faq">
      <div className="header">
        <h2>Frequently Asked Questions</h2>
      </div>
      
      <ul className="wrapper faqList">
        {faqData.map((faqItem, i) => (
            <li onClick={() => displayAnswer(i)} className="faqItem" key={faqItem.question}>
        
                <div className="question">
                  <p>{faqItem.question}</p>

                  {
                    showAnswer === i ? 
                    <i className="fa-solid fa-chevron-up"></i>
                  :  <i
                    className="fa-solid fa-angle-down"
                  ></i>
                  }
                 
                </div>

                {showAnswer === i ? (
                  <div className="answer">
                    <p>{faqItem.answer}</p>
                  </div>
                ) : null}
             
            </li>
          ))}
      
      </ul>
    </section>
     <Footer/>
     </>
  );
};

export default Faq;
