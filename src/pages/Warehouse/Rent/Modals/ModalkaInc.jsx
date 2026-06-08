import { FaPlus } from "react-icons/fa6";
import { useEffect, useRef } from "react";


export default function ItemModalkaIncrease({setModal}) {

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
            <div ref={overlay} onClick={overlayClose} className="overlay_increase">
                <div className="modalka">
                    <div className="head_modal">
                        <div className="icon_img">
                            <FaPlus className="icon" />
                        </div>
                        <div className="title">Увеличить количество</div>
                    </div>
                    <div className="main_modal">

                        <div className="modalka_details">
                            <div className="detail">
                                <p className="text">Предмет:</p>
                                <h1 className="title">Красная нить</h1>
                            </div>
                            <div className="detail">
                                <p className="text">Текущее количество:</p>
                                <h1 className="title">4 шт</h1>
                            </div>
                        </div>
                        <div className="change_quantity">
                            <h1 className="title">Введите количество для добавления</h1>
                            <input placeholder="например: 50" className="input_change" type="text" />
                        </div>
                    </div>
                    <div className="foot_modal">
                        <button onClick={() => setModal(false)} className="btn">Отмена</button>
                        <button className="btn save">Сохранить</button>
                    </div>
                </div>
            </div>
        </>
    )
}