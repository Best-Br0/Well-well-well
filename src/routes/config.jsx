import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Layout from "../Layout";
import LogIn from "../Layout/Log";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Main /> },
            { path: "login", element: <LogIn /> }
        ]

    }
])