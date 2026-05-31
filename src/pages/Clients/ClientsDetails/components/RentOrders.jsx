export default function RentOrdersClient() {


    return (
        <>
            <div className="rent_orders_table">
                <div className="table">
                    <div className="table_head">
                        <div className="details">
                            <h1 className="table_head_title">Заказы клиента</h1>
                            <div className="filter">
                                <div className="select active">
                                    <h1 className="title">Все</h1>
                                </div>
                                <div className="select">
                                    <h1 className="title">В процессе</h1>
                                </div>
                                <div className="select">
                                    <h1 className="title">Оплачено</h1>
                                </div>
                                <div className="select">
                                    <h1 className="title">Должник</h1>
                                </div>
                                <div className="select">
                                    <h1 className="title">Просрочен</h1>
                                </div>
                                <div className="select">
                                    <h1 className="title">Окончен</h1>
                                </div>
                            </div>
                        </div>
                        <button className="btn">Все заказы</button>
                    </div>

                    <div className="table_main">
                        <div className="item">
                            <h1 className="item_title id">Order ID</h1>
                            <h1 className="item_title type">Тип заказа</h1>
                            <h1 className="item_title date">ДАта заказа</h1>
                            <h1 className="item_title status">Статус</h1>
                            <h1 className="item_title sum">Сумма заказа</h1>
                        </div>
                        <div className="item">
                            <h1 className="idsum_title id">#ORD-0921</h1>
                            <h1 className="typedate_title type">Материалы</h1>
                            <h1 className="typedate_title date">10.10.23 - 20.10.23</h1>
                            <div className="status">
                                <h1 className="status_title">Оплачено</h1>
                            </div>
                            <h1 className="idsum_title sum">45,000 сом</h1>
                        </div>
                        <div className="item">
                            <h1 className="idsum_title id">#ORD-0918</h1>
                            <h1 className="typedate_title type">Жалюзи</h1>
                            <h1 className="typedate_title date">01.10.23 - 05.10.23</h1>
                            <div className="status">
                                <h1 className="status_title progress">В процессе</h1>
                            </div>
                            <h1 className="idsum_title sum">12,500 сом</h1>
                        </div>
                    </div>
                </div>


                <div className="table">
                    <div className="table_head">
                        <div className="details">
                            <h1 className="table_head_title">Аренды клиента</h1>
                            <div className="filter">
                                <div className="select active">
                                    <h1 className="title">Все</h1>
                                </div>
                                <div className="select">
                                    <h1 className="title">Активна</h1>
                                </div>
                                <div className="select">
                                    <h1 className="title">Оплачено</h1>
                                </div>
                                <div className="select">
                                    <h1 className="title">Просрочен</h1>
                                </div>
                                <div className="select">
                                    <h1 className="title">Завершена</h1>
                                </div>

                            </div>
                        </div>
                        <button className="btn">Все аренды</button>
                    </div>
                    <div className="table_main">
                        <div className="item">
                            <h1 className="item_title id">Rental ID</h1>
                            <h1 className="item_title type">Название товара</h1>
                            <h1 className="item_title date">Период аренды</h1>
                            <h1 className="item_title status">Статус</h1>
                            <h1 className="item_title sum">Сумма аренды</h1>
                        </div>
                        <div className="item">
                            <h1 className="idsum_title id">#RNT-104</h1>
                            <h1 className="typedate_title type">Леса строительные</h1>
                            <h1 className="typedate_title date">10.10.23 - 20.10.23</h1>
                            <div className="status">
                                <h1 className="status_title active">Активна</h1>
                            </div>
                            <h1 className="idsum_title sum">8,000 сом</h1>
                        </div>
                        <div className="item">
                            <h1 className="idsum_title id">#RNT-099</h1>
                            <h1 className="typedate_title type">Перфоратор Makita</h1>
                            <h1 className="typedate_title date">01.10.23 - 05.10.23</h1>
                            <div className="status">
                                <h1 className="status_title">Оплачена</h1>
                            </div>
                            <h1 className="idsum_title sum">2,500 сом</h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}