import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";


export default function PagesOfPage({ title, icon, ofpages, linkpages }) {

    const [pages, setPages] = useState(false)

    return (
        <>
            <div className="pages_of_page">
                <div onClick={() => setPages(!pages)} className="page">
                    <div className="content">
                        <div className="line"></div>
                        {icon}
                        <h1 className="page_title">{title}</h1>
                    </div>
                    <IoChevronDownOutline style={{ transform: pages ? "rotate(180deg)" : "" }}
                        className="arrow" />
                </div>

                <div style={{ display: pages ? "inherit" : "none" }} className="of_pages">
                    <Link to={linkpages?.first} className="page">{ofpages.first}</Link>
                    <Link to={linkpages?.second} className="page">{ofpages.second}</Link>
                    <Link to={linkpages?.last} className="page">{ofpages.last}</Link>
                </div>
            </div>
        </>
    )
}