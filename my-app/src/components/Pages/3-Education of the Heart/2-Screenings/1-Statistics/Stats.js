import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import DocHeart from "../../../../../images/EduOfHeart-Images/DocHeart.png";
import "./Stats.css";
import { useNavigate } from "react-router-dom";

const Stats = () => {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    navigate("/screenings-gallery", {
      state: { from: "/education-of-the-heart/screening-home" },
    });
  };

  const handleExploreClick = () => {
    navigate("/resources/sca-and-training-resources");
  };

  return (
    <section className="StatsSection">
      <div className="main-container">
        <div className="stats-header-box">
          <img src={HeartIcon} alt="doc-heart" width={60} height={60} />
          <h2 className="stats-header">Statistics Of Our Heart Screenings</h2>
        </div>
        <div className="stats-content">
          <Row xs={1} md={1} lg={3} className="g-4 justify-content-center">
            {/* Card-1 */}
            <Col>
              <Card className="stats-card">
                <Card.Body>
                  <img src={DocHeart} alt="Heart-2" className="stats-icon" />
                  <div className="stats-card-title-box">
                    <Card.Title className="stats-card-title">10,000</Card.Title>
                  </div>
                  <Card.Text className="stats-card-text">
                    Heart screenings for athletes and students were provided by
                    CHAD.
                    <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Card-2 */}
            <Col>
              <Card className="stats-card">
                <Card.Body>
                  <img src={DocHeart} alt="DocHeart" className="stats-icon" />
                  <div className="stats-card-title-box">
                    <Card.Title className="stats-card-title">10-20%</Card.Title>
                  </div>
                  <Card.Text className="stats-card-text">
                    of athletes screened had heart anomalies detected
                    <br />
                    <span className="stats-card-text-transparent">
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                      ipsum
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Card-3 */}
            <Col>
              <Card className="stats-card">
                <Card.Body>
                  <img src={DocHeart} alt="DocHeart" className="stats-icon" />
                  <div className="stats-card-title-box">
                    <Card.Title className="stats-card-title">1 in 3</Card.Title>
                  </div>
                  <Card.Text className="stats-card-text">
                    students were at risk for hypertension, obesity, diabetes,
                    high cholesterol, and/or heart abnormalities
                    <br />
                    <span className="stats-card-text-transparent">
                      lorem ipsum
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="stats-expert-text">
          To see pictures of CHAD Heart Screenings at work, click below.
          <br />
        </div>
        <div className="stats-gallery-btns">
          <button
            className="stats-gallery-btn screenings-btn"
            onClick={handleGalleryClick}
          >
            Gallery - CHAD Heart Screenings
          </button>
          <button
            className="stats-gallery-btn explore-btn"
            onClick={handleExploreClick}
          >
            Resources for SCA Preventive Screenings
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
