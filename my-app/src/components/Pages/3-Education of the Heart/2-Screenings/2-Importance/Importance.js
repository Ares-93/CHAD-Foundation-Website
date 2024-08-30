import React from "react";
import "./Importance.css";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import CoachEcho from "../../../../../images/EduOfHeart-Images/CoachScreen.png";

const Importance = () => {
  return (
    <section className="imp-section">
     
      <div className="main-container">
        <div className="imp-header-box">
          {<img src={HeartIcon} alt="heart" width={60} height={60} />}{" "}
          <h2 className="imp-header">The Importance of Heart Screenings</h2>
        </div>
        <div className="imp-text-box">
          <p className="imp-text">
            Screenings can detect lethal heart abnormalities and identify early
            cardiovascular Risk Factors in young people.
          </p>
        </div>
        <Row xs={1} md={1} lg={3} className="g-4 justify-content-left">
          <Col className="col-md-1 padd-0  ">
            <Card className="CDC">
              <Card.Header className="d-flex-align-items">
                According to the CDC
              </Card.Header>

              <Card.Body>
                <Card.Text className="CDC-card-text">
                  5,000 young people between the <br></br> ages of 15 and 34
                  yrs. of age die <br></br> annually from Sudden Cardiac{" "}
                  <br></br>
                  Death.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="echo">
              <Card.Header className="d-flex-align-items">
                The Echocardiogram
              </Card.Header>
              <Card.Body>
                <Card.Text className="echo-card-text">
                  the gold standard for detecting<br></br> structural anomalies
                  such as HCM,<br></br> hypertrophic cardiomyopathy.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-2 padding-0">
            <Card className="HCM">
              <Card.Header className="d-flex-align-items">HCM</Card.Header>
              <Card.Body>
                <Card.Text className="hcm-card-text">
                  HCM is a leading cause of SCD in<br></br> young athletes, more
                  common in<br></br> young African-American males<br></br> (44%)
                  than whites (25%).
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="EKG">
              <Card.Header className="d-flex-align-items">
                The EKG (electrocardiogram)
              </Card.Header>

              <Card.Body>
                <Card.Text className="ekg-card-text">
                  can detect electrical problems<br></br> such as
                  Wolff-Parkinson-White-<br></br>Syndrome and Long QT Syndrome.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="coach-img">
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
