import { useQuery } from "@tanstack/react-query";
import { getRecipeInformation } from "../services/apiRecipes";

export function useRecipeInformation(id) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["recipe-information", id],
    queryFn: () => getRecipeInformation(Number(id)),
  });

  return { isLoading, error, data };
}
