const baseURL = "https://api.spoonacular.com";

export async function getPopularRecipes() {
  const res = await fetch(`${baseURL}/recipes/random?number=8`);
  if (!res.ok) throw new Error("Failed to fetch popular recipes");

  const data = await res.json();

  return data;
}
