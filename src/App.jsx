import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Recipes from "./pages/Recipes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/recipes" element={<Recipes />} />
      </Route>
    </Routes>
  );
}
