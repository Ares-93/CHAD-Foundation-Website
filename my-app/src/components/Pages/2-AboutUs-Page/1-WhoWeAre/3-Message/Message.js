import React, { useState } from "react";
import "./Message.css";
import AristaPhoto from "../../../../../images/AboutUs-Images/arista-photo.png";

const Message = () => {
  // State to toggle expanded text
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to handle click on "Read More" / "Read less"
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="Message">
      <div className="main-container">
        <h2 className="message-header">Message from the Founder</h2>
        <div className="message-content">
          <div className="message-text-box">
            <p
              className={`message-text ${
                isExpanded ? "message-text-expanded" : ""
              }`}
            >
              Dearest Friends and Supporters,
              <br />
              <br />
              26 years ago, the “1st Chad Echocardiogram Screening for Young
              Athletes” took place at Chad’s alma mater, North Hollywood High,
              CA—the first echocardiogram screening of its kind in the nation.
              Then it was said “12 young athletes die annually from S C D.” The
              Centers of Disease Control now say 6,000 young people under 35 die
              annually from Sudden Cardiac Arrest.
              <br />
              <br />
              Thanks to Cardiologists, Sonographers, Hospitals, Mfg. partners,
              Volunteers and Friends of Chad, that first screening flourished to
              10,000 young people screened in
              {isExpanded && (
                <>
                  {" "}
                  5 states and Austria and Sweden. Chad found an average 15-20%
                  anomaly rate for every 100 screened, resulting in surgeries
                  and patients and families being followed sometimes for life.
                  Today, Chad is only the masthead; there is a flotilla of
                  hundreds of organizations screening thousands of young hearts
                  and saving lives. Awareness is being raised, and though
                  screenings for athletes are not mandatory in the US, in Italy
                  prescreening of athletes is mandated by law; 25-year stats
                  show early detection has a 90% save rate there. Japan has laws
                  that provide heart screenings for their school children. The
                  NBA is the 1st professional sports organization to mandate
                  Echocardiograms for their athletes.
                  <br />
                  <br />
                  <strong className="underline-strong">
                    What’s ahead for “The Gift of Heart?”
                  </strong>
                  <br />
                  <br />
                  After providing heart screenings for the past 25 years, moving
                  forward, CHAD will focus its efforts on advocating for
                  hospitals across the US to institute Heart Screening Programs
                  for Young Athletes and Students. As hospitals already have
                  state-of-the-art heart screening equipment, medical
                  facilities, and follow-up medical staff in place, this will
                  expand the number of heart screening events nationally and
                  increase the capacity of young people screened. Today, several
                  hospitals nationwide have already initiated successful heart
                  screening programs to detect unknown anomalies in athletes and
                  students (see{" "}
                  <a
                    href="/resources/sca-and-training-resources"
                    target="_blank"
                  >
                    Resources
                  </a>
                  ). Secondly, as Heart-Healthy Living is a holistic approach
                  that begins at home, CHAD will promote a “Heart-Healthy
                  Lifestyle Program” through diet, nutrition, exercise, and
                  monthly talks by doctors and health professionals who will
                  speak about Heart Education, how-to integrate a heart-healthy
                  lifestyle, increase awareness of Sudden Cardiac Death and
                  premature Cardio Risk Factors in Youth, and how preventive
                  screenings are vital in safeguarding your children’s and your
                  own hearts.  Knowing Cardiac Warning Signs and “The Chain of
                  Survival” are also imperative in saving lives. ‘There is no
                  greater gift than helping to save a Life—young and old.’
                  <br />
                  <br />
                  <strong>The Gift of Art</strong>
                  <br />
                  Chad truly cared about all people. His friends would say,
                  “Chad never saw color, only you, what you were about, what
                  your hopes and dreams were.” Thus,{" "}
                  <strong>The Gift of Art</strong> creates, produces, and
                  performs Art—film, theatre, and books that tell stories about
                  all our heritages, dreams, joys, angst, and challenges, and
                  promote diverse works and talent. The Chad Players have
                  performed 9 Off-Broadway multicultural performances. Their
                  production of the classic play, Days of Wine and Roses, was
                  brought to Atlantic City, NJ, by the “Atlantic Commission on
                  Abused and Missing Children” as the community event of the
                  year to show the deleterious effects substance abuse can have
                  on the family.
                  <br />
                  <br />
                  As we move forward, CHAD will focus on children’s “inner
                  hearts” as well, as they are endangered as never before. The 3
                  leading causes of death in children are:
                  <br />
                  1) Firearms,
                  <br />
                  2) Motor Vehicles, and
                  <br />
                  3) Suicides and Accidents.
                  <br />
                  By providing a platform for high school students to express
                  their fears, challenges, hopes, and dreams through Art—
                  stories, plays, creative writing and athletics—they can share,
                  express, and inform, and we as parents can listen and hear
                  their inner hearts speaking, effecting a better way for
                  growth, understanding, and solutions. Through the{" "}
                  <strong> Annual Scholarship Program, </strong> Program, CHAD
                  awards an athlete whose teachers and peers honour as the best
                  “Scholar, Athlete &amp; Leader” and an Art Scholarship for the
                  “Best Story of the Heart.” Students who seek out careers in
                  accredited vocational or trade schools are strongly 3
                  encouraged to apply. Our world needs all types of talent and
                  skills. As Chad never drank alcohol or did drugs, we will
                  launch the “Life is A Gift—Safe Driving Campaign” to engage
                  high schools and colleges—“Don’t text/drink and drive” (see{" "}
                  <a
                    href="/gift-of-art/upcoming-events/safe-driver-campaign"
                    target="_blank"
                  >
                    "Safe Driving Campaign"
                  </a>
                  ).
                  <br />
                  <br />
                  If we can change—not the landscape of athletics but the value
                  of each Athlete’s Life through heart screenings, if we can
                  inspire the mind and heart of just one youth with our Gift of
                  Art, then we know we have imparted the values of our namesake,
                  Chad Alan Butrum, “Healthy Body, Mind, and Spirit.” Saving one
                  Life to reach its full potential would be Chad’s greatest wish
                  and joy.  
                  <br />
                  <br />
                  With your continued love, support, and gifts, in the next
                  decades we will continue to see that barren ground on which I
                  first stepped, filled with healthy young Lives fulfilling
                  their dreams in this great country. Our greatest Love and
                  Appreciation, dear Friends and Supporters – we save Hearts and
                  nourish Minds and Spirits because of “each of you.”
                  <br />
                  <br />
                  <span className="message-signature">
                    From the Heart,
                    <br />
                    Arista
                    <br />
                    Founder... Chad’s Mom (& Curt's and Collin’s) the greatest
                    role in Life
                  </span>
                </>
              )}
            </p>
            <button onClick={toggleExpand} className="read-more-btn">
              {isExpanded ? "Read less" : "Read More"}
            </button>
          </div>
          <div className="message-photo">
            <img src={AristaPhoto} alt="Founder" className="arista-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Message;
