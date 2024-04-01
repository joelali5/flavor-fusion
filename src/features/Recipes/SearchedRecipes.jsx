import { Link } from "react-router-dom";
import { useRecipe } from "../../contexts/RecipeProvider";

function SearchedRecipes() {
  const { searchedRecipes } = useRecipe();
  return (
    <ul className="grid grid-cols-recipeGridColumns">
      {searchedRecipes.map((recipe) => (
        <Link to={`/recipes/recipe/${recipe.id}`}>
          <li key={recipe.id} className="pr-4 mb-4 relative">
            <img
              src={recipe.image}
              alt="recipe img"
              className="w-full rounded-lg"
            />
            <div className="flex absolute inset-0 justify-center items-center">
              <h2
                className="justify-self-center self-center text-stone-800 transform rotate-45deg font-serif text-2xl font-bold "
                key={recipe.id}
              >
                {recipe.title}
              </h2>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default SearchedRecipes;
