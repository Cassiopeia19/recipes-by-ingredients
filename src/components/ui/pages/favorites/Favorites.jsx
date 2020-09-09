import React, { Component } from "react";
import favoritesHero from "../../../../assets/images/recipe26.jpg";
import Hero from "../../../../Hero";
import "./Favorites.css";
import Favorite from "./Favorite";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../../../base";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      favorites: [],
    };
  }

  componentDidMount() {
    db.ref("/favorites").on("value", (snapshot) => {
      console.log("favorites: ", snapshot.toJSON());
      this.setState({
        isLoaded: true,
        favorites: Object.entries(snapshot.toJSON() || {}).map(
          ([id, props]) => ({
            id,
            ...props,
          })
        ),
      });
    });
  }

  render() {
    var { isLoaded, favorites } = this.state;
    console.log("favorites: ", favorites);

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
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
}

export default Favorites;
