import React from "react";
import "./Rotm.css";
import { Card } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import FeaturedRecipeImg from "../../../../../images/EduOfHeart-Images/Featured.jpg";

const RecipeOfTheMonth = () => {
  const handleViewRecipe = () => {
    // change when we have a recipe link
    console.log("View Full Recipe clicked!");
    // Example: window.open("/path-to-full-recipe", "_blank");
  };

  return (
    <section className="rotm-section">
      <div className="main-container">
        <div className="rotm-header-box">
          <img src={HeartIcon} alt="Heart icon" width={60} height={60} />
          <h2 className="rotm-header">Recipe of the Month</h2>
        </div>
        <p className="rotm-intro-text">
          This month's featured recipe is a delicious and heart-healthy gourmet
          dish perfect for any occasion.
        </p>

        <div className="rotm-card-container">
          <Card className="rotm-card">
            <Card.Img
              variant="top"
              src={FeaturedRecipeImg}
              alt="A bowl of quinoa and vegetable stuffed peppers"
            />
            <Card.Body>
              <Card.Title className="rotm-card-title">
                Quinoa and Vegetable Stuffed Peppers
              </Card.Title>
            </Card.Body>
          </Card>
        </div>

        <button className="rotm-btn" onClick={handleViewRecipe}>
          View Full Recipe
        </button>
      </div>
    </section>
  );
};

export default RecipeOfTheMonth;
