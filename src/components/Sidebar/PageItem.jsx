import { NavLink } from "react-router-dom";

export default function PageItem({ icon, to, title, img }) {

    return (
        <>
            <NavLink to={to} className={`page`}>
                <div className="content">
                    <div className="line"></div>
                    {icon}
                    <h1 className="page_title">{title}</h1>
                </div>
            </NavLink>
        </>
    )
}