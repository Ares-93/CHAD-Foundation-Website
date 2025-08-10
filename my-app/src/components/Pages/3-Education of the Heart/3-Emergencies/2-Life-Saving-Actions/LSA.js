import React from "react";
import "./LSA.css";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import AEDImage from "../../../../../images/EduOfHeart-Images/AED.png";
import CPRImage from "../../../../../images/EduOfHeart-Images/CPR-IMG.png";
import { Row, Col } from "react-bootstrap";

const LSA = () => {
  const handleLearnMoreClick = () => {
    window.open(
      "https://www.redcross.org/take-a-class/cpr/performing-cpr/cpr-steps",
      "_blank"
    );
  };

  const handleFindClassesClick = () => {
    window.open("https://www.redcross.org/take-a-class", "_blank");
  };

  return (
    <section className="lsa-section">
      <div className="main-container">
        <div className="lsa-header-box">
          <img src={HeartIcon} alt="Heart icon" width={60} height={60} />
          <h2 className="lsa-header">Life-Saving Actions</h2>
        </div>
        <p className="lsa-intro-text">
          If you see someone that requires assistance, take action! Here are two
          important actions you can take to save a life:
        </p>

        <Row className="lsa-content-row">
          {/* Left Column: Images */}
          <Col lg={5} md={6} className="lsa-images-col">
            <img
              src={AEDImage}
              alt="An Automated External Defibrillator in a wall-mounted case"
              className="lsa-img"
            />
            <img
              src={CPRImage}
              alt="A person demonstrating CPR on a mannequin"
              className="lsa-img"
            />
          </Col>

          {/* Right Column: Text and Buttons */}
          <Col lg={7} md={6} className="lsa-text-col">
            <div className="lsa-text-block">
              <h3 className="lsa-sub-header">
                AED (Automated External Defibrillator)
              </h3>
              <p className="lsa-p">
                AED stands for Automated external defibrillator. These can be
                used for someone undergoing cardiac arrest.
              </p>
              <p className="lsa-p">
                Let’s learn more about these life-saving machines, and how to
                use them in an emergency.
              </p>
            </div>

            <div className="lsa-text-block">
              <h3 className="lsa-sub-header">
                CPR (Cardiopulmonary Resuscitation)
              </h3>
              <p className="lsa-p">
                Cardiopulmonary resuscitation (CPR) is a lifesaving technique
                that's useful in many emergencies in which someone's breathing
                or heartbeat has stopped.
              </p>
              <p className="lsa-p">
                Let’s take a CPR Class to get certified so you can help save a
                life!
              </p>
            </div>

            <div className="lsa-buttons-container">
              <button className="lsa-btn" onClick={handleLearnMoreClick}>
                Learn More About AEDs/CPR
              </button>
              <button className="lsa-btn" onClick={handleFindClassesClick}>
                Find CPR/AED Classes
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default LSA;
