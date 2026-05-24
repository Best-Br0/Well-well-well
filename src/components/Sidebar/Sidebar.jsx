import { Link } from "react-router-dom";
import PageItem from "./PageItem";

import { SlHome } from "react-icons/sl";
import { RxPeople } from "react-icons/rx";
import { CiDeliveryTruck } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="sidebar_wrapper">

                <div className="logotip">
                    <img
                        className="logo_foto"
                        src="/src/assets/icons/Logo.png"
                        alt="logotip"
                    />
                    <h1 className="logo_title">ASORI</h1>
                </div>

                <div className="pages">
                    <PageItem
                        icon={<SlHome className="page_foto" />}
                        to="/"
                        title="Главная"
                    />

                    <PageItem
                        icon={<RxPeople className="page_foto" />}
                        to="/empleer"
                        title="Сотрудники"
                    />

                    <PageItem
                        icon={<CiDeliveryTruck className="page_foto" />}
                        to="/supplier"
                        title="Поставщики"
                    />

                    <PageItem
                        icon={<RxAvatar className="page_foto" />}
                        to="/clients"
                        title="Клиенты"
                    />

                    <div className="with_pages">

                        <div className="page">
                            <div className="content">
                                <div className="line"></div>
                                <img
                                    className="page_foto"
                                    src="/src/assets/svg/Warehouse.svg"
                                    alt=""
                                />
                                <h1 className="page_title">Склад</h1>
                            </div>

                            <img
                                className="arrow"
                                src="/src/assets/svg/ChevronDown.svg"
                                alt=""
                            />
                        </div>

                        <div className="of_pages">
                            <Link to="" className="page">Материалы</Link>
                            <Link to="" className="page">Аренда</Link>
                            <Link to="" className="page">Инвентарь</Link>
                        </div>

                        <div className="page">
                            <div className="content">
                                <div className="line"></div>

                                <img
                                    className="page_foto"
                                    src="/src/assets/svg/ArrowLeftRight.svg"
                                    alt=""
                                />

                                <h1 className="page_title">
                                    Транзакции
                                </h1>
                            </div>

                            <img
                                className="arrow"
                                src="/src/assets/svg/ChevronDown.svg"
                                alt=""
                            />
                        </div>

                        <div className="page">
                            <div className="content">
                                <div className="line"></div>

                                <img
                                    className="page_foto"
                                    src="/src/assets/svg/GraduationCap.svg"
                                    alt=""
                                />
                                <h1 className="page_title">
                                    Образование
                                </h1>
                            </div>
                            <img
                                className="arrow"
                                src="/src/assets/svg/ChevronDown.svg"
                                alt=""
                            />
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}