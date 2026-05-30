import ClientsManagment from "./components/ClientsManagment"
import Header from "../../components/Header"
import ClientsManagmentPagination from "./components/ClientsManagmentPagination"

export default function PageClients() {
    return <>
        <Header title='Управление клиентами' />
        <ClientsManagment />
        <ClientsManagmentPagination />
    </>
}