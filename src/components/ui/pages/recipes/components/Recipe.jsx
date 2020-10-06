import React, { useState, useContext, useEffect } from "react";
import RecipeDetails from "./RecipeDetails";
import instance from "../../../../../axios/instance";
import { Popup } from "semantic-ui-react";
import firebase from "firebase";
import { FavoritesContext } from "../../../../../contexts/FavoritesContext";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;
  const favorites = useContext(FavoritesContext);

  const [recipeIsInMyFavorites, setRecipeIsInMyFavorites] = useState(false);
  useEffect(() => {
    setRecipeIsInMyFavorites(
      favorites.some((favorite) => favorite.recipe.uri === recipe.recipe.uri)
    );
  }, [favorites, recipe.recipe.uri]);

  const uid = firebase.auth().currentUser.uid;
  const addToFavorites = () => {
    instance.post(`users/${uid}/favorites.json`, recipe).then((response) => {
      console.log(response);
      alert("This recipe has been added to your favorites' list");
    });
  };
  const noop = () => {
    alert("This recipe is already a favorite");
  };

  return (
    <>
      <div className="recipe">
        <h2>
          {label}
          <Popup
            trigger={
              <i
                className="fa fa-heart"
                style={{
                  fontSize: "30px",
                  color: recipeIsInMyFavorites ? "red" : "white",
                  right: "10px",
                  position: "absolute",
                  top: "50%",
                  mTransform: "translateY(-50%)",
                  transform: "translateY(-50%)"
                   }}
                onClick={() =>
                  recipeIsInMyFavorites ? noop() : addToFavorites()
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
