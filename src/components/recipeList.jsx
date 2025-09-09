import { Link } from "react-router-dom";

export const RecipeItem = ({ item }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-all transform hover:scale-[1.04] hover:shadow-2xl duration-300 border border-gray-100">
      {/* Recipe Image */}
      <div className="relative w-full h-56 group overflow-hidden">
        <img
          src={item?.image_url}
          alt={item?.title}
          className="w-full h-full object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
        />
        {/* Publisher Tag */}
        <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-md font-medium">
          {item?.publisher}
        </span>
      </div>

      {/* Recipe Details */}
      <div className="p-5 flex flex-col justify-between min-h-[140px]">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
          {item?.title}
        </h3>

        {/* Button */}
        <Link
          to={`/recipe-item/${item?.id}`}
          className="mt-4 inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};
