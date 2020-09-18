import React, {createContext, useEffect, useState} from 'react'
import firebase from 'firebase'
import {db} from '../base'

export const FavoritesContext = createContext()

export function FavoritesProvider(props) {
    const [favorites, setFavorites] = useState([])
    const {children} = props

    // Make the DB Call
    useEffect(() => {
        var uid = firebase.auth().currentUser.uid;
        db.ref(`users/${uid}/favorites`).on("value", (snapshot) => {
        console.log("favorites: ", snapshot.toJSON());
        // setIsLoaded(true)
        const results = Object.entries(snapshot.toJSON() || {}).map(
            ([id, props]) => ({
            id,
            ...props,
            })
        )
        setFavorites(results)
        })
    }, [])
    return (
        <FavoritesContext.Provider value={favorites}>
            {children}
        </FavoritesContext.Provider>
    )
}