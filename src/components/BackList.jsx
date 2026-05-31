import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function BackList() {

    const navigate = useNavigate()
    return (
        <>
            <div onClick={() => navigate(-1)} className="back_list">
                <FaArrowLeft className="icon" />
                <h1 className="title"> Назад к списку </h1>
            </div>
        </>
    )
}