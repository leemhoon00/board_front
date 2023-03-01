import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import LoginComponent from "./pages/LoginPage/LoginComponent";
import SignupComponent from "./pages/SignupPage/SignupComponent";
import BoardsComponent from "./pages/BoardsPage/BoardsComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComponent />,
  },
  {
    path: "/signup",
    element: <SignupComponent />,
  },
  {
    path: "/boards",
    element: <BoardsComponent />
  }
]);

export default router;