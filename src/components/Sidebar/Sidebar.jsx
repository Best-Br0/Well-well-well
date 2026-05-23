import { Link, NavLink } from "react-router-dom";
import PageItem from "./PageItem";

export default function Sidebar() {

    return (
        <>
            <div className="Sidebar">
                <div className="sidebar_wrapper">

                    <div className="logotip">
                        <img className="logo_foto" src="/src/assets/icons/Logo.png" alt="logotip" />
                        <h1 className="logo_title"> ASORI</h1>
                    </div>

                    <div className="pages">
                        <NavLink to={"/"}>
                            <PageItem img={"LayoutDashboard"} title={"Главная"} />
                        </NavLink>
                        <NavLink to={"/main"}>
                            <PageItem act={"act.ve"} img={"Users"} title={"Сотрудники"} />
                        </NavLink>
                        <PageItem img={"Truck"} title={"Поставщики"} />
                        <PageItem img={"CircleUser"} title={"Клиенты"} />
                        <div className="with_pages">
                            <div className="page">
                                <div className="content">
                                    <div className="line"></div>
                                    <img className="page_foto" src="/src/assets/svg/Warehouse.svg" alt="page_img" />
                                    <h1 className="page_title">Склад</h1>
                                </div>
                                <img className="arrow" src="/src/assets/svg/ChevronDown.svg" alt="arrow" />
                            </div>
                            <div className="of_pages">
                                <Link className="page">Материалы</Link>
                                <Link className="page">Аренда</Link>
                                <Link className="page">Инвентарь</Link>
                            </div>

                            <div className="page">
                                <div className="content">
                                    <div className="line"></div>
                                    <img className="page_foto" src="/src/assets/svg/ArrowLeftRight.svg" alt="page_img" />
                                    <h1 className="page_title">Транзакции</h1>
                                </div>
                                <img className="arrow" src="/src/assets/svg/ChevronDown.svg" alt="arrow" />
                            </div>

                            <div className="page">
                                <div className="content">
                                    <div className="line"></div>
                                    <img className="page_foto" src="/src/assets/svg/GraduationCap.svg" alt="page_img" />
                                    <h1 className="page_title">Образование</h1>
                                </div>
                                <img className="arrow" src="/src/assets/svg/ChevronDown.svg" alt="arrow" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}