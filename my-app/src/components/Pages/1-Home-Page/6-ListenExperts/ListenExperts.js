import React from "react";
import "./ListenExperts.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import ExpertsVector from "../../../../images/HomePage-Images/experts-vector.png";
import ExpertsRecipeImg from "../../../../images/HomePage-Images/experts_recipe.png";
import ExpertsDoctorsImg from "../../../../images/HomePage-Images/experts_doctors.png";



function ListenExperts() {
  return (
    <section className="listenExperts">
      <div className="main-container">
        <h2>Listen to the Experts:</h2>
        <Container>
          <Row className="align-items-center experts-row">
            {/* Section One */}
            <Col xs={12} md={4}>
              <div className="my-3">
                <Image src={ExpertsVector} className="my-3 experts-vector" />
              </div>
              <h3 className="experts-h3 experts-h3-orange">
                Love your heart <br className="experts-h3-orange-br" /> with
                delicious recipes and expert advice!
              </h3>
            </Col>

            {/* Section Two */}
            <Col xs={12} md={4} className="experts-second-col">
              <h3 className="experts-h3">Recipe of the Month</h3>
              <Image src={ExpertsRecipeImg} className="experts-img my-3" />
              <h4 className="experts-h4">Healthy Diet – Healthy Heart!</h4>
              {/* <p className="experts-p">Vegetarian Option</p> */}
            </Col>

            {/* Section Three */}
            <Col xs={12} md={4}>
              <h3 className="experts-h3">Doctor’s interview</h3>
              <Image src={ExpertsDoctorsImg} className="experts-img my-3" />
              <h4 className="experts-h4">How to improve your heart health!</h4>
              {/* <p className="experts-p">
                Doctor's name <span className="experts-span">---</span> March,
                2023
              </p> */}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default ListenExperts;
