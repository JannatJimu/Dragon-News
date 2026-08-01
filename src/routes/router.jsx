import { createBrowserRouter } from "react-router";

import Root from "../layouts/Root";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
    ],
  },
]);

export default router;