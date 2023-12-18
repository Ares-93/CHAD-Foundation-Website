import React from "react";
import "./Board.css";
import AboutUsNavigation from "../AboutUsNavigation";

const Board = () => {
  return (
    <section className="Board">
      <AboutUsNavigation currentPage="board" />
      <h3>Board</h3>
    </section>
  );
};
export default Board;
