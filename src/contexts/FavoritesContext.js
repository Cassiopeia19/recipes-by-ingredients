import React, { createContext, useEffect, useState } from "react";
import { db } from "../base";
import { AuthContext } from './AuthContext'

export const FavoritesContext = createContext();

export function FavoritesProvider(props) {
  const [favorites, setFavorites] = useState([]);
  const { children } = props;

  // getting currentUser from AuthContext
  const authContextObject = React.useContext(AuthContext)

  // Make the DB Call
  useEffect(() => {
    var user = authContextObject.currentUser;  // getting this from AuthContext.currentUser instead
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
      });
    }
  }, [authContextObject.currentUser]);  // Adding currentUser here as a dependency

  const providerValue = {
    favorites: favorites,
    setFavorites: setFavorites,
  }
  return (
    <FavoritesContext.Provider value={providerValue}>
      {children}
    </FavoritesContext.Provider>
  );
}