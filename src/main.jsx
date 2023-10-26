import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import "./styles/reset.css";

import { App } from "./App.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Quiz } from "./pages/Quiz/Quiz.jsx";
import { Select } from "./pages/Select/Select.jsx";
import { Result } from "./pages/Result/Result.jsx";
import { Start } from "./pages/Start/Start.jsx";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          { path: "/Quiz", element: <Quiz /> },
          { path: "/Start", element: <Start /> },
          { path: "/Select", element: <Select /> },
          { path: "/Result", element: <Result /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
