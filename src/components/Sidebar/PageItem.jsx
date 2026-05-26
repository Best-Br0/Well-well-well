import { NavLink, useLocation } from "react-router-dom";

export default function PageItem({ icon, to, title, img, active }) {

    const location = useLocation()

    return (
        <>
            <NavLink to={to} className={location.pathname.startsWith(active) ? "page active" : "page"}>
                <div className="content">
                    <div className="line"></div>
                    {icon}
                    <h1 className="page_title">{title}</h1>
                </div>
            </NavLink>
        </>
    )
}