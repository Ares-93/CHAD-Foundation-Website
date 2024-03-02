import React from "react";
import "./WhatYouShouldKnow.css";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../images/HomePage-Images/heart.png";

function WhatYouShouldKnow() {
  return (
    <section className="whatYouShouldKnow">
      <div className="main-container">
        <h1 className="whatYouShouldKnow-header">
          What You Should Know: About Sudden Cardiac Death
        </h1>
        <p className="whatYouShouldKnow-p">
          Sudden cardiac death (SCD) is an unexpected death due to a sudden
          cardiac arrest (SCA). It is often caused by a problem with the heart's
          electrical impulses and can occur in people with or without
          pre-existing heart conditions. Prompt treatment, including the use of
          CPR and an automated external defibrillator (AED), is critical in the
          event of SCD.
        </p>
        {/* CARDS */}
        <Row xs={1} md={1} lg={3} className="g-4 justify-content-center">
          {/* Card-1 */}
          <Col>
            <Card className="whatYouShouldKnow-card">
              <Card.Body>
                <img
                  src={HeartIcon}
                  alt="Heart"
                  className="whatYouShouldKnow-icon"
                />
                <div className="whatYouShouldKnow-card-title-box">
                  <Card.Title className="whatYouShouldKnow-card-title">
                    180K - 300K
                  </Card.Title>
                </div>
                <Card.Text className="whatYouShouldKnow-card-text">
                  Sudden Cardiac Deaths (SCD) occur in the US annually <br />
                  <span className="card-text-transparent">lorem ipsum</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Card-2 */}
          <Col>
            <Card className="whatYouShouldKnow-card">
              <Card.Body>
                <img
                  src={HeartIcon}
                  alt="Heart"
                  className="whatYouShouldKnow-icon"
                />
                <div className="whatYouShouldKnow-card-title-box">
                  <Card.Title className="whatYouShouldKnow-card-title">
                    1 IN 500
                  </Card.Title>
                </div>
                <Card.Text className="whatYouShouldKnow-card-text">
                  has the Hypertrophic Cardiomyopathy HCM gene <br />
                  <span className="card-text-transparent">lorem ipsum</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Card-3 */}
          <Col>
            <Card className="whatYouShouldKnow-card">
              <Card.Body>
                <img
                  src={HeartIcon}
                  alt="Heart"
                  className="whatYouShouldKnow-icon"
                />
                <div className="whatYouShouldKnow-card-title-box">
                  <Card.Title className="whatYouShouldKnow-card-title">
                    5000+
                  </Card.Title>
                </div>
                <Card.Text className="whatYouShouldKnow-card-text">
                  people between 15 and 34 years of age die annually from Sudden
                  Cardiac Death
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <button className="whatYouShouldKnow-button">View Heart Facts</button>
      </div>
    </section>
  );
}

export default WhatYouShouldKnow;
