import { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export default function RecipeProvider({ children }) {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  // console.log("Recipes: ", searchedRecipes);

  return (
    <RecipeContext.Provider value={{ searchedRecipes, setSearchedRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
}

function useRecipe() {
  const context = useContext(RecipeContext);

  if (context === undefined)
    throw new Error("Recipe context cannot be used outside of its provider.");

  return context;
}

export { RecipeProvider, useRecipe };
