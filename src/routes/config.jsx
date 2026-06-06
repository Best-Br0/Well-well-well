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
import UpdateEmployee from "../pages/Main/EmployeeManagement/UpdateEmployee/components";
import MaterialsDetailsPage from "../pages/Warehouse/Materials/MaterialsDetails";
import ProductDetailsPage from "../pages/Warehouse/Inventory/ProductDetails";
import ItemDetailsPage from "../pages/Warehouse/Rent/ItemDetails";
import Materials from "../pages/Warehouse/Materials/components/Materials";
import RentManagment from "../pages/Warehouse/Rent/RentManagment/RentManagment";
import InventoryManagment from "../pages/Warehouse/Inventory/InventoryManagment/InventoryManagment";
import MaterialAdd from "../pages/Warehouse/Materials/AddMaterials";
import MaterialUpdate from "../pages/Warehouse/Materials/UpdateMaterial";
import RentAdd from "../pages/Warehouse/Rent/RentAdd";
import RentUpdate from "../pages/Warehouse/Rent/RentUpdate";
import InventoryAdd from "../pages/Warehouse/Inventory/InventoryAdd";
import UpdateSupplier from "../pages/Supplier/UpdateSupplier"
import InventoryUpdate from "../pages/Warehouse/Inventory/InventoryUpdate";
import TransactionsOrdersPage from "../pages/Transactions/Orders";

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
            { path: "/materials/details/:id", element: <MaterialsDetailsPage /> },
            { path: "/inventary/details/:id", element: <ProductDetailsPage /> },
            { path: "/rent/details/:id", element: <ItemDetailsPage /> },
            { path: "/materials", element: <Materials /> },
            { path: "/rent", element: <RentManagment /> },
            { path: "/inventary", element: <InventoryManagment /> },
            { path: "/material/add", element: <MaterialAdd /> },
            { path: "/material/update/:id", element: <MaterialUpdate /> },
            { path: "/rent/add", element: <RentAdd /> },
            { path: "/rent/update/:id", element: <RentUpdate /> },
            { path: "/inventory/add", element: <InventoryAdd /> },
            { path: "/inventory/update/:id", element: <InventoryUpdate /> },
            { path: "/supplier/update/:id", element: <UpdateSupplier /> },
            { path: "/transactions/orders", element: <TransactionsOrdersPage /> },

        ]
    }
])


