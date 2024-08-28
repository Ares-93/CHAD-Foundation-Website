import React from "react";
import "./Recipe.css";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import VegImg from "../../../../../images/EduOfHeart-Images/Vegg.png";
import Burger from "../../../../../images/EduOfHeart-Images/Burger.png";
import Allergen from "../../../../../images/EduOfHeart-Images/Allergen.png";

const Recipe = () => {
  return (
    <section className="tips">
      <div className="main-container">
        <div className="tips-header-box">
          {<img src={HeartIcon} alt="heart" width={60} height={60} />}
          <h2 className="tips-header">Hearth Healthy Recipes</h2>
        </div>
        <p className="card-text">
          Healthy living starts with a healthy diet. Here are our favorite
          recipes for the month.
        </p>
        <Row xd={1} md={3} className="g-4 ">
          <Col>
            <Card className="salad">
              <Card.Img src={VegImg} alt="Veg Options" />
              <Card.Body>
                <Card.Title className="title">Vegetarian Option</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="burger">
              <Card.Img src={Burger} alt="non-veg" />
              <Card.Body>
                <Card.Title className="title">Non-Restrictive Diet</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="allergen">
              <Card.Img src={Allergen} alt="allergen" />
              <Card.Body>
                <Card.Title className="title">Allergen-Free Option</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <button className="recipe-btn">View Recipe Archive</button>
      </div>
    </section>
  );
};

export default Recipe;
