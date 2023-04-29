

import headshot from "../assets/headshot.jpg";
import { useState } from "react";

const About = () => {

    const [showMoreQual, setShowMoreQual] = useState(false);
    const [showMoreApproach, setShowMoreApproach] = useState(false);
    const showQualIntro = () => setShowMoreQual(!showMoreQual);
    const showApproach = () => setShowMoreApproach(!showMoreApproach);

    return(
        <section id="meetTheFounder" className="about">
        <div className="wrapper about">
          <div className="bio">
            <h4>Meet the Founder</h4>
            <h3>Welcome, my name is Cassandra Fezzuoglio</h3>
            <p>Registered Social Worker, Therapist and Practice Founder</p>

            <p>
              I started Therapy in the Clouds with the goal of shaking up how we
              view therapy, and what it can truly be. As humans, we grow and
              flourish when we find ourselves in unfamiliar spaces. I truly
              believe both the art and science of therapy provides a space to
              nourish this growth by acknowledging and deconstructing our
              emotions, thoughts, and behaviours.
            </p>

            <p>
              I work with individuals experiencing challenges with self-esteem,
              self-compassion, and self- doubt. I often work with my clients to
              support them in dissecting the relationships they have with
              others. However, the journey of therapy truly begins with the
              exploration of the relationship we have with ourselves.
            </p>
            <div className="approach" onClick={showApproach}>
              <h5>Therapeutic Approach</h5>
              <i class="fa-solid fa-plus"></i>
            </div>
            {showMoreApproach ? (
              <>
                <p>
                  I practice from an eclectic model of therapy that focuses
                  closely on Cognitive Behavioural Therapy (CBT). I support you
                  by working to challenge your negative thought patterns in
                  order to deepen our understanding of your emotions and thereby
                  shift your actions. I am a firm believer that we often need to
                  “feel to heal,” and through understanding ourselves, we can
                  create conscious spaces for healing and growth.
                </p>
                <p>
                  Populations I support : Individuals, youth, adults, couples &
                  families.
                </p>
              </>
            ) : null}

            <div className="qualifications" onClick={showQualIntro}>
              <h5>Qualifications</h5>
              <i className="fa-solid fa-plus"></i>
            </div>

            {showMoreQual ? (
              <ul className="qualsList">
                <li>
                  Registered Social Worker, Ontario College of Social Workers
                  and Social Service Workers
                </li>
                <li>Masters of Social Work, The University of Windsor</li>
                <li>
                  Bachelors of Arts Degree, Human Rights and Equity Studies
                  (Honours)
                </li>
                <li>
                  Cognitive Behaviour Therapy, University of Toronto O.I.S.E.
                </li>
                <li>
                  Applied Suicide Intervention Skills Training
                </li>
              </ul>
            ) : null}
          </div>

          <div className="headshot">
            <img
              src={headshot}
              alt="headshot of Therapy In The Clouds Practice Founder, Cassandra Fezzuoglio"
            />
          </div>
        </div>
      </section>
    )
}

export default About