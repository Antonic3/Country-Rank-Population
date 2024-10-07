import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import Compare from "../pages/Compare";
import News from "../pages/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/compare/*",
        element: <Compare />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);
