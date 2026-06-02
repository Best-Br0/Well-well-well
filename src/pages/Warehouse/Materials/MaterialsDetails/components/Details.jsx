import { GiBanknote } from "react-icons/gi";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa6";

export default function MaterialDetails() {



    return (
        <>
            <div className="material_details">
                <div className="material_foto">
                    <h1 className="title">Фото</h1>
                    <img className="foto" src="https://kam-company.ru/files/catalog/498de9698492e814664787c3998b1d8e.jpg" alt="" />
                </div>
                <div className="material_informations">
                    <div className="informations">
                        <div className="info">
                            <p className="text">Наименование</p>
                            <div className="subtitle">
                                <h1 className="title">Мрамор белый Carrara</h1>
                            </div>
                        </div>
                        <div className="info">
                            <p className="text">Цена продажи (за метр)</p>
                            <div className="subtitle">
                                <GiBanknote className="icon" />
                                <h1 className="title">4 500 сом</h1>
                            </div>
                        </div>
                        <div className="info">
                            <p className="text">Количество (метры)</p>
                            <div className="subtitle">
                                <RiBarChartGroupedLine className="icon" />
                                <h1 className="title">150 м</h1>
                            </div>
                        </div>
                        <div className="info">
                            <p className="text">Цвета</p>
                            <div className="colours">
                                <div className="colour">
                                    <div style={{background: "#FFF"}} className="color"></div>
                                    <h1 className="title">Белый</h1>
                                </div>
                                <div className="colour">
                                    <div style={{background: "#D1D5DB"}} className="color"></div>
                                    <h1 className="title">Серый</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="informations">
                        <div className="info">
                            <p className="text">Статус</p>
                            <h1 className="status">В наличии</h1>
                        </div>
                        <div className="info">
                            <p className="text">Цена покупки за метр</p>
                            <div className="subtitle">
                                <GiBanknote className="icon" />
                                <h1 className="title">2 800 сом</h1>
                            </div>
                        </div>
                        <div className="info">
                            <p className="text">Покупщик</p>
                            <div className="subtitle">
                                <FaUserTie className="icon" />
                                <h1 className="title">ООО "СтройСнаб"</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}