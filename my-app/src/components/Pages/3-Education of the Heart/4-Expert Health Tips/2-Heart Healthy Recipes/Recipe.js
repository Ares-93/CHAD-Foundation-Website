import React from "react";
import "./Recipe.css";
import { Card, Row, Col } from "react-bootstrap";
import HeartIcon from "../../../../../images/EduOfHeart-Images/edu-of-heart-icon.png";
import VegImg from "../../../../../images/EduOfHeart-Images/Veg.png";
import BurgerImg from "../../../../../images/EduOfHeart-Images/Burger.png";
import SnackImg from "../../../../../images/EduOfHeart-Images/Snack.png";

const recipeData = [
  {
    imgSrc: VegImg,
    imgAlt: "A plate of vegetarian quesadillas",
    title: "VEGETARIAN",
    text: "Scrumptious Veggie Quesadillas",
    url: "https://www.allrecipes.com/gallery/vegetarian-kid-recipes/",
  },
  {
    imgSrc: BurgerImg,
    imgAlt: "A black bean burger on a bun",
    title: "HEART-HEALTHY MAIN COURSE",
    text: "Sizzling Black Bean Burgers",
    url: "https://www.allrecipes.com/recipe/85452/homemade-black-bean-veggie-burgers/",
  },
  {
    imgSrc: SnackImg,
    imgAlt: "A bowl of guacamole with tortilla chips and vegetables",
    title: "HEALTHY DELICIOUS SNACKS",
    text: "Guacamole, veggies, and tortilla chips",
    url: "https://www.healthline.com/nutrition/snacks-for-teens#premade",
  },
];

const Recipe = () => {
  const handleArchiveClick = () => {
    // This would navigate to a full recipe archive page.
    console.log("View Recipe Archive clicked!");
  };

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="recipe-section">
      <div className="main-container">
        <div className="recipe-header-box">
          <img src={HeartIcon} alt="Heart icon" width={60} height={60} />
          <h2 className="recipe-header">Heart-Healthy Recipes</h2>
        </div>
        <p className="recipe-intro-text">
          Healthy living starts with a healthy diet. Here are our favorite
          recipes to get you started.
        </p>

        <Row xs={1} md={2} lg={3} className="g-4">
          {recipeData.map((recipe, index) => (
            <Col key={index}>
              <Card
                className="recipe-card"
                onClick={() => openLink(recipe.url)}
              >
                <Card.Img
                  variant="top"
                  src={recipe.imgSrc}
                  alt={recipe.imgAlt}
                />
                <Card.Body>
                  <Card.Title className="recipe-card-title">
                    {recipe.title}
                  </Card.Title>
                  <Card.Text className="recipe-card-text">
                    {recipe.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <button className="recipe-btn" onClick={handleArchiveClick}>
          View Recipe Archive
        </button>
      </div>
    </section>
  );
};

export default Recipe;
