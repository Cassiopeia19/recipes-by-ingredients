import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import instance from '../../../../../axios/instance'
import { Popup } from "semantic-ui-react";

const Recipe = ({ recipe }) => {
const [show, setShow] = useState(false);
const { label,image, url, ingredients } = recipe.recipe;

  return (
    <>
      <div className="recipe">
        <h2>
          {label}
          <Popup
            trigger={
              <i
                className="fa fa-heart"
                style={{ fontSize: "30px", color: "red", float: "right" }}
                onClick={() =>
                  instance.post("./favorites.json", recipe).then((response) => {
                    console.log(response);
                    alert("This recipe has been added to your favorites' list");
                  })
                }
              />
            }
            content="Click to favorite recipe"
            position="top left"
            style={{
              backgroundColor: "#FAD5DF",
              color: "black",
              fontSize: "20px",
            }}
          />
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
