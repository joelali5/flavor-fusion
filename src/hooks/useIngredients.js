import { useQuery } from "@tanstack/react-query";
import { getIngredients } from "../services/apiRecipes";

export function useIngredients(id) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["ingredients", id],
    queryFn: () => getIngredients(Number(id)),
  });

  return { isLoading, error, data };
}
