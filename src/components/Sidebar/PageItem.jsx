import { Link } from "react-router-dom";

export default function PageItem({ to, title, img }) {

    return (
        <>
            <Link to={to} className={`page`}>
                <div className="content">
                    <div className="line"></div>
                    <img className="page_foto" src={`/src/assets/svg/${img}.svg`} alt="page_img" />
                    <h1 className="page_title">{title}</h1>
                </div>
            </Link>
        </>
    )
}