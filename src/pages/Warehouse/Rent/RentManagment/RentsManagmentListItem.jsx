import Watch from "../../../../assets/icons/watch.svg"
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import VIP from "../../../../assets/icons/cup.svg";
import MaterialsModalkaDecrease from "../Modals/ModalkaDec";
import ItemModalkaDecrease from "../Modals/ModalkaDec";
import ItemModalkaIncrease from "../Modals/ModalkaInc";



export default function RentsManagmentListItem({ id, name, price, quantity, status, statusbox }) {
    const [isOpen, setIsOpen] = useState(false);
    const [decModal, setDecModal] = useState(false)
    const [inkModal, setInkModal] = useState(false)

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <div className="rentmanagmentlistitem">
            <p className="materialsmanagmentlistitem_id">{id}</p>
            <p className="materialsmanagmentlistitem_text">{name}</p>
            <p className="materialsmanagmentlistitem_text">{price}</p>
            <p className="materialsmanagmentlistitem_text">{quantity}</p>
            <div className={statusbox}>{status}</div>
            <div className="materialsmanagmentlistitem_color"></div>
            <div className="employeemanagementlistitem_actions">
                <div onClick={() => setInkModal(true)} className="materialsmanagmentlistitem_plus">+</div>
                {inkModal ? <ItemModalkaIncrease setModal={setInkModal} /> : ""}
                <div onClick={() => setDecModal(true)} className="materialsmanagmentlistitem_minus"></div>
                {decModal ? <ItemModalkaDecrease setModal={setDecModal} /> : ""}
                <Link to={"/rent/details/id"}>
                    <div className="employeemanagementlistitem_actions_watch" style={{ cursor: 'pointer' }}>
                        <VisibilityOutlinedIcon className="employeemanagementlistitem_watchicons" />
                    </div>
                </Link>

                <Link to={"/rent/update/:id"}>
                    <div className="employeemanagementlistitem_actions_edit">
                        <ModeOutlinedIcon className="employeemanagementlistitem_editicons" />
                    </div>
                </Link>
                <div
                    className="employeemanagementlistitem_actions_delete"
                    onClick={() => setIsOpen(true)}
                    style={{ cursor: 'pointer' }}
                >
                    <DeleteOutlineOutlinedIcon className="employeemanagementlistitem_deleteicons" />
                </div>
            </div>
            {
                isOpen && (
                    <div className="modal" onClick={() => setIsOpen(false)}>
                        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                            <div className="modal_warning">
                                <WarningAmberRoundedIcon className="modal_warning_icons" />
                            </div>
                            <h3 className="modal_text">Вы уверены, что хотите удалить сотрудника Иванов Иван?</h3>
                            <p className="modal_reminding">Это действие нельзя будет отменить</p>
                            <div className="modal_wrapper">
                                <button className="modal_btn_yes">Да, удалить</button>
                                <button className="modal_btn_no" onClick={() => setIsOpen(false)}>Отмена</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

