import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import LoginComponent from "./pages/LoginPage/LoginComponent";
import SignupComponent from "./pages/SignupPage/SignupComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComponent />,
  },
  {
    path: "/signup",
    element: <SignupComponent />,
  }
]);

export default router;