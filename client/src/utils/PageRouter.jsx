// eslint-disable-next-line no-unused-vars
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";

function PageRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default PageRouter;
