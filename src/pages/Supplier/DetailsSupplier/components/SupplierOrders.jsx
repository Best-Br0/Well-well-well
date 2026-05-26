import { CiSearch } from "react-icons/ci";

export default function SupplierOrders() {



    return (
        <>
            <div className="supplier_orders">
                <div className="orders_title"> Заказы  поставщика</div>

                <div className="orders_table">
                    <div className="search_filter">
                        <input placeholder="Поиск по названию материала" className="search" type="text" />
                        <div className="filter">Фильтр</div>
                        <CiSearch className="search_icon" />
                    </div>
                </div>
            </div>
        </>
    )
}