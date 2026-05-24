import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Хук для возврата назад
import "../../../../../assets/scss/pages/_createemployee.scss";
import FotoDefaultAvatar from "../../../../../assets/icons/foto.png";
// Импортируем все нужные иконки (Глаз открыт, Глаз закрыт, Стрелка назад)
import { IoEyeOutline, IoEyeOffOutline, IoArrowBackOutline } from "react-icons/io5"; 

export default function CreateEmployeeForm() {
    const navigate = useNavigate(); // Создаем функцию навигации
    const [showPassword, setShowPassword] = useState(false); // Состояние для пароля

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <section className='create_employee'>
                <button 
                    type="button" 
                    className="btn_back" 
                    onClick={() => navigate(-1)} 
                >
                    <IoArrowBackOutline className="btn_back_icon" />
                    <span>Назад к списку</span>
                </button>

            <div className="container">
                
              
                <label className="create_item_label">
                    <input type="file" accept="image/*" className='create_file_input' />
                    
                    <div className='create_foto_circle'>
                        <img src={FotoDefaultAvatar} alt="foto" />
                    </div>

                    <div>
                        <h2 className="create_title">Фото профиля</h2>
                        <p className='create_suptitle'>Загрузить фото сотрудника</p>
                    </div>
                </label>

                {/* Форма */}
                <form className="employee_form" onSubmit={(e) => e.preventDefault()}>
                    
                    <div className="form_row">
                        <div className="form_group">
                            <label>Полное имя</label>
                            <input type="text" placeholder="ФИО сотрудника" />
                        </div>
                        
                        <div className="form_group">
                            <label>Роль</label>
                            <div className="select_wrapper">
                                <select defaultValue="">
                                    <option value="" disabled hidden>Выбрать роль</option>
                                    <option value="admin">Администратор</option>
                                    <option value="manager">Менеджер</option>
                                </select>
                                <div className="select_arrow_icon"></div>
                            </div>
                        </div>
                    </div>

                    <div className="form_row">
                        <div className="form_group">
                            <label>Телефон</label>
                            {/* Изменено на type="text" для корректной работы маски номера */}
                            <input type="text" placeholder="+996 (___) __-__-__" /> 
                        </div>
                        
                        <div className="form_group">
                            <label>Год рождения</label>
                            <input type="number" placeholder="Например, 1998" />
                        </div>
                    </div>

                    <div className="form_group full_width">
                        <label>Адрес</label>
                        <input type="text" placeholder="г. Бишкек, ул. ..." />
                    </div>

                    <div className="form_group half_width">
                        <label>Пароль</label>
                        <div className="password_wrapper">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="********"   
                            />
                          
                            <button 
                                type="button" 
                                className="password_eye_btn" 
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                            </button>
                        </div>
                    </div>

                    <div className="form_actions">
                        <button type="submit" className="btn_submit">Добавить</button>
                        <button type="button" className="btn_cancel">Отмена</button>
                    </div>

                </form>

            </div>
        </section>
    );
}