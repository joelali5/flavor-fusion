import { useState } from "react";

function Ingredient({ ingredientName }) {
  const [checked, setChecked] = useState(false);

  return (
    <label>
      <input type="checkbox" onChange={() => setChecked(!checked)} />
      {ingredientName}
    </label>
  );
}

export default Ingredient;
