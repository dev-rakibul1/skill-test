import { createBrowserRouter } from "react-router-dom";
import Root from "../../root/Root";
import Error from "../pages/Error";
import Blog from "./../pages/Blog";
import Home from "./../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
