import React from "react";
import EduOfTheHeartNav from "../../EduOfTheHeartNav";
import "./About-Cardiac-Death.css";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import Heart2 from "../../../../../images/EduOfHeart-Images/HeartModel.png";

const HeartFacts = () => {
  return (
    <section className="heart-facts">
      <EduOfTheHeartNav currentPage="heart-facts" />
      <div className="main-container">
        <div className="heart-fact-content">
          <div className="heart-fact-header-box">
            {<img src={HeartIcon} alt="heart" width={60} height={60} />}
            <h2 className="heart-fact-header">About Sudden Cardiac Death</h2>
          </div>
          <p className="heart-facts-p"></p>
          {/* CARDS */}
          <Row xs={1} md={1} lg={3} className="g-4 justify-content-center">
            {/* Card-1 */}
            <Col>
              <Card className="heart-fact-card">
                <Card.Body>
                  <img
                    src={Heart2}
                    alt="Heart-2"
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
              <Card className="heart-fact-card">
                <Card.Body>
                  <img
                    src={Heart2}
                    alt="Heart-2"
                    className="whatYouShouldKnow-icon"
                  />
                  <div className="whatYouShouldKnow-card-title-box">
                    <Card.Title className="whatYouShouldKnow-card-title">
                      1 IN 500
                    </Card.Title>
                  </div>
                  <Card.Text className="whatYouShouldKnow-card-text">
                    people have the Hypertrophic Cardiomyopathy (HCM) abnormal
                    gene <br />
                    <span className="card-text-transparent">lorem ipsum</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Card-3 */}
            <Col>
              <Card className="heart-fact-card">
                <Card.Body>
                  <img
                    src={Heart2}
                    alt="Heart-2"
                    className="whatYouShouldKnow-icon"
                  />
                  <div className="whatYouShouldKnow-card-title-box">
                    <Card.Title className="whatYouShouldKnow-card-title">
                      5000+
                    </Card.Title>
                  </div>
                  <Card.Text className="whatYouShouldKnow-card-text">
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
export default HeartFacts;
