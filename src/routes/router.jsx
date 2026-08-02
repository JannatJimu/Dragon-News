import { createBrowserRouter } from "react-router";

import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";


import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element:<CategoryNews></CategoryNews>
        
      },
    ],
  },
  
]);

export default router;