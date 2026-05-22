import { Link } from "react-router-dom";

export default function PageItem({ act, title, img }) {

    return (
        <>
            <Link className={`page ${act}`}>
                <div className="content">
                    <div className="line"></div>
                    <img className="page_foto" src={`/src/assets/svg/${img}.svg`} alt="page_img" />
                    <h1 className="page_title">{title}</h1>
                </div>
            </Link>
        </>
    )

}