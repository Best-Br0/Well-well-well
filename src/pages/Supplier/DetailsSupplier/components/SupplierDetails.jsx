import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import BackList from "../../../../components/BackList";

export default function SupplierDetails() {
    return (

        <>

            <div className="supplier_details">
                <BackList />

                <h1 className="details_title">Информация о поставщике</h1>
                <div className="details_table">

                    <div className="name_details">
                        <div className="name">
                            <p className="text">Название компании / Имя поставщика</p>
                            <h1 className="title">Иванов Иван Иванович</h1>
                        </div>
                        <div className="name">
                            <p className="text">Контактное лицо</p>
                            <h1 className="title">Иванов Иван Иванович</h1>
                        </div>
                    </div>
                    <div className="supp_details">
                        <div className="detail">
                            <h1 className="text">Телефон</h1>
                            <div className="subtitle">
                                <FiPhone className="icon" />
                                <h1 className="title">+996 (555) 12-34-56</h1>
                            </div>
                        </div>
                        <div className="detail">
                            <h1 className="text">Возраст</h1>
                            <div className="subtitle">
                                <FiCalendar className="icon" />
                                <h1 className="title">1995</h1>
                            </div>
                        </div>

                        <div className="detail">
                            <h1 className="text">Адрес</h1>
                            <div className="subtitle">
                                <FiMapPin className="icon" />
                                <h1 className="title">г. Бишкек, ул. Киевская, д. 114, кв. 12</h1>
                            </div>
                        </div>
                        <div className="detail">
                            <h1 className="text">пол</h1>
                            <div className="subtitle">
                                <FiCalendar className="icon" />
                                <h1 className="title">M</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}