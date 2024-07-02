import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LikesContextProvider } from "./store/context.tsx";
import { MainPage } from "./pages/MainPage.tsx";
import { SecondPage } from "./pages/SecondPage.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "main",
    element: <MainPage />,
  },
  {
    path: "second",
    element: <SecondPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LikesContextProvider>
      <RouterProvider router={router} />
    </LikesContextProvider>
  </React.StrictMode>
);
