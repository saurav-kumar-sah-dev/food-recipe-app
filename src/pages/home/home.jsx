import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import { RecipeItem } from "../../components/recipeList";

export const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-lg font-semibold text-blue-600 animate-pulse">
          🍳 Loading delicious recipes...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {recipeList && recipeList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList.map((item) => (
            <RecipeItem key={item?.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-gray-500 text-lg font-medium">
            😔 Nothing to show. Please search for a recipe 🍽️
          </p>
        </div>
      )}
    </div>
  );
};
