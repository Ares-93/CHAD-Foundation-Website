import React from "react";
import GiftOfArtNavigation from "../GiftOfArtNavigation";
import './Books.css';

const Books = () => {
  return (
    <section className="books">
      <GiftOfArtNavigation currentPage="books" />
      <h1>hello Books</h1>
    </section>
  );
};
export default Books;
