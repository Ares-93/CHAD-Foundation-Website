import React from "react";
import EduOfTheHeartNav from "../../EduOfTheHeartNav";
import "./COS.css";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import { Card, Row, Col } from "react-bootstrap";
import one from "../../../../../images/EduOfHeart-Images/1.png";
import EarlyAccess from "../../../../../images/EduOfHeart-Images/Phone.png";
import arrowImage from "../../../../../images/EduOfHeart-Images/Arrow.png";
import CPR from "../../../../../images/EduOfHeart-Images/CPR.png";
import two from "../../../../../images/EduOfHeart-Images/2.png";
import DeFib from "../../../../../images/EduOfHeart-Images/DeFib.png";
import three from "../../../../../images/EduOfHeart-Images/3.png";
import AdvCare from "../../../../../images/EduOfHeart-Images/Care.png";
import four from "../../../../../images/EduOfHeart-Images/4.png";

const COS = () => {
  return (
    <section className="cos-section">
      <EduOfTheHeartNav currentPage="emergencies" />
      <div className="main-container">
        <div className="cos-content">
          <div className="cos-header-box">
            {<img src={HeartIcon} alt="heart" width={60} height={60} />}
            <h2 className="cos-header">The Chain of Survival</h2>
          </div>
          <p className="cos-text">
            The American Heart Association has deemed the Chain of Survival a
            global guideline for response to sudden cardiac arrest (SCA).
            250,000 people die annually of SCA. Comprised of 4 steps, a life may
            be saved by the first responder’s quick action.
          </p>
          <Row xs={1} md={2} lg={6} className="g-4 justify-content-center">
            {/* Early Access */}
            <Col className="icons">
              <Card className="call">
                <Card.Img variant="top" src={EarlyAccess} alt="call" />
              </Card>
              <div className="numbers">
                <img src={one} alt="number 1" />
              </div>
              <div className="call-text">
                <h3 className="call-header">Early Access</h3>
                <p className="text">Call 9-1-1 or EMS Immediately!</p>
              </div>
            </Col>
            {/* Arrow icon*/}
            <Col
              lg={1}
              className="d-none d-lg-flex justify-content-center align-items-center"
            >
              <img src={arrowImage} alt="Arrow Right" className="img-fluid" />{" "}
            </Col>
            {/*CPR*/}
            <Col className="icons">
              <Card className="cpr">
                <Card.Img variant="top" src={CPR} alt="cpr" />
              </Card>
              <div className="numbers">
                <img src={two} alt="number 2" />
              </div>
              <div className="cpr-text">
                <h3 className="cpr-header">Early CPR</h3>
                <p className="text">
                  Perform CPR to maintain blood flow to the brain and body until
                  the next step
                </p>
              </div>
            </Col>
            {/* Arrow icon*/}
            <Col
              lg={1}
              className="d-none d-lg-flex justify-content-center align-items-center"
            >
              <img src={arrowImage} alt="Arrow Right" className="img-fluid" />{" "}
            </Col>
            {/*DeFib*/}
            <Col className="icons">
              <Card className="defib">
                <Card.Img variant="top" src={DeFib} alt="defib" />
              </Card>
              <div className="numbers">
                <img src={three} alt="number 3" />
              </div>
              <div className="defib-text">
                <h3 className="defib-header">Early Defibrilation</h3>
                <p className="text">
                  Defibrillation can restart a heart in sudden cardiac arrest
                  via electric shock. (Learn more below)
                </p>
              </div>
            </Col>
            {/* Arrow icon*/}
            <Col
              lg={1}
              className="d-none d-lg-flex justify-content-center align-items-center"
            >
              <img src={arrowImage} alt="Arrow Right" className="img-fluid" />{" "}
            </Col>
            {/*Adv Care*/}
            <Col className="icons">
              <Card className="advcare">
                <Card.Img variant="top" src={AdvCare} alt="care" />
              </Card>
              <div className="numbers">
                <img src={four} alt="number 4" />
              </div>
              <div className="advcare-text">
                <h3 className="advcare-header">Early Advanced Care</h3>
                <p className="text">
                  After defibrillation, an emergency team should provide
                  advanced cardiac care on-scene and continue on the way to the
                  hospital.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default COS;
