import { Children, Component } from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";

import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import LoadingSpinner from "../Components/LoadingSinner";
import ErrorAppsNotFound from "../Pages/ErrorAppsNotFound";



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path:'/app/:id',
        Component:AppDetails

      }
    ],
  },
   //   {
  //     path: "*",
  //     element: <ErrorPages/>,
  //   },
]);

export default router;
