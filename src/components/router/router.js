import { createBrowserRouter } from "react-router-dom";
import Root from "../../root/Root";
import Error from "../pages/Error";
import Blog from "./../pages/Blog";
import Home from "./../pages/Home";
import SingleQuiz from "./../pages/SingleQuiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
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
        path: "/singleQuiz/:id",
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <SingleQuiz />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
