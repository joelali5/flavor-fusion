import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Recipes from "./pages/Recipes";
import Home from "./ui/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
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
            backgroundColor: "green",
            color: "grey",
          },
        }}
      />
    </QueryClientProvider>
  );
}
