import React from "react";
import RecipeOfTheMonth from "../1-Recipe of the Month/Rotm";
import Recipe from "../2-Heart Healthy Recipes/Recipe";
import Doctor from "../3-Doctor-Interviews/Doctor";
import EduOfTheHeartNav from "../../EduOfTheHeartNav";

const Tips = () => {
  return (
    <section className="Tips-main">
      <EduOfTheHeartNav currentPage="tips-main" />
      <RecipeOfTheMonth />
      <Recipe />
      <Doctor />
    </section>
  );
};

export default Tips;
