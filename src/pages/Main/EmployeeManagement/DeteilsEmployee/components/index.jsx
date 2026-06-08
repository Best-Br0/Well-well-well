import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IoArrowBackOutline, IoCallOutline, IoCalendarOutline, IoLocationOutline, IoLockClosedOutline } from 'react-icons/io5'

export default function DeteilsEmployee() {
    const navigate = useNavigate()
    const { id } = useParams()

    return (
        <section className="view-employee-section">
            <div className="container">
                <div className="back-to-list" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
                    <IoArrowBackOutline className="back-icon" />
                    <span>Назад к списку</span>
                </div>

                <div className="employee-view-card">
                    <div className="employee-view-content">

                        <div className="employee-photo-block">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                alt="Profile"
                                className="employee-photo"
                            />
                            <span className="photo-label">ФОТО СОТРУДНИКА</span>
                        </div>

                        <div className="employee-info-block">
                            <div className="info-group name-group">
                                <label>ПОЛНОЕ ИМЯ</label>
                                <h2>Иванов Иван Иванович</h2>
                            </div>

                            <div className="info-row">
                                <div className="info-group">
                                    <label>ТЕЛЕФОН</label>
                                    <div className="info-value">
                                        <IoCallOutline className="info-icon" />
                                        <span>+996 (555) 12-34-56</span>
                                    </div>
                                </div>

                                <div className="info-group">
                                    <label>ГОД РОЖДЕНИЯ</label>
                                    <div className="info-value">
                                        <IoCalendarOutline className="info-icon" />
                                        <span>1995</span>
                                    </div>
                                </div>
                            </div>

                            <div className="info-group">
                                <label>АДРЕС</label>
                                <div className="info-value">
                                    <IoLocationOutline className="info-icon" />
                                    <span>г. Бишкек, ул. Киевская, д. 114, кв. 12</span>
                                </div>
                            </div>

                            <div className="info-group">
                                <label>ПАРОЛЬ</label>
                                <div className="password-masked">
                                    <span className="dots">••••••••</span>
                                    <div className="lock-icon-wrapper">
                                        <IoLockClosedOutline />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}