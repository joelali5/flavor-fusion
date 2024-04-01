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

export async function getRecipes(query) {
  const res = await fetch(
    `${baseURL}/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=15`
  );

  if (!res.ok) throw new Error("Failed to fetch recipes.");

  const data = await res.json();

  return data;
}

export async function getIngredients(id) {
  const res = await fetch(
    `${baseURL}/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`
  );

  if (!res.ok) throw new Error("Failed to fetch ingredients.");

  const data = await res.json();

  return data;
}

export async function getRecipeInformation(id) {
  const res = await fetch(
    `${baseURL}/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`
  );

  if (!res.ok) throw new Error("Failed to fetch recipe information.");

  const data = await res.json();

  return data;
}

export async function getRecipeInstruction(id) {
  const res = await fetch(
    `${baseURL}/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`
  );

  if (!res.ok) throw new Error("Failed to fetch recipe instruction.");

  const data = await res.json();

  return data;
}
