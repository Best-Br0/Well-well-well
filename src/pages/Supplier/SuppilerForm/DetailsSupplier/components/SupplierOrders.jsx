import { CiSearch } from "react-icons/ci";
import SupplierDetailsPagination from "./SupplierPagination";

import { FaArrowTrendDown } from "react-icons/fa6";


export default function SupplierOrders() {

    return (
        <>
            <div className="supplier_orders">
                <div className="orders_title"> Заказы  поставщика</div>

                <div className="orders_table">


                    <div className="order_carts">
                        <div className="order_cart">
                            <div className="general">
                                <p className="text">Общее заказано</p>
                                <h1 className="title">154</h1>
                            </div>
                            <div className="interest">
                                <FaArrowTrendDown className="icon" />
                                <h1 className="title">-3.1%</h1>
                            </div>
                        </div>
                        <div className="order_cart fell">
                            <div className="general">
                                <p className="text">Общее возвращено</p>
                                <h1 className="title">12</h1>
                            </div>
                            <div className="interest">
                                <FaArrowTrendDown className="icon" />
                                <h1 className="title">-3.1%</h1>
                            </div>

                        </div>
                        <div className="order_cart">
                            <div className="general">
                                <p className="text">Общая сумма заказов</p>
                                <h1 className="title">1,240,000 сом</h1>
                            </div>
                            <div className="interest">
                                <FaArrowTrendDown className="icon" />
                                <h1 className="title">-3.1%</h1>
                            </div>

                        </div>
                        <div className="order_cart fell">
                            <div className="general">
                                <p className="text">Общая сумма возвратов</p>
                                <h1 className="title">45,000 сом</h1>
                            </div>
                            <div className="interest">
                                <FaArrowTrendDown className="icon" />
                                <h1 className="title">-3.1%</h1>
                            </div>

                        </div>
                    </div>



                    <div className="search_filter">
                        <input placeholder="Поиск по названию материала" className="search" type="text" />
                        <div className="filter">Фильтр</div>
                        <CiSearch className="search_icon" />
                    </div>

                    <div className="orders">
                        <div className="order_details">
                            <h1 className="order_date title">Дата заказа / изменения</h1>
                            <h1 className="order_name title">Название материала</h1>
                            <h1 className="order_quantity title">Количество</h1>
                            <h1 className="order_status title">Статус операции</h1>
                            <h1 className="order_sum title">Сумма</h1>
                        </div>

                        <div className="order_details">
                            <h1 className="order_date">12.10.2023</h1>
                            <h1 className="order_name">Кирпич облицовочный</h1>
                            <h1 className="order_quantity">5000 шт</h1>
                            <h1 className="order_status accepted">+ Заказ</h1>
                            <h1 className="order_sum">150,000 сом</h1>
                        </div>

                        <div className="order_details">
                            <h1 className="order_date">10.10.2023</h1>
                            <h1 className="order_name">Цемент М-500</h1>
                            <h1 className="order_quantity">20 мешков</h1>
                            <h1 className="order_status rejected">- Возврат</h1>
                            <h1 className="order_sum">12,000 сом</h1>
                        </div>

                        <div className="order_details">
                            <h1 className="order_date">05.10.2023</h1>
                            <h1 className="order_name">Кирпич облицовочный</h1>
                            <h1 className="order_quantity">1.5 тонны</h1>
                            <h1 className="order_status accepted">+ Заказ</h1>
                            <h1 className="order_sum">95,000 сом</h1>
                        </div>
                    </div>
                    <SupplierDetailsPagination />

                </div>
            </div>
        </>
    )
}