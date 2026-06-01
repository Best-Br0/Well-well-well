import BackList from "../../../components/BackList";
import Header from "../../../components/Header";
import ClientDetails from "./components/ClientDetails";
import ClientDetailCart from "./components/DetailCart";
import RentOrdersClient from "./components/RentOrders";

export default function ClientsDetailsPage() {


    return (
        <>
            <Header title={"Просмотр клиента"} />
            <div className="client_details_main">
                <BackList />ыы
                <ClientDetails />
                <div className="details_carts">
                    <ClientDetailCart text={"Общее количество заказов"} title={"342"} />
                    <ClientDetailCart text={"Количество арендованных позиций"} title={"89"} />
                    <ClientDetailCart text={"Общая сумма выручки по заказам"} title={"4,250,000 сом"} />
                    <ClientDetailCart text={"Общая сумма выручки по арендам"} title={"840,000 сом"} />
                </div>
                <RentOrdersClient />
            </div>

        </>
    )
}