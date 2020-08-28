import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label,image, url, ingredients } = recipe.recipe;

  return (
    <>
      <div className="recipe">
        <h2>
          {label}
          <i
            className="fa fa-heart-o"
            style={{ fontSize: "30px", color: "red", float: "right" }}
          ></i>
        </h2>
        <img src={image} alt={label} />
        <a href={url} target="_blank" rel="noopener noreferrer">
          Recipe
        </a>
        <button onClick={() => setShow(!show)}>Ingredients</button>
        {show && <RecipeDetails ingredients={ingredients} />}
      </div>
    </>
  );
};

export default Recipe;
