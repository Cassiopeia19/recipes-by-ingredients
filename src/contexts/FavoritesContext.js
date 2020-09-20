import React, {createContext, useEffect, useState} from 'react'
import firebase from 'firebase'
import {db} from '../base'

export const FavoritesContext = createContext()

export function FavoritesProvider(props) {
  const [favorites, setFavorites] = useState([]);
  const { children } = props;

  // Make the DB Call
  useEffect(() => {
    var user = firebase.auth().currentUser;
    var uid;
    if (user != null) {
        uid = user.uid;
      db.ref(`users/${uid}/favorites`).on("value", (snapshot) => {
        console.log("favorites: ", snapshot.toJSON());

        const results = Object.entries(snapshot.toJSON() || {}).map(
          ([id, props]) => ({
            id,
            ...props,
      })
        );
        setFavorites(results);
    })};
  }, []);
  return (
    <FavoritesContext.Provider value={favorites}>
      {children}
    </FavoritesContext.Provider>
  );
}