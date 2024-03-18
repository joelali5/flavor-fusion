function Recipe({ recipe }) {
  const { title, healthscore, id, image, readyInMinutes, servings } = recipe;
  return (
    <div className="grid">
      <img src={image} alt="recipe img" />
      <h3>{title}</h3>
      <p>{healthscore}</p>

      <div className="flex justify-between items-center">
        <p>{readyInMinutes}</p>
        <p>{servings}</p>
      </div>
    </div>
  );
}

export default Recipe;
