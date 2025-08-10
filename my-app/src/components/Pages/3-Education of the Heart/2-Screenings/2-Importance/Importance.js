import React from "react";
import "./Importance.css";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import CoachEcho from "../../../../../images/EduOfHeart-Images/CoachScreen.png";

const Importance = () => {
  const handleVideoOne = () => {
    window.open("https://www.youtube.com/watch?v=TbWN3Uo3_cg", "_blank");
  };
  const handleVideoTwo = () => {
    window.open("https://www.youtube.com/watch?v=skRS6T50Q5I", "_blank");
  };

  return (
    <section className="imp-section">
      <div className="main-container">
        <div className="imp-header-box">
          <img src={HeartIcon} alt="heart" width={60} height={60} />
          <h2 className="imp-header">The Importance of Heart Screenings</h2>
        </div>

        <p className="imp-text">
          Screenings can detect lethal heart abnormalities and identify early cardiovascular risk factors in young people.
        </p>

        <Row xs={1} lg={2} className="imp-two-col g-4">
          <Col lg={8} className="imp-left">
            <Row xs={1} md={2} className="g-4">
              <Col>
                <Card className="imp-card">
                  <Card.Header className="imp-card-header">According to the CDC</Card.Header>
                  <Card.Body>
                    <Card.Text className="imp-card-text">
                      5,000 young people between the ages of 15 and 34 die annually from Sudden Cardiac Death.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="imp-card">
                  <Card.Header className="imp-card-header">HCM</Card.Header>
                  <Card.Body>
                    <Card.Text className="imp-card-text">
                      A leading cause of SCD in young athletes, more common in young African-American males (44 percent) than whites (25 percent).
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="imp-card">
                  <Card.Header className="imp-card-header">The Echocardiogram</Card.Header>
                  <Card.Body>
                    <Card.Text className="imp-card-text">
                      The gold standard for detecting structural anomalies such as hypertrophic cardiomyopathy.
                    </Card.Text>
                    <button onClick={handleVideoOne} className="importance-video-btn">
                      See an Echocardiogram in Action
                    </button>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="imp-card">
                  <Card.Header className="imp-card-header">The EKG (electrocardiogram)</Card.Header>
                  <Card.Body>
                    <Card.Text className="imp-card-text">
                      Can detect electrical problems such as Wolff-Parkinson-White Syndrome and Long QT Syndrome.
                    </Card.Text>
                    <button onClick={handleVideoTwo} className="importance-video-btn">
                      Why EKGs and Echos?
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col lg={4} className="imp-right">
            <div className="img-box">
              <img src={CoachEcho} alt="Coach getting Echo" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Importance;
