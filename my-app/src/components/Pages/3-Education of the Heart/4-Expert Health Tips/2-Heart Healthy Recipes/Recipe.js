import React from "react";
import "./Recipe.css";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import VegImg from "../../../../../images/EduOfHeart-Images/Vegitarain Enchilada.png";
import Healthy from "../../../../../images/EduOfHeart-Images/oven-baked-salmon-recipe-5.png";
import Snacks from "../../../../../images/EduOfHeart-Images/Yogurt.png";

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
              <a
                href="https://www.foodnetwork.com/recipes/food-network-kitchen/vegetarian-enchiladas-3364279"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img src={VegImg} alt="Veg Options" />
              </a>
              <Card.Body>
                <Card.Title className="title">Vegetarian</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="Healthy">
              <Card.Img src={Healthy} alt="non-veg" />
              <Card.Body>
                <Card.Title className="title">Heart Healthy Diet</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="Snacks">
              <Card.Img src={Snacks} alt="Snacks" />
              <Card.Body>
                <Card.Title className="title"> Heart Healthy Snacks</Card.Title>
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
