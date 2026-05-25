import Watch from "../../../assets/icons/watch.svg"
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import VIP from "../../../assets/icons/cup.svg"

export default function ClientsManagmentListItem({ id, name, number, gender }) {
    const [isOpen, setIsOpen] = useState(false);

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
        <div className="clientsmanagmentlistitem">
            <p className="clientsmanagmentlistitem_id">{id}</p>
            <p className="clientsmanagmentlistitem_p">{name}</p>
            <div className="clientsmanagmentlistitem_p">{number}</div>
            <div className="clientsmanagmentlistitem_status_box">
                <img className="clientsmanagmentlistitem_status_img" src={VIP} alt="" />
                <h6 className="clientsmanagmentlistitem_status_text">VIP</h6>
            </div>
            <div className="clientsmanagmentlistitem_gender_box">
                {gender}
            </div>
            <div className="employeemanagementlistitem_actions">
                <Link to={"/clients/details/id"}>
                    <div className="employeemanagementlistitem_actions_watch" style={{ cursor: 'pointer' }}>
                        <VisibilityOutlinedIcon className="employeemanagementlistitem_watchicons" />
                    </div>
                </Link>

                <Link to={"/clients/update/:id"}>
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
