import { Link } from "react-router-dom";
import PageItem from "./PageItem";
import PagesOfPage from "./PagesOfPage";

import { SlHome } from "react-icons/sl";
import { RxPeople } from "react-icons/rx";
import { CiDeliveryTruck } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

import { LuGraduationCap } from "react-icons/lu";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { LuWarehouse } from "react-icons/lu";

export default function Sidebar() {
    return (
        // tutorial
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
                        to="/employee"
                        title="Сотрудники"
                        active="/employee"
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

                        <PagesOfPage title={"Склад"} icon={<LuWarehouse className="page_foto" />}
                            ofpages={{ first: "Материалы", second: "Аренда", last: "Инвентарь" }} />
                        <PagesOfPage title={"Транзакций"} icon={<PiArrowsLeftRightBold className="page_foto" />}
                            ofpages={{ first: "Страница", second: "Страница", last: "Страница" }} />
                        <PagesOfPage title={"Оброзование"} icon={<LuGraduationCap className="page_foto" />}
                            ofpages={{ first: "Страница ", second: "Страница", last: "Страница" }} />

                    </div>
                </div>
            </div>
        </div>
    );
}