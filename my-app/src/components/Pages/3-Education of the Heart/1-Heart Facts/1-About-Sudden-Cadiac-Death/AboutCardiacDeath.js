import React from "react";
import "./AboutCardiacDeath.css";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import Heart2 from "../../../../../images/EduOfHeart-Images/HeartModel.png";

const AboutCardiacDeath = () => {
  return (
    <section className="HeartFacts">
      <div className="main-container">
        <div className="heart-fact-content">
          <div className="heart-fact-header-box">
            <img src={HeartIcon} alt="heart" width={60} height={60} />
            <h2 className="heart-fact-header">About Sudden Cardiac Death</h2>
          </div>

          <Row xs={1} sm={2} lg={3} className="g-4 justify-content-center">
            <Col>
              <Card className="heart-fact-card">
                <Card.Body>
                  <img src={Heart2} alt="Heart" className="heart-fact-icon" />
                  <div className="heart-fact-card-title-box">
                    <Card.Title className="heart-fact-card-title">
                      180K - 300K
                    </Card.Title>
                  </div>
                  <Card.Text className="heart-fact-card-text">
                    Sudden Cardiac Deaths (SCD) occur in the US annually <br />
                    <span className="card-text-transparent">lorem ipsum</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="heart-fact-card">
                <Card.Body>
                  <img src={Heart2} alt="Heart" className="heart-fact-icon" />
                  <div className="heart-fact-card-title-box">
                    <Card.Title className="heart-fact-card-title">
                      1 IN 500
                    </Card.Title>
                  </div>
                  <Card.Text className="heart-fact-card-text">
                    people have the Hypertrophic Cardiomyopathy (HCM) abnormal
                    gene
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="heart-fact-card">
                <Card.Body>
                  <img src={Heart2} alt="Heart" className="heart-fact-icon" />
                  <div className="heart-fact-card-title-box">
                    <Card.Title className="heart-fact-card-title">
                      5000+
                    </Card.Title>
                  </div>
                  <Card.Text className="heart-fact-card-text">
                    young people between 15 and 34 years of age die annually
                    from Sudden Cardiac Death
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default AboutCardiacDeath;
