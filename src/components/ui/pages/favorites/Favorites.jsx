import React from "react";
import favoritesHero from "../../../../assets/images/favoritesHero.jpg";
import Hero from "../../../../Hero";
import "./Favorites.css";

export default function Favorites() {
  return (
    <>
      <Hero img={favoritesHero} />
      <div>
        <h1>Favorites Page</h1>
      </div>
    </>
  );
}
