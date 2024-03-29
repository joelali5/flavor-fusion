import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../services/apiRecipes";

export function useRecipes(query) {
  const {
    isLoading,
    error,
    data: recipes,
  } = useQuery({
    queryKey: ["recipes", query],
    queryFn: () => getRecipes(query),
  });

  return { isLoading, error, recipes };
}
