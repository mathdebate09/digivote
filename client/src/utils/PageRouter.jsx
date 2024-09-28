// eslint-disable-next-line no-unused-vars
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BoothMap from "../components/BoothMap";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Landing from "../components/Landing";
import ProtectedRoute from "../components/Layout/ProtectedRoute";
import Login from "../components/Login";
import Profile from "../components/Profile";
import SignUp from "../components/SignUp";
import Voting from "../components/Voting";
import LokSabha from "../components/Voting/LokSabha";
import RajyaSabha from "../components/Voting/RajyaSabha";

function PageRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/boothmap",
      element: <BoothMap />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/voting",
          element: <Voting />,
        },
        {
          path: "/voting/rajya-sabha",
          element: <RajyaSabha />,
        },
        {
          path: "/voting/lok-sabha",
          element: <LokSabha />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default PageRouter;
