import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      console.log(data);

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate('/');
      }
    } catch (err) {
      console.err(err);
      setLoading(false);
      setSearchParam("");
    }
  }

function handleAddToFavourites(getCurrentItem) {
let copyFavouritesList = [...favouritesList];
const index = copyFavouritesList.findIndex((item) => item.id === getCurrentItem.id);

if(index === -1) {
  copyFavouritesList.push(getCurrentItem)
}else {
  copyFavouritesList.splice(index);
}

setFavouritesList(copyFavouritesList);

}

  return (
    <>
      <GlobalContext.Provider
        value={{
          searchParam,
          setSearchParam,
          handleSubmit,
          loading,
          recipeList,
          recipeDetails,
          setRecipeDetails,
          favouritesList,
          setFavouritesList,
          handleAddToFavourites
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};
