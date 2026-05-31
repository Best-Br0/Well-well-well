import Header from "../../../components/Header"
import ClientsAdd from "./components/index"

export default function ClientAddPage() {
    return <>
        <div style={{ display: "flex" }}>
            <Header title={"Добавить клиента"} />
            <ClientsAdd />
        </div>
    </>
}