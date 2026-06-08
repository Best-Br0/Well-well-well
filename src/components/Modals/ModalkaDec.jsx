import { useEffect, useRef, useState } from "react";
import { FaMinus } from "react-icons/fa6";

export default function MaterialsModalkaDecrease({ setModal, data }) {

    const QuantyInp = useRef(null)
    const [quantity, setQuantity] = useState("");
    const overlay = useRef(null)
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setModal(false);
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    const overlayClose = (e) => {
        if (overlay.current.value === e.target.value) {
            setModal(false)
        }
    }

    return (
        <>
            <div ref={overlay} onClick={overlayClose} className="overlay_delrease">
                <div className="modalka">
                    <div className="head_modal">
                        <div className="icon_img">
                            <FaMinus className="icon" />
                        </div>
                        <div className="title">Уменьшить количество</div>
                    </div>
                    <div className="main_modal">

                        <div className="modalka_details">
                            <div className="detail">
                                <p className="text">{data?.title}:</p>
                                <h1 className="title">{data?.item}</h1>
                            </div>
                            <div className="detail">
                                <p className="text">Текущее количество:</p>
                                <h1 className="title">{data?.quanty}</h1>
                            </div>
                        </div>

                        <div className="change_quantity">
                            <h1 className="title">Введите количество для добавления</h1>
                            <input ref={QuantyInp} onChange={(e) => setQuantity(e.target.value)} placeholder="например: 50" className={`input_change ${Number(quantity) < 0 && "error_input"}`} type="text" />
                            {Number(quantity) < 0 && (
                                <h1 className="error_title">
                                    Количество не может быть меньше 0
                                </h1>
                            )}
                        </div>

                    </div>
                    <div className="foot_modal">
                        <button onClick={() => setModal(false)} className="btn">Отмена</button>
                        <button className={`btn save  ${Number(quantity) < 0 && "error_btn"}`}>Сохранить</button>
                    </div>
                </div>
            </div>
        </>
    )
}