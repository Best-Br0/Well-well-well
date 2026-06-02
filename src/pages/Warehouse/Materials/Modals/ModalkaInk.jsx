import { FaPlus } from "react-icons/fa6";

export default function MaterialsModalkaIncrease() {

    return (
        <>
            <div className="overlay_increase">
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
                                <p className="text">Материал:</p>
                                <h1 className="title">Мрамор белый Carrara</h1>
                            </div>
                            <div className="detail">
                                <p className="text">Текущее количество:</p>
                                <h1 className="title">120 м</h1>
                            </div>
                        </div>

                        <div className="change_quantity">
                            <h1 className="title">Введите количество для добавления</h1>
                            <input placeholder="например: 50" className="input_change" type="text" />
                        </div>

                    </div>
                    <div className="foot_modal">
                        <button className="btn">Отмена</button>
                        <button className="btn save">Сохранить</button>
                    </div>
                </div>
            </div>
        </>
    )
}