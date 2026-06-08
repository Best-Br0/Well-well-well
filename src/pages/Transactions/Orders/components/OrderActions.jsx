import { LuEye } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa6";

export default function TransactionOrderActions() {


    return (
        <>
            <div className="actions">
                <div className="action look">
                    <LuEye className="icon" />
                    <h1 className="title">Смотреть</h1>
                </div>
                <div className="action change">
                    <LuPencil className="icon" />
                    <h1 className="title">Изменить</h1>
                </div>
                <div className="action cancel">
                    <LuX className="icon" />
                    <h1 className="title">Отменить заказ</h1>
                </div>
                <div className="action pay">
                    <LiaMoneyBillSolid className="icon" />
                    <h1 className="title">Оплатить</h1>
                </div>
                <div className="action finish">
                    <FaCheck className="icon" />
                    <h1 className="title">Окончить заказ</h1>
                </div>
            </div>
        </>
    )
}