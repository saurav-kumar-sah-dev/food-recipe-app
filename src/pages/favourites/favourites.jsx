import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import { RecipeItem } from "../../components/recipeList";
import { Link } from "react-router-dom";

export const Favourites = () => {
  const { favouritesList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading your favourites...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
        Your Favourite Recipes ❤️
      </h2>

      {favouritesList && favouritesList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favouritesList.map((item) => (
            <RecipeItem key={item?.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[40vh] text-center">
          {/* Empty State Illustration */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            alt="Empty Favourites"
            className="w-40 h-40 mb-4 opacity-80"
          />
          <p className="text-gray-600 text-lg font-medium">
            Oops! Your favourites list is empty 😔
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Browse delicious recipes and add them to your favourites!
          </p>
          <Link
            to="/"
            className="mt-5 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 font-medium"
          >
            🔍 Explore Recipes
          </Link>
        </div>
      )}
    </div>
  );
};
