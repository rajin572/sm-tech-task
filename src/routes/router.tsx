import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import BuyScreen from "../pages/BuyScreen";
import PropertyDetails from "../pages/PropertyDetails";

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
      {
        path: "/propertyDetails",
        element: <PropertyDetails />,
      },
    ],
  },
];

const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes);

export default router;
