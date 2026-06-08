import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";



export default function PagesOfPage({ title, icon, ofpages, linkpages }) {

    const [pages, setPages] = useState(false)
    const location = useLocation();

    const isActive =
        location.pathname === linkpages?.first ||
        location.pathname === linkpages?.second ||
        location.pathname === linkpages?.last;


    return (
        <>
            <div  >
                <div onClick={() => setPages(!pages)} className={isActive ? "page active" : "page"} >
                    <div className="content">
                        <div className="line"></div>
                        {icon}
                        <h1 className="page_title">{title}</h1>
                    </div>
                    <IoChevronDownOutline style={{ transform: pages ? "rotate(180deg)" : "" }}
                        className="arrow" />
                </div>

                <div style={{ display: pages ? "inherit" : "none" }} className="of_pages">
                    <Link to={linkpages?.first} className={
                        location.pathname === linkpages?.first
                            ? "page active"
                            : "page"
                    } >{ofpages.first}</Link>
                    <Link to={linkpages?.second} className={
                        location.pathname === linkpages?.second
                            ? "page active"
                            : "page"
                    } >{ofpages.second}</Link>
                    {linkpages?.last ? <Link to={linkpages?.last} className={
                        location.pathname === linkpages?.last
                            ? "page active"
                            : "page"
                    } >{ofpages.last}</Link> : ""}
                </div>
            </div>
        </>
    )
}