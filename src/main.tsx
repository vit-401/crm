import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/test",
    element: <h1>TEST</h1>,
  },
]);

export default router