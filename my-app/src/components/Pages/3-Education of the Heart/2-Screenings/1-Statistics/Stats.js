import React from "react";
import EduOfTheHeartNav from "../../EduOfTheHeartNav";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import DocHeart from "../../../../../images/EduOfHeart-Images/DocHeart.png";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats">
      <EduOfTheHeartNav currentPage="screeings" />
      <div className="main-container">
        <div className="stats-header-box">
          {<img src={HeartIcon} alt="doc-heart" width={60} height={60} />}
          <h2 className="stats-header">Statistics Of Our Heart Screenings</h2>
        </div>
        <div className="stats-content">
          <p className="stats-p"></p>
          {/* CARDS */}
          <Row xs={1} md={1} lg={3} className="g-4 justify-content-center">
            {/* Card-1 */}
            <Col>
              <Card className="stats-card">
                <Card.Body>
                  <img
                    src={DocHeart}
                    alt="Heart-2"
                    className="whatYouShouldKnow-icon"
                  />
                  <div className="whatYouShouldKnow-card-title-box">
                    <Card.Title className="whatYouShouldKnow-card-title">
                      10,000
                    </Card.Title>
                  </div>
                  <Card.Text className="whatYouShouldKnow-card-text">
                    people chose to have CHAD Heart Screenings. See 22 years of
                    Chad Preventive Heart Screenings!
                    <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Card-2 */}
            <Col>
              <Card className="stats-card">
                <Card.Body>
                  <img
                    src={DocHeart}
                    alt="DocHeart"
                    className="whatYouShouldKnow-icon"
                  />
                  <div className="whatYouShouldKnow-card-title-box">
                    <Card.Title className="whatYouShouldKnow-card-title">
                      10-20%
                    </Card.Title>
                  </div>
                  <Card.Text className="stats-card-text">
                    of athletes screened had heart anomalies detected.
                    <br />
                    <span className="card-text-transparent">lorem ipsum</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Card-3 */}
            <Col>
              <Card className="stats-card">
                <Card.Body>
                  <img
                    src={DocHeart}
                    alt="DocHeart"
                    className="whatYouShouldKnow-icon"
                  />
                  <div className="whatYouShouldKnow-card-title-box">
                    <Card.Title className="whatYouShouldKnow-card-title">
                      1 in 3
                    </Card.Title>
                  </div>
                  <Card.Text className="whatYouShouldKnow-card-text">
                    students were at risk for hypertension, obesity, diabetes,
                    high cholesterol, and/or heart abnormalities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="link">
          <a href="/more-stats" className="stats-link">
            If you want to see picture of our work, please click here.
          </a>
        </div>
        <button className="find-screen-btn">
          Find Heart Screenings Near You
        </button>
        <div className="expert-text">
          Experts now say that this number can be decreased significantly by
          community awareness and implementation of screening
          <br></br>
          programs for those felt to be at risk.
        </div>
      </div>
    </section>
  );
};

export default Stats;
