import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import {useHistory} from 'react-router-dom'

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label,image, url, ingredients } = recipe.recipe;
  const history = useHistory();

  return (
    <>
      <div className="recipe">
        <h2>{label}</h2>
        <img src={image} alt={label} />
        <a href={url} target="_blank" rel="noopener noreferrer">
          Recipe
        </a>
        <i
          className="fa fa-heart-o"
          style={{ fontSize: "36px", color: "red", float: "right" }}
          onClick={() => {
             history.push("/favorites");}}
        ></i>
        {/* <button
          onClick={() => {
            history.push("/favorites");
          }}
        >
          Add to Favorites
        </button> */}
        <button onClick={() => setShow(!show)}>Ingredients</button>
        {show && <RecipeDetails ingredients={ingredients} />}
      </div>
    </>
  );
};

export default Recipe;
