import React from "react";
import EduOfTheHeartNav from "../../EduOfTheHeartNav";
import "./Rotm.css";
import { Card, Row, Col } from "react-bootstrap";
import FeaturedRecipeImg from "../../../../../images/EduOfHeart-Images/Featured.jpg";

const RecipeOfTheMonth = () => {
  return (
    <section className="tips">
      <EduOfTheHeartNav currentPage="expert-health-tips" />
      <div className="main-container">
        <div className="tips-header-box">
          <h2 className="tips-header">Recipe of the Month</h2>
        </div>
        <p className="card-text">
          This month's featured recipe is a delicious and heart-healthy gourmet
          dish perfect for any occasion.
        </p>
        <Row xd={1} md={3} className="g-4 ">
          <Col>
            <Card className="featured-recipe">
              <Card.Img
                src={FeaturedRecipeImg}
                alt="Quinoa and Vegetable Stuffed Peppers"
              />
              <Card.Body>
                <Card.Title className="title">
                  Quinoa and Vegetable Stuffed Peppers
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <button className="recipe-btn">View Full Recipe</button>
      </div>
    </section>
  );
};

export default RecipeOfTheMonth;
