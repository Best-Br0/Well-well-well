import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../../assets/scss/pages/_clientsform.scss'

export default function ClientsAdd() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')

  const handleGoBack = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  const handlePhoneFocus = () => {
    if (!phone) {
      setPhone('+996 (')
    }
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value
    // Не позволяем удалить префикс "+996 ("
    if (value.startsWith('+996 (')) {
      setPhone(value)
    } else if (value.length < 6) {
      setPhone('+996 (')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Данные формы отправлены')
  }

  return (
    <div className="clients-form-page">

      <a href="#" className="back-to-list-btn" onClick={handleGoBack}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Назад к списку
      </a>

      <form className="clients-main-form" onSubmit={handleSubmit}>
        <div className="form-grid-container">

          <div className="form-field-group width-6">
            <label htmlFor="companyName">Название компании / Имя поставщика</label>
            <input type="text" id="companyName" placeholder="Введите название" />
          </div>

          <div className="form-field-group width-6">
            <label htmlFor="contactPerson">Контактное лицо</label>
            <input type="text" id="contactPerson" placeholder="ФИО контактного лица" />
          </div>

          {/* Поле телефона с фокусом и маской */}
          <div className="form-field-group width-6">
            <label htmlFor="phone">Телефон</label>
            <input
              type="text"
              id="phone"
              placeholder="+996 (___) __-__-__"
              value={phone}
              onFocus={handlePhoneFocus}
              onChange={handlePhoneChange}
            />
          </div>

          <div className="form-field-group width-3">
            <label htmlFor="age">Возраст</label>
            <input type="number" id="age" placeholder="25" />
          </div>

          <div className="form-field-group width-3">
            <label htmlFor="gender">Пол</label>
            <div className="custom-select-box">
              <select id="gender" defaultValue="">
                <option value="" disabled>Выбрать</option>
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
              </select>
            </div>
          </div>

          <div className="form-field-group width-12">
            <label htmlFor="address">Адрес</label>
            <input type="text" id="address" placeholder="г. Бишкек, ул. ..." />
          </div>

        </div>

        <div className="form-submit-actions">
          <button type="submit" className="action-btn submit-btn">Добавить поставщика</button>
          <button type="button" className="action-btn cancel-btn" onClick={handleGoBack}>Отмена</button>
        </div>
      </form>

    </div>
  )
}