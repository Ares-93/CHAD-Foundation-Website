import React from "react";
import "./COS.css";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import { Row, Col } from "react-bootstrap";
import OneImg from "../../../../../images/EduOfHeart-Images/one.png";
import TwoImg from "../../../../../images/EduOfHeart-Images/two.png";
import ThreeImg from "../../../../../images/EduOfHeart-Images/three.png";
import FourImg from "../../../../../images/EduOfHeart-Images/four.png";
import arrowImage from "../../../../../images/EduOfHeart-Images/Arrow.png";

const COS = () => {
  return (
    <section className="cos-section">
      <div className="main-container">
        <div className="cos-content">
          <div className="cos-header-box">
            <img src={HeartIcon} alt="heart" width={60} height={60} />
            <h2 className="cos-header">The Chain of Survival</h2>
          </div>

          <p className="cos-text">
            The American Heart Association has deemed the Chain of Survival a
            global guideline for response to sudden cardiac arrest (SCA).
            250,000 people die annually of SCA. Comprised of 4 steps, a life may
            be saved by the first responder’s quick action.
          </p>

          <Row className="cos-row g-4">
            <Col className="step-col">
              <div className="step-top">
                <div className="step-icon">
                  <img src={OneImg} alt="Call" />
                </div>
              </div>
              <h3 className="step-title">Early Access</h3>
              <p className="step-desc">Call 9-1-1 or EMS immediately!</p>
            </Col>

            <Col className="arrow-col d-flex justify-content-center align-items-center">
              <img src={arrowImage} alt="Arrow" className="cos-arrow" />
            </Col>

            <Col className="step-col">
              <div className="step-top">
                <div className="step-icon">
                  <img src={TwoImg} alt="CPR" />
                </div>
              </div>
              <h3 className="step-title">Early CPR</h3>
              <p className="step-desc">
                Perform CPR to maintain blood flow to the brain and body until
                the next step.
              </p>
            </Col>

            <Col className="arrow-col d-flex justify-content-center align-items-center">
              <img src={arrowImage} alt="Arrow" className="cos-arrow" />
            </Col>

            <Col className="step-col">
              <div className="step-top">
                <div className="step-icon">
                  <img src={ThreeImg} alt="Defibrillation" />
                </div>
              </div>
              <h3 className="step-title">Early Defibrillation</h3>
              <p className="step-desc">
                Defibrillation can restart a heart in sudden cardiac arrest via
                electric shock. (Learn more below)
              </p>
            </Col>

            <Col className="arrow-col d-flex justify-content-center align-items-center">
              <img src={arrowImage} alt="Arrow" className="cos-arrow" />
            </Col>

            <Col className="step-col">
              <div className="step-top">
                <div className="step-icon">
                  <img src={FourImg} alt="Advanced care" />
                </div>
              </div>
              <h3 className="step-title">Early Advanced Care</h3>
              <p className="step-desc">
                After defibrillation, an emergency team should provide advanced
                cardiac care on-scene and continue on the way to the hospital.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default COS;
