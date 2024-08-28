import React from "react";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import "./Doctor.css";
import { Card, Row, Col } from "react-bootstrap";
import Doc1 from "../../../../../images/EduOfHeart-Images/Doc1.png";
import Doc2 from "../../../../../images/EduOfHeart-Images/Doc2.png";
import Doc3 from "../../../../../images/EduOfHeart-Images/Doc3.png";

const Doctor = () => {
  return (
    <section className="doctors">
      <div className="main-container">
        <div className="doctor-header-box">
          {<img src={HeartIcon} alt="heart" width={60} height={60} />}
          <h2 className="doctor-header">Heart Healthy Professionals</h2>
        </div>
        <p className="card-text">
          Healthy living starts with a healthy diet. Here are our favorite
          recipes for the month.
        </p>
        <Row xd={1} md={3} className="g-4 ">
          <Col>
            <Card className="doc1-text">
              <Card.Img src={Doc1} alt="doc1" />
              <Card.Body>
                <Card.Title className="title">
                  How to Improve your heart health!
                  <Card.Text className="doc1-text">
                    <p className="text1">Doctor’s name</p>
                    <p className="text2">March 2023</p>
                  </Card.Text>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="doc2-text">
              <Card.Img src={Doc2} alt="doc2" />
              <Card.Body>
                <Card.Title className="title">
                  How to Improve your heart health!
                  <Card.Text className="doc2-text">
                    <p className="text1">Doctor’s name</p>
                    <p className="text2">April 2023</p>
                  </Card.Text>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="doc3-text">
              <Card.Img src={Doc3} alt="doc3" />
              <Card.Body>
                <Card.Title className="title">
                  How to Improve your heart health!
                  <Card.Text className="doc3-text">
                    <p className="text1">Doctor’s name</p>
                    <p className="text2">May 2023</p>
                  </Card.Text>
                </Card.Title>
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
