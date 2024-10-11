import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import Compare from "../pages/Compare";
import News from "../pages/News";
import CompareForm from "../components/CountryComparisonForm";

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
        path: "compare",
        element: <CompareForm />,
        children: [
          {
            path: ":code1/n/:code2",
            element: <Compare />,
          },
        ],
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);
