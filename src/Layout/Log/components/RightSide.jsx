import { FiPhone } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";

export default function RightSide() {


    return (
        <>
            <div className="right_side">

                <div className="context">
                    <div className="logotip">
                        <h1 className="title">ASORI</h1>
                    </div>
                    <div className="welcome">
                        <h1 className="title">Добро пожаловать!</h1>
                        <p className="text">Войдите в свой аккаунт, чтобы продолжить работу</p>
                    </div>
                </div>

                <div className="login">

                    <div className="filling">
                        <div className="input_cont">
                            <h1 className="title">Номер телефона</h1>
                            <div className="input_box">
                                <input placeholder="+996 (___) ___-___" className="input" type="text" />
                                <div className="icons">
                                    <FiPhone className="icon" />
                                </div>
                            </div>
                        </div>

                        <div className="input_cont">
                            <h1 className="title">Пароль</h1>
                            <div className="input_box">
                                <input placeholder="••••••••" className="input" type="text" />
                                <div className="icons">
                                    <IoLockClosedOutline className="icon" />
                                    <LuEye className="icon" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="login_box">
                        <div className="me">
                            <div className="remember_me">
                                <input className="checkbox" type="checkbox" />
                                <div className="text">Запомнить меня</div>
                            </div>
                            <div className="forget_password">Забыли пароль ?</div>
                        </div>
                        <button className="login_btn">Войти
                            <p>{">"}</p>
                        </button>
                    </div>
                    <h1 className="error_title">Неверный номер телефона или пароль</h1>
                </div>

                <div className="details">
                    <h1 className="title">Политика <span>конфиденциальности</span></h1>
                    <h1 className="title">Условия <span>использования</span></h1>
                    <h1 className="title">Поддержка</h1>
                    <h1 style={{ color: "#31383F80" }} className="title">© 2024 ASORI</h1>
                </div>
            </div>
        </>
    )
}