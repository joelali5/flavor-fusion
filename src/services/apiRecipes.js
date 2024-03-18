const baseURL = "https://api.spoonacular.com";
const apiKey = "1462b5c4536245548366d3a0a3b7ad74";

export async function getPopularRecipes() {
  const res = await fetch(
    `${baseURL}/recipes/random?number=6&apiKey=${apiKey}`
  );
  if (!res.ok) throw new Error("Failed to fetch popular recipes");

  const data = await res.json();

  return data;
}
