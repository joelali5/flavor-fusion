import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import RecipeProvider from "./contexts/RecipeProvider";
import SearchedRecipes from "./features/Recipes/SearchedRecipes";
import RecipeDetails from "./pages/RecipeDetails";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 250 * (60 * 1000),
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecipeProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/recipes" element={<SearchedRecipes />} />
            <Route path="/recipes/recipe/:id" element={<RecipeDetails />} />
          </Route>
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#E9CEA3",
              color: "grey",
            },
          }}
        />
      </RecipeProvider>
    </QueryClientProvider>
  );
}
