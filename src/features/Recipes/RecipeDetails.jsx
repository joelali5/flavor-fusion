import { useParams } from "react-router-dom";
import { useIngredients } from "../../hooks/useIngredients";
import { useRecipeInformation } from "../../hooks/useRecipeInformation";
import { useRecipeInstructions } from "../../hooks/useRecipeInstructions";

function RecipeDetails() {
  const { id } = useParams();
  const {
    isLoading: isFetchingIngredients,
    error: ingredientsErr,
    data: ingredeients,
  } = useIngredients(id);
  const {
    isLoading: isFetchingInformation,
    error: informationErr,
    data: recipeInformation,
  } = useRecipeInformation(id);

  const {
    isLoading: isFetchingInstructions,
    error: instructionsErr,
    data: recipeInstructions,
  } = useRecipeInstructions(id);
  return (
    <div className="w-full px-2 py-1 h-dvh">
      <section className="sm:flex sm:w-3/4 sm:mb-10 sm:mx-auto sm:gap-2">
        <div className="w-full sm:w-1/2 ">
          <img
            src={recipeInformation?.image}
            alt="recipe img"
            className="w-full"
          />
        </div>
        <div className="w-full sm:w-1/2 self-end">
          <h2 className="text-sm sm:text-lg text-stone-600 font-kanit font-bold">
            {recipeInformation?.title}
          </h2>
          <p className="uppercase font-mono text-sm sm:text-lg text-stone-600">
            {recipeInformation?.dishTypes[0]}
          </p>
          <h2 className="text-sm sm:text-lg text-stone-900 font-bold">
            ${recipeInformation?.pricePerServing}
          </h2>
          <span className="text-sm tracking-wide sm:text-lg font-mono">
            {recipeInformation?.readyInMinutes} minutes
          </span>
        </div>
      </section>
      <section className="sm:w-3/4 sm:mx-auto mb-6">
        <h2 className="text-center text-lg font-kanit tracking-wider text-stone-800 uppercase sm:text-xl">
          Ingredients
        </h2>
        <ul className="flex flex-wrap list-disc list-inside items-center p-0">
          {ingredeients?.ingredients?.map((ingredient) => (
            <li className="mr-4 text-stone-600 font-mono text-sm sm:text-lg p-0">
              {ingredient.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="sm:w-3/4 sm:mx-auto">
        <ol className="list-decimal">
          {recipeInformation?.analyzedInstructions[0].steps?.map((step) => (
            <li
              className="leading-8 text-stone-600 font-serif text-sm sm:text-lg"
              key={step.number}
            >
              {step.step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetails;
