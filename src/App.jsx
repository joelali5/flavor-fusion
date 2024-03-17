import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Recipes from "./pages/Recipes";
import Beverages from "./features/ingredients/Beverages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" index element={<Beverages />} />
        <Route path="/recipes" element={<Recipes />} />
      </Route>
    </Routes>
  );
}
