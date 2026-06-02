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
import DetailsSupplier from "../pages/Supplier/DetailsSupplier";
import ClientsDetailsPage from "../pages/Clients/ClientsDetails";
import ClientsAdd from "../pages/Clients/ClientsForm/components/index";
import ClientsUpdate from "../pages/Clients/ClientsUpdate/components";
import SuppplierFormPage from "../pages/Supplier/SuppilerForm";
import Materials from "../pages/Warehouse/Materials/components/Materials";
import RentManagment from "../pages/Warehouse/Rent/RentManagment/RentManagment";
import InventoryManagment from "../pages/Warehouse/Inventory/InventoryManagment/InventoryManagment";

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
            { path: "/supplier/create", element: <SuppplierFormPage /> },
            { path: "/clients/details/:id", element: <ClientsDetailsPage /> },
            { path: "/clients/add", element: <ClientsAdd /> },
            { path: "/clients/update/:id", element: <ClientsUpdate /> },
            { path: "/materials", element: <Materials /> },
            { path: "/rentmanagment", element: <RentManagment /> },
            { path: "/inventarymanegment", element: <InventoryManagment /> }
        ]
    }
])


