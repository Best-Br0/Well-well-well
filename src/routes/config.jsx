import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Layout from "../Layout";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Main /> }
        ]

    }
])