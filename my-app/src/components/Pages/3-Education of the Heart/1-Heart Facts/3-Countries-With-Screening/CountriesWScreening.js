// CountriesWScreening.js
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
        <div className="country-col">
          <div className="country-header-box">
            <img src={HeartIcon} alt="heart" width={60} height={60} />
            <h2 className="country-header">
              Countries that require Heart Screenings
            </h2>
          </div>

          <div className="country-subheader">
            <span className="country-subheader-text">
              Countries that require heart screenings
            </span>
          </div>

          <Row xs={1} md={2} className="g-4 justify-content-center">
            <Col>
              <Card className="Italy">
                <Card.Header className="country-card-header">
                  <img
                    src={ItalyFlag}
                    alt="Italy Flag"
                    className="flag-icon"
                  />
                  <span>Italy</span>
                </Card.Header>
                <Card.Body>
                  <Card.Text className="country-card-text">
                    Italian law mandates that every competitive athlete must
                    undergo annual preparticipation evaluation to identify
                    cardiovascular diseases that pose a risk of sudden death
                    during sport and other conditions that may threaten the
                    athlete’s health.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="Japan">
                <Card.Header className="country-card-header">
                  <img
                    src={JapanFlag}
                    alt="Japan Flag"
                    className="flag-icon"
                  />
                  <span>Japan</span>
                </Card.Header>
                <Card.Body>
                  <Card.Text className="country-card-text">
                    In 2015, Japan established a nation-wide school-based heart
                    screening system including ECG screening to aid in prevention
                    of sudden cardiac death in the young. SCD has decreased
                    since the program started. CHD, HCM, Kawasaki disease, WPW,
                    Long QT syndrome, and Brugada-like ECG patterns have been
                    detected. Mandated screenings help identify high-risk youth
                    and are considered for cost-effectiveness.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="country-subheader country-subheader2">
            <span className="country-subheader-text2">What about the USA?</span>
          </div>

          <Row xs={1} md={2} className="g-4 justify-content-center">
            <Col>
              <Card className="USA">
                <Card.Header className="country-card-header">
                  <img src={USAFlag} alt="USA Flag" className="flag-icon" />
                  <span>USA</span>
                </Card.Header>
                <Card.Body>
                  <Card.Text className="country-card-text">
                    Currently, heart screenings are not mandated for high school
                    or college athletes and students, but are required by many
                    professional organizations. The NBA has standardized heart
                    screenings including echocardiogram, and the NFL requires
                    ECGs and has considered adding echocardiograms to detect
                    heart problems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="DYK">
                <Card.Body>
                  <Card.Text className="dyk-card-text">
                    Japan and Italy have reported that mandated heart screenings
                    can reduce sudden cardiac death by up to 60 percent and
                    89 percent respectively.
                  </Card.Text>
                </Card.Body>
              </Card>

              <img className="Instructor" src={Instructor} alt="NB!" />
            </Col>
          </Row>
        </div>

        <p className="country-bottom-text">
          Want to take care of your heart and <br />
          have a heart healthy lifestyle?
          <span className="country-link">
            <button
              onClick={handleClickOnHeartFacts}
              className="countries-bottom-btn"
            >
              Click here
            </button>{" "}
            to listen to our professionals!
          </span>
        </p>
      </div>
    </section>
  );
};

export default CountriesWScreening;
