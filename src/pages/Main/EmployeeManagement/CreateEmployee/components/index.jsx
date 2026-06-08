import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    IoEyeOutline, 
    IoEyeOffOutline, 
    IoArrowBackOutline, 
    IoCameraOutline 
} from "react-icons/io5";

export default function CreateEmployeeForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [phone, setPhone] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setAvatarPreview(imageUrl);
        }
    };

    const handlePhoneChange = (e) => {
        let input = e.target.value;
        if (!input) {
            setPhone("");
            return;
        }

        const digits = input.replace(/\D/g, "");
        let cleaned = digits;
        if (digits.startsWith("996")) {
            cleaned = digits.slice(3);
        }

        cleaned = cleaned.slice(0, 9);

        let formatted = "+996 ";
        if (cleaned.length > 0) {
            formatted += "(" + cleaned.slice(0, 3);
        }
        if (cleaned.length >= 3) {
            formatted += ") " + cleaned.slice(3, 5);
        }
        if (cleaned.length >= 5) {
            formatted += "-" + cleaned.slice(5, 7);
        }
        if (cleaned.length >= 7) {
            formatted += "-" + cleaned.slice(7, 9);
        }

        setPhone(formatted);
    };

    const handlePhoneFocus = () => {
        if (!phone) {
            setPhone("+996 (");
        }
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
                <label className="create_item_label" style={{ cursor: 'pointer' }}>
                    <input 
                        type="file" 
                        accept="image/*" 
                        className='create_file_input' 
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />

                    <div className='create_foto_circle' style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {avatarPreview ? (
                            <img 
                                src={avatarPreview} 
                                alt="Avatar Preview" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ) : (
                            <IoCameraOutline />
                        )}
                    </div>

                    <div>
                        <h2 className="create_title">Фото профиля</h2>
                        <p className='create_suptitle'>
                            {avatarPreview ? 'Изменить фото сотрудника' : 'Загрузить фото сотрудника'}
                        </p>
                    </div>
                </label>

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
                            <input 
                                type="text" 
                                placeholder="+996 (___) __-__-__" 
                                value={phone}
                                onChange={handlePhoneChange}
                                onFocus={handlePhoneFocus}
                            />
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
                        <button type="button" className="btn_cancel" onClick={() => navigate(-1)}>Отмена</button>
                    </div>
                </form>
            </div>
        </section>
    );
}