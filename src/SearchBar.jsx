import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useRecipe } from "./contexts/RecipeProvider";
import { useNavigate } from "react-router-dom";
import { useRecipes } from "./hooks/useRecipes";
// import Error from "./ui/Error";
// import Loader from "./ui/Loader";

function SearchBar() {
  const [query, setQuery] = useState("");
  const { searchedRecipes, setSearchedRecipes } = useRecipe();
  const { isLoading, error, recipes } = useRecipes(query);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setSearchedRecipes(recipes.results);
    // navigate("/recipes");
  }

  console.log("SearchBar: ", searchedRecipes);

  return (
    <form
      className="w-[220px] sm:w-2/5 flex items-center"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full px-4 py-1 sm:py-2.5 border-[1px] border-grey focus:border-1 focus:border-grey focus:outline-0 rounded-full ml-12"
        type="text"
        placeholder="Find recipes..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <IoSearch className="text-xl sm:text-3xl ml-[-30px] sm:ml-[-45px] text-grey" />
      </button>
    </form>
  );
}

export default SearchBar;
