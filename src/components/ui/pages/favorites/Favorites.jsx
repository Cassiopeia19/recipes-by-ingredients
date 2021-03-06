import React, { useState, useContext }  from "react";
import favoritesHero from "../../../../assets/images/recipe26.jpg";
import Hero from "../../../../Hero";
import "./Favorites.css";
import Favorite from "./Favorite";
import { v4 as uuidv4 } from "uuid";
import Spinner from '../../../spinner/Spinner'
import {FavoritesContext} from '../../../../contexts/FavoritesContext.js'
import Header from "../../../../containers/header/Header";

function Favorites() {
  // eslint-disable-next-line no-unused-vars
  const [isLoaded, setIsLoaded] = useState(true);
  const favoritesContext = useContext(FavoritesContext);
  const {favorites} = favoritesContext;
    
  console.log("favorites: ", favorites);

  if (!isLoaded) {
    return <Spinner />;
  } else {
    return (
      <>
      <Header />
        <Hero
          title="your favorites!"
          className="text-title"
          img={favoritesHero}
        />
        <div className="Favorites">
          <div className="favorites">
            {!favorites.length && <p>No favorites :(</p>}
            {favorites !== [] &&
              favorites.map((recipe) => (
                <Favorite key={uuidv4()} recipe={recipe} />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default Favorites;
