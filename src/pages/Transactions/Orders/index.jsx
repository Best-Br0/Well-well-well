import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import FilterSearch from "./components/FilterSearch";
import { FaPlus } from "react-icons/fa6";
import TransactionOrder from "./components/TransactionOrder";

export default function TransactionsOrdersPage() {




    return (
        <>
            <Header title={"Заказы"} />
            <div className="transactions_orders">
                <div className="head_order">
                    <FilterSearch />
                    <Link className="create_order" >
                        <FaPlus className="icon" />
                        Новый Заказ
                    </Link>
                </div>
                <div className="main_order">

                    <TransactionOrder order={{
                        id: "#ORD-1042",
                        status: {
                            which: "Оплачено",
                            status: "paid"
                        },
                        people: "Алексей Смирнов",
                        type: "Шторы",
                        sum: "15 000 сом",
                        paid: "15 000 сом",
                        duty: "",
                        started: "Нач: 01.10.2023",
                        finished: "Сдача: 10.10.2023"
                    }} />
                    <TransactionOrder order={{
                        id: "#ORD-1043",
                        status: {
                            which: "В процессе",
                            status: "progress"
                        },
                        people: "Мария Иванова",
                        type: "Жалюзи",
                        sum: "8 500 сом",
                        paid: "4 000 сом",
                        duty: "4 500 сом",
                        started: "Нач: 05.10.2023",
                        finished: "Сдача: 15.10.2023"
                    }} />
                    <TransactionOrder order={{
                        id: "#ORD-1043",
                        status: {
                            which: "Должник",
                            status: "debtor"
                        },
                        people: "ООО СтройИнвест",
                        type: "Шторы",
                        sum: "120 000 сом",
                        paid: "50 000 сом",
                        duty: "70 000 сом",
                        started: "Нач: 01.10.2023",
                        finished: "Сдача: 10.10.2023"
                    }} />
                    <TransactionOrder order={{
                        id: "#ORD-1045",
                        status: {
                            which: "Просроченный",
                            status: "overdue"
                        },
                        people: "Елена Петрова",
                        type: "Жалюзи",
                        sum: "12 000 сом",
                        paid: "0 сом",
                        duty: "12 000 сом",
                        started: "Нач: 01.09.2023",
                        finished: "Сдача: 10.09.2023"
                    }} />
                    <TransactionOrder order={{
                        id: "#ORD-1046",
                        status: {
                            which: "Оконченный",
                            status: "finished"
                        },
                        people: "Дмитрий Волков",
                        type: "Шторы",
                        sum: "45 000 сом",
                        paid: "45 000 сом",
                        duty: "",
                        started: "Нач: 15.08.2023",
                        finished: "Сдача: 30.08.2023"
                    }} />
                    <TransactionOrder order={{
                        id: "#ORD-1047",
                        status: {
                            which: "Отменённый",
                            status: "canceled"
                        },
                        people: "Анна Сидорова",
                        type: "Жалюзи",
                        sum: "9 200 сом",
                        paid: "0 сом",
                        duty: "",
                        started: "Нач: 20.10.2023",
                        finished: "Сдача: 25.10.2023"
                    }} />
                    <TransactionOrder order={{
                        id: "#ORD-1048",
                        status: {
                            which: "В процессе",
                            status: "progress"
                        },
                        people: "Иван Сергеев",
                        type: "Шторы",
                        sum: "22 000 сом",
                        paid: "10 000 сом",
                        duty: "12 000 сом",
                        started: "Нач: 11.10.2023",
                        finished: "Сдача: 21.10.2023"
                    }} />
                    <TransactionOrder order={{
                        id: "#ORD-1049",
                        status: {
                            which: "Оплачено",
                            status: "paid"
                        },
                        people: "Ольга Николаева",
                        type: "Жалюзи",
                        sum: "6 400 сом",
                        paid: "6 400 сом",
                        duty: "",
                        started: "Нач: 12.10.2023",
                        finished: "Сдача: 18.10.2023"
                    }} />
                    <TransactionOrder order={{
                        id: "#ORD-1050",
                        status: {
                            which: "Должник",
                            status: "debtor"
                        },
                        people: "Максим Котов",
                        type: "Шторы",
                        sum: "35 000 сом",
                        paid: "15 000 сом",
                        duty: "20 000 сом",
                        started: "Нач: 08.10.2023",
                        finished: "Сдача: 28.10.2023"
                    }} />
                    <TransactionOrder order={{
                        id: "#ORD-1051",
                        status: {
                            which: "Оконченный",
                            status: "finished"
                        },
                        people: "Светлана Юрьева",
                        type: "Жалюзи",
                        sum: "18 000 сом",
                        paid: "18 000 сом",
                        duty: "",
                        started: "Нач: 01.10.2023",
                        finished: "Сдача: 15.10.2023"
                    }} />
                    <TransactionOrder order={{
                        id: "#ORD-1052",
                        status: {
                            which: "В процессе",
                            status: "progress"
                        },
                        people: "Тимур Хасанов",
                        type: "Шторы",
                        sum: "55 000 сом",
                        paid: "25 000 сом",
                        duty: "30 000 сом",
                        started: "Нач: 14.10.2023",
                        finished: "Сдача: 01.11.2023"
                    }} />
                    <TransactionOrder order={{
                        id: "#ORD-1053",
                        status: {
                            which: "Оплачено",
                            status: "paid"
                        },
                        people: "Ксения Попова",
                        type: "Жалюзи",
                        sum: "14 500 сом",
                        paid: "14 500 сом",
                        duty: "",
                        started: "Нач: 22.10.2023",
                        finished: "Сдача: 30.10.2023"
                    }} />

                </div>
            </div>
        </>
    )
}