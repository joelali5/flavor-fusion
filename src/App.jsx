import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Recipes from "./pages/Recipes";
import Home from "./ui/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Route>
    </Routes>
  );
}
