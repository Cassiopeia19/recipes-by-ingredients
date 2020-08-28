import React from 'react'
import Recipes from '../../recipes/Recipes'

const FavoritesContext = React.createContext();

function FavoritesProvider({children}) {
    const [favorites,setFavorites] = React.useState(Recipes);
     const [favoritesItems, setFavoritesItems] = React.useState(0);
    return (
   <FavoritesContext.Provider value={{favorites,favoritesItems}}>
        {children} 
    </FavoritesContext.Provider>
    );
}

export { FavoritesContext, FavoritesProvider};