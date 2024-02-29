import { Link, createBrowserRouter } from "react-router-dom";
import Overview from "../pages/overview";
import Home from "../pages/home";

export const router = createBrowserRouter([
{
  path: "/",
  element: (
  <Home/>
  ),
  children: [
    {
      path: "/overview",
      element:  <Overview/>
    }
  ]
},
{
  path: "about",
  element: <div>About</div>,
},
]);