import React, { useState } from "react";
import RecipeDetails from "../recipes/components/RecipeDetails";
import { Popup } from "semantic-ui-react";
import { db } from "../../../../base";
import firebase from 'firebase'

const Favorite = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;
  const uid = firebase.auth().currentUser.uid;

  return (
    <>
      <div className="favorite">
        <h2>
          {label}
          <Popup
            trigger={
              <i
                className="fa fa-trash-o"
                aria-hidden="true"
                style={{ 
                 fontSize: "30px", 
                 color: "black",
                 right: "10px",
                 position: "absolute",
                 top: "50%",
                 mTransform: "translateY(-50%)",
                 transform: "translateY(-50%)"
                   }}
                onClick={async () => {
                  const result = await db
                    .ref(`users/${uid}/favorites/${recipe.id}`)
                    .remove();
                  console.log(result, recipe.id);
                  alert(
                    "The recipe has been removed from your favorites' list"
                  );
                }}
              />
            }
            content="Click to remove recipe"
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
        {show && <RecipeDetails ingredients={Object.values(ingredients)} />}
      </div>
    </>
  );
};
export default Favorite;
