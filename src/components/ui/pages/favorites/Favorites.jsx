import React from "react";
import favoritesHero from "../../../../assets/images/favoritesHero.jpg";
import Hero from "../../../../Hero";
import {FavoritesContext} from './context/favoritesContext'
import EmptyFavorites from './components/favorites/EmptyFavorites'
import FavoritesItem from "./components/favorites/FavoritesItem";
//import {UserContext} from "./context/UserContext"
import './Favorites.css'

export default function Favorites() {
  let user = false;
  const {favorites} = React.useContext(FavoritesContext);
  
  if(favorites.length === 0) {
    return <EmptyFavorites />;
  }
  return (
    <>
      <Hero img={favoritesHero} />
      <div>
        <section className="favorites-items section">
          <h2>your favorites</h2>
          {favorites.map((item) => {
            return <FavoritesItem key={item.id} {...item} />;
          })}
        </section>
        <i
          className="fa fa-heart"
          style={{ fontSize: "36px", color: "red" }}
        ></i>
      </div>
    </>
  );
}
