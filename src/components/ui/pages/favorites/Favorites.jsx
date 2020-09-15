import React, { Component } from "react";
import favoritesHero from "../../../../assets/images/recipe26.jpg";
import Hero from "../../../../Hero";
import "./Favorites.css";
import Favorite from "./Favorite";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../../../base";
import firebase from 'firebase'
import Spinner from '../../../spinner/Spinner'

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      users: {
          uid: {
            favorites: [],
          },
      },
    };
  }

  componentDidMount() {
    var uid = firebase.auth().currentUser.uid;
    db.ref(`users/${uid}/favorites`).on("value", (snapshot) => {
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
      return <Spinner />;
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
