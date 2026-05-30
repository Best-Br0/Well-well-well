import ClientsManagment from "./components/ClientsManagment"
import Header from "../../components/Header"

export default function PageClients() {
    return <>
        <Header title='Управление клиентами' />
        <ClientsManagment />
    </>
}