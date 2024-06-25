import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import BuyScreen from "../pages/BuyScreen";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/buyScreen",
        element: <BuyScreen />,
      },
    ],
  },
];

const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes);

export default router;
