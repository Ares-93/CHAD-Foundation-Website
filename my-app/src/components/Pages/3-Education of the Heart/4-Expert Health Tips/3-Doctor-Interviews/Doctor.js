import React from "react";
import "./Doctor.css";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import NutritionistImg from "../../../../../images/EduOfHeart-Images/Nutritionist.jpg";
import PhysicianImg from "../../../../../images/EduOfHeart-Images/Physician.jpg";
import ExerciseImg from "../../../../../images/EduOfHeart-Images/moveHealthy.jpg";

const professionalsData = [
  {
    imgSrc: NutritionistImg,
    imgAlt: "A nutritionist explaining a healthy eating plan",
    title: "Eat Healthy",
    role: "Nutritionist",
    topic: "Heart-Healthy Diet Tips",
  },
  {
    imgSrc: PhysicianImg,
    imgAlt: "A physician talking with a patient",
    title: "Live Healthy",
    role: "Physician",
    topic: "General Heart Health Advice",
  },
  {
    imgSrc: ExerciseImg,
    imgAlt: "A person doing a yoga pose outdoors",
    title: "Move Healthy",
    role: "Exercise Physiologist",
    topic: "Heart-Healthy Exercises",
  },
];

const Doctor = () => {
  const handleArchiveClick = () => {
    console.log("View Doctor Interviews Archive clicked!");
  };

  return (
    <section className="doctors-section">
      <div className="main-container">
        <div className="doctors-header-box">
          <img src={HeartIcon} alt="Heart icon" width={60} height={60} />
          <h2 className="doctors-header">Heart-Healthy Professionals</h2>
        </div>
        <p className="doctors-intro-text">
          Learn from our experts in nutrition, heart health, and exercise to
          help you live a heart-healthy life.
        </p>

        <Row xs={1} md={2} lg={3} className="g-4">
          {professionalsData.map((prof, index) => (
            <Col key={index} className="d-flex align-items-stretch">
              <Card className="doctor-card">
                <Card.Img variant="top" src={prof.imgSrc} alt={prof.imgAlt} />
                <Card.Body>
                  <Card.Title className="doctor-card-title">
                    {prof.title}
                  </Card.Title>
                  <div className="doctor-details">
                    <p className="doctor-role">{prof.role}</p>
                    <p className="doctor-topic">{prof.topic}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <button className="doctors-btn" onClick={handleArchiveClick}>
          View Doctor Interviews Archive
        </button>
      </div>
    </section>
  );
};

export default Doctor;
