import React from "react";
import "./CountriesWScreenings.css";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import { Row, Col, Card } from "react-bootstrap";
import ItalyFlag from "../../../../../images/EduOfHeart-Images/Italy.png";
import JapanFlag from "../../../../../images/EduOfHeart-Images/Japan.png";
import USAFlag from "../../../../../images/EduOfHeart-Images/USA.png";
import Instructor from "../../../../../images/EduOfHeart-Images/instructor.png";
import { useNavigate } from "react-router-dom";

const CountriesWScreening = () => {
  const navigate = useNavigate();
  const handleClickOnHeartFacts = () => {
    navigate("/education-of-the-heart/tips-main");
  };
  return (
    <section className="Countries">
      <div className="main-container">
        <Col className="country-col">
          <div className="country-header-box">
            {<img src={HeartIcon} alt="heart" width={60} height={60} />}{" "}
            <h2 className="country-header">
              Countries that require Heart Screenings
            </h2>
          </div>
          <div className="country-subheader">
            <p className="country-subheader-text">
              Countries that require heart screenings
            </p>
          </div>
          <Row xs={1} md={1} lg={2} className="g-4 justify-content-center">
            <Col>
              <Card className="Italy">
                <Card.Header className=" d-flex-align-itenms">
                  <img
                    src={ItalyFlag}
                    alt="Italy Flag"
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  Italy
                </Card.Header>
                <Card.Body>
                  <Card.Text className="card-text">
                    Italian law mandates that every competitive athlete must
                    undergo annual preparticipation evaluation (PPE) identify
                    cardiovascular (CV) diseases that pose a risk of sudden
                    death (SD) during sport and other conditions that may
                    threaten the athlete’s health.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="Japan">
                <Card.Header className="d-flex-align-itenms">
                  <img
                    src={JapanFlag}
                    alt="Japan Flag"
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  Japan
                </Card.Header>
                <Card.Body>
                  <Card.Text className="card-text">
                    Mandated heart screenings for schoolchildren in Japan show
                    progress in reducing sudden deaths.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="country-subheader2">
            <p className="country-subheader-text2">What about the USA?</p>
          </div>
          <Row xs={1} md={1} lg={2} className="g-4 justify-content-center">
            <Col>
              <Card className="Italy">
                <Card.Header className=" d-flex-align-itenms">
                  <img
                    src={USAFlag}
                    alt="USA FLAG"
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  USA
                </Card.Header>
                <Card.Body>
                  <Card.Text className="card-text">
                    Currently, heart screenings (ECGs) are not mandated for high
                    schools or college athletes and students but are required
                    for many professional athletic organizations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="DYK">
                <Card.Body>
                  <Card.Text className="dyk-card-text">
                    Japan and Italy have reported that mandated heart screenings
                    can reduce sudden cardiac death by up to 60% and 89%.
                    respectively.
                  </Card.Text>
                </Card.Body>
              </Card>
              {
                <img
                  className="Instructor"
                  src={Instructor}
                  alt="heart"
                  width={60}
                  height={60}
                />
              }{" "}
            </Col>
          </Row>
        </Col>
        <p className="country-bottom-text">
          Want to take care of your heart and <br />
          have a heart healthy lifestyle?
          <div className="country-link">
            <button onClick={handleClickOnHeartFacts} className="countries-bottom-btn">Click here </button>
            to listen to our professionals!
          </div>
        </p>
      </div>
    </section>
  );
};

export default CountriesWScreening;
