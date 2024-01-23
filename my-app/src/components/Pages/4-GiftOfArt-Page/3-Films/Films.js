import React from "react";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import './Films.css';

const Films = () => {
  return (
    <section className="Films">
      <GiftOfArtNavigation currentPage="films" />
      <h1>hello Films</h1>
    </section>
  );
};
export default Films;
