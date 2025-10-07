import { Children, Component } from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import LoadingSinner from "../Components/LoadingSinner";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <LoadingSinner></LoadingSinner>,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);

export default router;
