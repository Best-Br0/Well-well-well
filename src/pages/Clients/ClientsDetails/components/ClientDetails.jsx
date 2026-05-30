import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";


export default function ClientDetails() {



    return (
        <>
            <div className="client_details">
                <h1 className="details_title">Информация о клиенте</h1>
                <div className="details_table">

                    <div className="name_details">
                        <div className="name">
                            <p className="text">Имя клиента</p>
                            <h1 className="title">Иванов Иван Иванович</h1>
                        </div>
                        
                    </div>
                    <div className="clint_details">
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
                    <h1 className="status_client">VIP Клиент</h1>
                </div>
            </div>
        </>
    )
}