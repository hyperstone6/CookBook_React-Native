import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMeal, setFavoriteMeal] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMeal((prevId) => [...prevId, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMeal(favoriteMeal.filter(item => item !== id));
  };

  const value = {
    ids: favoriteMeal,
    addFavorite,
    removeFavorite,

  }
  return <FavoritesContext.Provider value={value} >{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
