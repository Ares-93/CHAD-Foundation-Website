import React from "react";
import { useNavigate } from "react-router-dom";
import "./Winners.css";
import GiftOfArtNavigation from "../../GiftOfArtNavigation";

const Winners = () => {
  const navigate = useNavigate();

  return (
    <section className="Winners">
      <GiftOfArtNavigation currentPage="scholarship" />
      <h1>hello world</h1>
      <button
        onClick={() => navigate("/gift-of-art/scholarship")}
        className="exit-winners-button"
      >
        Exit Winners
      </button>
    </section>
  );
};

export default Winners;
