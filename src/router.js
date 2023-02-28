import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import LoginComponent from "./pages/LoginPage/loginComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComponent />,
  },
]);

export default router;