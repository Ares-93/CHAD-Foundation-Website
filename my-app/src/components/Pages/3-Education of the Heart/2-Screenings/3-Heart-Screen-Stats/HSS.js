import React from "react";
import "./HSS.css";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import HeartScreen from "../../../../../images/EduOfHeart-Images/HeartScreen.png";

const HSS = () => {
  return (
    <section className="hss-section">
      <div className="main-container">
        <div className="hss-header-box">
          <img src={HeartIcon} alt="heart" width={60} height={60} />
          <h2 className="hss-header">Heart Screen Statistics</h2>
        </div>

        <Row xs={1} lg={2} className="hss-two-col g-4">
          {/* Left Column for Cards */}
          <Col lg={8} className="hss-left">
            <Row xs={1} md={2} className="g-4">
              <Col>
                <Card className="hss-card">
                  <Card.Header className="hss-card-header">
                    EARLY SCREENINGS
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className="hss-card-text">
                      Can identify unknown heart anomalies and help prevent
                      death and identify early cardiovascular risk factors in
                      young people.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="hss-card">
                  <Card.Header className="hss-card-header">
                    HIGH CHOLESTEROL
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className="hss-card-text">
                      An estimated 50% of children and adolescents ages 6 to
                      19 have cholesterol levels that are not ideal, while 25%
                      are in the high range clinically, in a 2019 study.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="hss-card">
                  <Card.Header className="hss-card-header">OBESITY</Card.Header>
                  <Card.Body>
                    <Card.Text className="hss-card-text">
                      Over 390 million children and adolescents aged 5–19 years
                      were overweight in 2022.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="hss-card">
                  <Card.Header className="hss-card-header">DIABETES</Card.Header>
                  <Card.Body>
                    <Card.Text className="hss-card-text">
                      About 352,000 Americans under age 20 are estimated to
                      have diagnosed diabetes; 122,780 children and young
                      adults have type 2 diabetes.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* Right Column for Image */}
          <Col lg={4} className="hss-right">
            <div className="img-box">
              <img src={HeartScreen} alt="Heart Screening" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HSS;