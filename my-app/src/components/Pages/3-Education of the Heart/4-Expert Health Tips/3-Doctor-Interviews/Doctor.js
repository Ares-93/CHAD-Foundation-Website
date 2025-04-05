import React from "react";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import "./Doctor.css";
import { Card, Row, Col } from "react-bootstrap";
import Doc1 from "../../../../../images/EduOfHeart-Images/Nutritionist.jpg";
import Doc2 from "../../../../../images/EduOfHeart-Images/Physician.jpg";
import Doc3 from "../../../../../images/EduOfHeart-Images/moveHealthy.jpg";

const Doctor = () => {
  return (
    <section className="doctors">
      <div className="main-container">
        <div className="doctor-header-box">
          <img src={HeartIcon} alt="heart" width={60} height={60} />
          <h2 className="doctor-header">Heart Healthy Professionals</h2>
        </div>
        <p className="card-text">
          Learn from our experts in nutrition, heart health, and exercise to
          help you live a heart-healthy life.
        </p>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="doctor-card">
              <Card.Img src={Doc1} alt="Nutritionist" />
              <Card.Body>
                <Card.Title className="title">Eat Healthy</Card.Title>
                <Card.Text className="doctor-details">
                  <p className="text1">Nutritionist</p>
                  <p className="text2">Heart-Healthy Diet Tips</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="doctor-card">
              <Card.Img src={Doc2} alt="Physician" />
              <Card.Body>
                <Card.Title className="title">Live Healthy</Card.Title>
                <Card.Text className="doctor-details">
                  <p className="text1">Physician</p>
                  <p className="text2">General Heart Health Advice</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="doctor-card">
              <Card.Img src={Doc3} alt="Exercise Physiologist" />
              <Card.Body>
                <Card.Title className="title">Move Healthy</Card.Title>
                <Card.Text className="doctor-details">
                  <p className="text1">Exercise Physiologist</p>
                  <p className="text2">Heart-Healthy Exercises</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <button className="doctor-btn">View Doctor Interviews Archive</button>
      </div>
    </section>
  );
};

export default Doctor;
