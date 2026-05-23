import { createBrowserRouter } from "react-router-dom";
import Empleer from "../pages/Empleer";
import Layout from "../Layout";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/empleer", element: <Empleer /> },
        ],
    },
]);