import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/context";

export const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <h2 className="text-2xl font-extrabold tracking-wide">
            <NavLink
              to="/"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:opacity-90 transition duration-300"
            >
              FoodRecipe
            </NavLink>
          </h2>

          {/* Search Bar */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center w-64 sm:w-72 bg-gray-100 rounded-full px-4 py-2 shadow-inner border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 transition-all duration-300"
          >
            <input
              type="text"
              name="search"
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
              placeholder="🔍 Search recipes..."
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
            />
          </form>

          {/* Navigation Links */}
          <ul className="hidden sm:flex items-center gap-8 text-gray-700 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative pb-1 transition-colors duration-300 ${
                    isActive
                      ? "text-blue-600 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-0"
                      : "hover:text-blue-600"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favourites"
                className={({ isActive }) =>
                  `relative pb-1 transition-colors duration-300 ${
                    isActive
                      ? "text-blue-600 font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-0"
                      : "hover:text-blue-600"
                  }`
                }
              >
                Favourites ❤️
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
