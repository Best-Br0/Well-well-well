import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout";
import LogIn from "../Layout/Log";
import PageClients from "../pages/Clients";
import PageSupplier from "../pages/Supplier";
import Empleer from "../pages/Empleer";
import CreateEmployeePage from "../pages/Main/EmployeeManagement/CreateEmployee";
import UpdateEmployeePage from "../pages/Main/EmployeeManagement/UpdateEmployee";
import DeteilsEmployeePage from "../pages/Main/EmployeeManagement/DeteilsEmployee";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/empleer", element: <Empleer /> },
            { path: "/supplier", element: <PageSupplier /> },
            { path: "/clients", element: <PageClients /> },
            { path: "/login", element: <LogIn /> },
            { path: "/create", element: <CreateEmployeePage /> },
            { path: "/update/:id", element: <UpdateEmployeePage /> },
            { path: "/employee-management/details/:id", element: <DeteilsEmployeePage /> }
        ]
    }
])


