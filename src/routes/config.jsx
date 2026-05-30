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
import UpdateSuppilerPage from "../pages/Supplier/UpdateSupplier";
import DetailsSupplier from "../pages/Supplier/SuppilerForm/DetailsSupplier";
import SupplierForm from "../pages/Supplier/SuppilerForm/components";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/employee", element: <Empleer /> },
            { path: "/supplier", element: <PageSupplier /> },
            { path: "/clients", element: <PageClients /> },
            { path: "/login", element: <LogIn /> },
            { path: "/employee/create", element: <CreateEmployeePage /> },
            { path: "/employee/update/:id", element: <UpdateEmployeePage /> },
            { path: "/employee/details/:id", element: <DeteilsEmployeePage /> },
            { path: "/supplier/details/:id", element: <DetailsSupplier /> },
            { path: "/supplier/create", element: <SupplierForm /> },
            { path: "/supplier/update/:id", element: <UpdateSuppilerPage /> },
        ]
    }
])


