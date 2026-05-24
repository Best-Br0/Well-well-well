import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";


export default function PagesOfPage({ title, icon, ofpages }) {

    const [pages, setPages] = useState(false)

    return (
        <>
            <div className="pages_of_page">
                <div className="page">
                    <div className="content">
                        <div className="line"></div>
                        {icon}
                        <h1 className="page_title">{title}</h1>
                    </div>
                    <IoChevronDownOutline style={{ transform: pages ? "rotate(180deg)" : "" }}
                        onClick={() => setPages(!pages)}
                        className="arrow" />
                </div>

                <div style={{ display: pages ? "inherit" : "none" }} className="of_pages">
                    <Link to="" className="page">{ofpages.first}</Link>
                    <Link to="" className="page">{ofpages.second}</Link>
                    <Link to="" className="page">{ofpages.last}</Link>
                </div>
            </div>
        </>
    )
}