import React from "react";
import "./HowWeHelp.css";
import { Row, Col, Container } from "react-bootstrap";
import HeartImg1 from "../../../../images/HomePage-Images/heart-img-1.png";
import HeartImg2 from "../../../../images/HomePage-Images/heart-img-2.png";
import { useNavigate } from "react-router-dom";

function HowWeHelp() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="howWeHelp">
      <div className="main-container">
        {/* Education of the Heart */}
        <Container fluid>
          <div className="education-of-the-heart">
            <h1 className="howWeHelp-header">
              How We Help: Education of the Heart
            </h1>
            <hr className="howWeHelp-education-line" />

            <Row className="howWeHelp-row">
              <Col md={4} className="howWeHelp-card">
                <p className="howWeHelp-card-text">
                  Everything you need to know about your heart health
                </p>
                <img
                  src={HeartImg1}
                  alt="Heart"
                  className="howWeHelp-heart-img"
                />
              </Col>
              <Col md={8}>
                <div className="howWeHelp-wrap-div">
                  <Row>
                    <Col md={6}>
                      {/* Heart Facts */}
                      <div className="howWeHelp-card-right">
                        <button
                          className="howWeHelp-wrap-button"
                          onClick={() =>
                            handleNavigation(
                              "/education-of-the-heart/heart-fact-page"
                            )
                          }
                        >
                          Heart Facts
                        </button>
                        <p className="howWeHelp-wrap-p">
                          Sudden Cardiac Death statistics and warning signs.
                        </p>
                      </div>
                      {/* Screenings */}
                      <div className="howWeHelp-card-right">
                        <button
                          className="howWeHelp-wrap-button"
                          onClick={() =>
                            handleNavigation(
                              "/education-of-the-heart/screening-home"
                            )
                          }
                        >
                          Screenings
                        </button>
                        <p className="howWeHelp-wrap-p">
                          Early detection can identify unknown heart anomalies.
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      {/* Emergencies */}
                      <div className="howWeHelp-card-right">
                        <button
                          className="howWeHelp-wrap-button"
                          onClick={() =>
                            handleNavigation(
                              "/education-of-the-heart/emergency-main"
                            )
                          }
                        >
                          Emergencies
                        </button>
                        <p className="howWeHelp-wrap-p">
                          What to do in an emergency, lifesaving tools—CPR and
                          AEDs.
                        </p>
                      </div>
                      {/* Expert Health Tips */}
                      <div className="howWeHelp-card-right">
                        <button
                          className="howWeHelp-wrap-button"
                          onClick={() =>
                            handleNavigation(
                              "/education-of-the-heart/tips-main"
                            )
                          }
                        >
                          Expert Health Tips
                        </button>
                        <p className="howWeHelp-wrap-p">
                          Advice from professionals to live a healthy life.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        {/* Gift of Art */}
        <Container fluid>
          <div className="gift-of-art">
            <h1 className="howWeHelp-header howWeHelp-header-second">
              How We Help: Gift of Art
            </h1>
            <hr className="howWeHelp-art-line" />

            <Row className="howWeHelp-row">
              <Col md={4} className="howWeHelp-card  howWeHelp-card-second">
                <p className="howWeHelp-card-text">
                  Nourishing the heart through art and storytelling
                </p>
                <img
                  src={HeartImg2}
                  alt="Heart"
                  className="howWeHelp-heart-img"
                />
              </Col>
              <Col md={8}>
                <div className="howWeHelp-wrap-div">
                  <Row>
                    <Col md={6}>
                      {/* Scholarships */}
                      <div className="howWeHelp-card-right">
                        <button
                          className="howWeHelp-wrap-button"
                          onClick={() =>
                            handleNavigation("/gift-of-art/scholarship")
                          }
                        >
                          Scholarships
                        </button>
                        <p className="howWeHelp-wrap-p">
                          Helping young people make their dreams happen.
                        </p>
                      </div>
                      {/* Plays */}
                      <div className="howWeHelp-card-right">
                        <button
                          className="howWeHelp-wrap-button"
                          onClick={() => handleNavigation("/gift-of-art/plays")}
                        >
                          Plays
                        </button>
                        <p className="howWeHelp-wrap-p">
                          Learning experiences through storytelling and live
                          theatre.
                        </p>
                      </div>
                      {/* Films */}
                      <div className="howWeHelp-card-right">
                        <button
                          className="howWeHelp-wrap-button"
                          onClick={() => handleNavigation("/gift-of-art/films")}
                        >
                          Films
                        </button>
                        <p className="howWeHelp-wrap-p">
                          Films with eye-opening messages.
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      {/* Books */}
                      <div className="howWeHelp-card-right">
                        <button
                          className="howWeHelp-wrap-button"
                          onClick={() => handleNavigation("/gift-of-art/books")}
                        >
                          Books
                        </button>
                        <p className="howWeHelp-wrap-p">
                          Stories that awaken, challenge and nourish the spirit.
                        </p>
                      </div>
                      {/* Events */}
                      <div className="howWeHelp-card-right">
                        <button
                          className="howWeHelp-wrap-button"
                          onClick={() =>
                            handleNavigation("/gift-of-art/upcoming-events")
                          }
                        >
                          Events
                        </button>
                        <p className="howWeHelp-wrap-p">
                          Classic Concerts, the Chad Dance, “Life is a Gift”
                          Safe Drivers’ Campaign.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HowWeHelp;
