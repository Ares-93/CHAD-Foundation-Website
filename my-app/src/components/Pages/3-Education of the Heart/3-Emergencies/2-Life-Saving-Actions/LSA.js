import React from "react";
import "./LSA.css";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import { Container, Row, Col } from "react-bootstrap";
import AED from "../../../../../images/EduOfHeart-Images/AED.png";
import CPR from "../../../../../images/EduOfHeart-Images/CPR-IMG.png";

const LSA = () => {
  return (
    <section className="lsa-section">
      <div className="main-container">
        <div className="lsa=content">
          <div className="lsa-header-box">
            {<img src={HeartIcon} alt="heart" width={60} height={60} />}
            <h2 className="lsa-header">Life-Saving Actions</h2>
          </div>
          <p className="lsa-text">
            If you see someone that requires assistance, take action! Here are
            two important actions you can take to save a life:
          </p>
          <Container className="lsa">
            <Row className="m-4">
              <Col md={6} className="AED-IMG-box">
                <img src={AED} alt="AED" className="img-fluid" />
              </Col>
              <Col md={6} className="d-flex flex-column justify-content-center">
                <h3>AED (Automated external defibrilator)</h3>
                <p>
                  AED stands for Automated external defibrillator. These can be
                  used for someone undergoing cardiac arrest.
                  <br></br>
                  <br></br>
                  Let’s learn more about these life-saving machines, and how to
                  use them in an emergency.
                </p>
                <h3>CPR (Cardiopulmonary resuscitation)</h3>
                <p>
                  Cardiopulmonary resuscitation (CPR) is a lifesaving technique
                  that's useful in many emergencies in which someone's breathing
                  or heartbeat has stopped.
                  <br></br>
                  <br></br>
                  Let’s take a CPR Class to get certified so you can help save a
                  life!
                </p>
                <button className="btn-1">Learn More About AEDs/CPR</button>
                <button className="btn-2">Find CPR/AED Classes</button>
              </Col>
            </Row>
            <Row className="my-4">
              <Col md={6} className="CPR-IMG-box">
                <img src={CPR} alt="CPR" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default LSA;
