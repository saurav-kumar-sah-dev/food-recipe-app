import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/context";

export const Details = () => {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, handleAddToFavourites, favouritesList } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const data = await res.json();
        if (data?.data) {
          setRecipeDetails(data?.data);
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    }

    getRecipeDetails();
  }, [id, setRecipeDetails]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Main Card */}
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col lg:flex-row gap-10 p-8 transition-all duration-300 hover:shadow-blue-300 hover:scale-[1.01]">
        
        {/* Left - Image */}
        <div className="lg:w-1/2">
          <img
            src={recipeDetails?.recipe?.image_url}
            alt="recipe"
            className="w-full h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right - Content */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          {/* Publisher */}
          <span className="text-blue-600 text-xs sm:text-sm font-semibold uppercase tracking-widest">
            {recipeDetails?.recipe?.publisher}
          </span>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4 leading-snug">
            {recipeDetails?.recipe?.title || "Recipe Title"}
          </h3>

          {/* Save Button */}
          <div className="mb-6">
            <button
              onClick={() => handleAddToFavourites(recipeDetails?.recipe)}
              className={`px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 ${
                favouritesList && favouritesList.findIndex((item) => item.id === recipeDetails?.recipe?.id) !== -1
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {favouritesList && favouritesList.findIndex((item) => item.id === recipeDetails?.recipe?.id) !== -1
                ? "Remove from Favourites"
                : "Add to Favourites"}
            </button>
          </div>

          {/* Ingredients */}
          <div>
            <span className="block text-xl font-semibold text-gray-800 mb-3">
              Ingredients:
            </span>
            <ul className="space-y-3 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
              {recipeDetails?.recipe?.ingredients?.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 bg-gray-50 px-4 py-3 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition-all duration-200"
                >
                  {/* Quantity */}
                  <span className="text-lg font-semibold text-gray-900 bg-blue-100 px-3 py-1 rounded-lg">
                    {ingredient.quantity || "-"} {ingredient.unit || ""}
                  </span>
                  {/* Description */}
                  <span className="text-gray-700 text-base">{ingredient.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
