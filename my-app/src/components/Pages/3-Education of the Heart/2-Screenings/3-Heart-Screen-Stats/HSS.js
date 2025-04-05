import React from "react";
import "./HSS.css";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import HeartScreen from "../../../../../images/EduOfHeart-Images/HeartScreen.png";

const Importance = () => {
  return (
    <section className="hss-section">
      <div className="main-container">
        <div className="hss-header-box">
          {<img src={HeartIcon} alt="heart" width={60} height={60} />}{" "}
          <h2 className="hss-header">Heart Screen Statistics</h2>
        </div>

        <Row xs={1} md={1} lg={3} className="g-4 justify-content-left">
          <Col className="col-md-1 padd-0  ">
            <Card className="EarlyScreen">
              <Card.Header className="d-flex-align-items">
                EARLY SCREENINGS
              </Card.Header>

              <Card.Body>
                <Card.Text className="EarlyScreen-card-text">
                  can identify unknown heart<br></br> anomalies and help prevent
                  death and identify early cardiovascular Risk Factors in young
                  people.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="High-Col">
              <Card.Header className="d-flex-align-items">
                HIGH CHOLESTEROL
              </Card.Header>
              <Card.Body>
                <Card.Text className="High-Col-card-text">
                  an estimated 50% of children and adolescents ages 6 to 19 have
                  cholesterol levels that are not ideal, while 25% are in the
                  high range clinically, in a 2019 study.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-2 padding-0">
            <Card className="Obesity">
              <Card.Header className="d-flex-align-items">OBESITY</Card.Header>
              <Card.Body>
                <Card.Text className="obesity-card-text">
                  Over 390 million children and adolescents aged 5–19 years were
                  overweight in 2022.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="Diabetes">
              <Card.Header className="d-flex-align-items">DIABETES</Card.Header>

              <Card.Body>
                <Card.Text className="Diabetes-card-text">
                  About 352,000 Americans under age 20 are estimated to have
                  diagnosed diabetes; 122,780 children and young adults have
                  type 2 diabetes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="hs-img">
            <div className="img-box">
              <img src={HeartScreen} alt="HeartScreening" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Importance;
