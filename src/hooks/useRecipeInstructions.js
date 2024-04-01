import { useQuery } from "@tanstack/react-query";
import { getRecipeInstruction } from "../services/apiRecipes";

export function useRecipeInstructions(id) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["recipe-instruction"],
    queryFn: () => getRecipeInstruction(Number(id)),
  });

  return { isLoading, error, data };
}
