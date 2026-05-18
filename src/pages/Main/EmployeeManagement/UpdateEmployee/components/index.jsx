import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBackOutline, IoCameraOutline, IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import "../../../../../assets/scss/pages/_updateemployee.scss";

export default function UpdateEmployee() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [showPassword, setShowPassword] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [phone, setPhone] = useState("");

    const handleSave = (e) => {
        e.preventDefault();
        console.log("Сохраняем ID:", id);
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
        <section className="update-employee-section">
            <div className="container">
                <div className="back-to-list" onClick={() => navigate(-1)}>
                    <IoArrowBackOutline className="back-icon" />
                    <span>Назад к списку</span>
                </div>

                <div className="employee-form-card">
                    <form onSubmit={handleSave} className="employee-form">

                        <div className="avatar-upload-block">
                            <div className="avatar-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
                                <img
                                    src={avatarPreview || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                    alt="Profile"
                                    className="avatar-preview"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <label htmlFor="avatar-input" className="camera-badge" style={{ cursor: 'pointer' }}>
                                    <IoCameraOutline />
                                </label>
                                <input 
                                    type="file" 
                                    id="avatar-input" 
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }} 
                                />
                            </div>
                            <div className="avatar-text">
                                <h3>Фото профиля</h3>
                                <span className="upload-link" onClick={() => document.getElementById('avatar-input').click()} style={{ cursor: 'pointer' }}>
                                    {avatarPreview ? 'Изменить фото' : 'Загрузить новое фото'}
                                </span>
                            </div>
                        </div>

                        <div className="form-grid">
                            <div className="input-group">
                                <label>Полное имя</label>
                                <input type="text" placeholder="Иванов Иван Иванович" />
                            </div>

                            <div className="input-group">
                                <label>Телефон</label>
                                <input 
                                    type="text" 
                                    placeholder="+996 (555) 12-34-56" 
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    onFocus={handlePhoneFocus}
                                />
                            </div>

                            <div className="input-group">
                                <label>Год рождения</label>
                                <select defaultValue="1995">
                                    <option value="1995">1995</option>
                                    <option value="1996">1996</option>
                                    <option value="1997">1997</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <label>Адрес</label>
                                <input type="text" placeholder="г. Бишкек, ул. Киевская, д. 114, кв. 12" />
                            </div>

                            <div className="input-group full-width password-group">
                                <label>Пароль</label>
                                <div className="password-wrapper">
                                    <input type={showPassword ? "text" : "password"} placeholder="Введите новый пароль" />
                                    <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="btn-save">Сохранить</button>
                            <button type="button" className="btn-cancel" onClick={() => navigate(-1)}>Отмена</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}