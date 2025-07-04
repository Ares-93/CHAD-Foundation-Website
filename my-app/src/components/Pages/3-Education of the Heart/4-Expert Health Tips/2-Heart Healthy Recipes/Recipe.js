import React from "react";
import "./Recipe.css";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import VegImg from "../../../../../images/EduOfHeart-Images/Veg.png";
import Burger from "../../../../../images/EduOfHeart-Images/Burger.png";
import Snack from "../../../../../images/EduOfHeart-Images/Snack.png";

const Recipe = () => {
  const handleVegClick = () =>
    window.open(
      "https://www.allrecipes.com/gallery/vegetarian-kid-recipes/",
      "_blank"
    );
  const handleBurgerClick = () =>
    window.open(
      "https://www.allrecipes.com/gallery/vegetarian-kid-recipes/",
      "_blank"
    );
  const handleSnackClick = () =>
    window.open(
      "https://www.healthline.com/nutrition/snacks-for-teens#premade.com",
      "_blank"
    );

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
            <Card className="recipe-card salad" onClick={handleVegClick}>
              <Card.Img src={VegImg} alt="Veg Options" />
              <Card.Body>
                <Card.Title className="title">VEGETERIAN</Card.Title>
                <Card.Text>Scrumptious Veggie Quesadillas</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="recipe-card burger" onClick={handleBurgerClick}>
              <Card.Img src={Burger} alt="non-veg" />
              <Card.Body>
                <Card.Title className="title">
                  HEARTY HEALTHY MAIN COURSE
                </Card.Title>
                <Card.Text>Sizzling Black Bean Burgers</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="recipe-card snack" onClick={handleSnackClick}>
              <Card.Img src={Snack} alt="snack" />
              <Card.Body>
                <Card.Title className="title">
                  HEALTHY DELICIOUS SNACKS
                </Card.Title>
                <Card.Text>
                  Guacamole, veggies, and tortilla chips (nut-free)
                </Card.Text>
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
