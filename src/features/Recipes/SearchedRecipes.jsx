import { Link } from "react-router-dom";
import { useRecipe } from "../../contexts/RecipeProvider";

// const fakeRecipes = [
//   {
//     id: 1,
//     image: "https://img.spoonacular.com/recipes/1733511-312x231.jpg",
//     title: "Rice Cake",
//   },
//   {
//     id: 2,
//     image: "https://img.spoonacular.com/recipes/1733511-312x231.jpg",
//     title: "Rice Cake",
//   },
//   {
//     id: 3,
//     image: "https://img.spoonacular.com/recipes/1733511-312x231.jpg",
//     title: "Rice Cake",
//   },
//   {
//     id: 4,
//     image: "https://img.spoonacular.com/recipes/1733511-312x231.jpg",
//     title: "Rice Cake",
//   },
//   {
//     id: 5,
//     image: "https://img.spoonacular.com/recipes/1733511-312x231.jpg",
//     title: "Rice Cake",
//   },
//   {
//     id: 6,
//     image: "https://img.spoonacular.com/recipes/1733511-312x231.jpg",
//     title: "Rice Cake",
//   },
//   {
//     id: 7,
//     image: "https://img.spoonacular.com/recipes/1733511-312x231.jpg",
//     title: "Rice Cake",
//   },
//   {
//     id: 8,
//     image: "https://img.spoonacular.com/recipes/1733511-312x231.jpg",
//     title: "Rice Cake",
//   },
//   {
//     id: 9,
//     image: "https://img.spoonacular.com/recipes/1733511-312x231.jpg",
//     title: "Rice Cake",
//   },
//   {
//     id: 10,
//     image: "https://img.spoonacular.com/recipes/1733511-312x231.jpg",
//     title: "Rice Cake",
//   },
// ];

function SearchedRecipes() {
  const { searchedRecipes } = useRecipe();
  return (
    <ul className="grid grid-cols-recipeGridColumns">
      {searchedRecipes.map((recipe) => (
        <Link>
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
