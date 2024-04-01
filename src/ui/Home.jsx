import { useRecipe } from "../contexts/RecipeProvider";
import PopularRecipes from "../features/Recipes/PopularRecipes";

function Home() {
  return (
    <div className="mx-4 relative h-3/4 sm:h-1/2">
      <div className="bg-food2 h-full bg-cover bg-center">
        <h1 className="text-grey text-lg sm:text-4xl font-charmonman font-bold w-full sm:w-2/3 px-5 pt-10">
          Explore Over 50,000+ Unique Low-Carb and Keto Recipes
        </h1>
      </div>
      <div className="absolute inset-0 bg-black opacity-25"></div>

      <PopularRecipes />
    </div>
  );
}

export default Home;
