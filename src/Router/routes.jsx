import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import App from "../App";
import ShopPage from "../Pages/ShopPage/ShopPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CartPage from "../Pages/CartPage/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;