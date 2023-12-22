import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/paths";
import Authentication from "./context/Authentication";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authentication>
        <div>
          <Toaster />
        </div>
        <RouterProvider router={router} />
      </Authentication>
    </QueryClientProvider>
  </React.StrictMode>
);
