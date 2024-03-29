import { useQuery } from "@tanstack/react-query";
import { getPopularRecipes } from "../../services/apiRecipes";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";
import Recipe from "./Recipe";

function PopularRecipes() {
  const {
    isLoading: isFetchingRecipes,
    error,
    data: popularRecipes,
  } = useQuery({
    queryKey: ["popular"],
    queryFn: getPopularRecipes,
  });

  if (error) return toast.error(error.message);
  if (isFetchingRecipes) return <Loader />;

  return (
    <div className="mt-8 sm:w-11/12 mx-auto">
      <h1 className="text-xl sm:text-4xl font-kanit font-bold text-black-2 mb-6 sm:mb-10">
        Popular Recipes
      </h1>
      <div className="sm:grid sm:grid-cols-mainGridColumns grid-rows-mainGridRows gap-10">
        {popularRecipes.recipes?.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}

export default PopularRecipes;
