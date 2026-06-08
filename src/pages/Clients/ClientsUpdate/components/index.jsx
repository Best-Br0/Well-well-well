import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ClientsUpdate() {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('+996 (556) 12-22-32')

  const handleGoBack = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  const handlePhoneFocus = () => {
    if (!phone) setPhone('+996 (')
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value
    if (value.startsWith('+996 (')) {
      setPhone(value)
    } else if (value.length < 6) {
      setPhone('+996 (')
    }
  }

  return (
    <div className="clients-form-page">
      
      <a href="#" className="back-to-list-btn" onClick={handleGoBack}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Назад к списку
      </a>

      <form className="clients-main-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-grid-container">
          
          <div className="form-field-group width-6">
            <label htmlFor="fullName">Полное имя</label>
            <input type="text" id="fullName" defaultValue="Иванов Иван Иванович" />
          </div>

          <div className="form-field-group width-6">
            <label htmlFor="address">Адрес</label>
            <input type="text" id="address" defaultValue="Бишкек" />
          </div>

          <div className="form-field-group width-6">
            <label htmlFor="phone">Телефон</label>
            <input 
              type="text" 
              id="phone" 
              value={phone}
              onFocus={handlePhoneFocus}
              onChange={handlePhoneChange}
            />
          </div>

          <div className="form-field-group width-6">
            <label htmlFor="age">Возраст</label>
            <input type="number" id="age" defaultValue="25" />
          </div>

          <div className="form-field-group width-3">
            <label htmlFor="gender">Пол</label>
            <div className="custom-select-box">
              <select id="gender" defaultValue="m">
                <option value="m">м</option>
                <option value="f">ж</option>
              </select>
            </div>
          </div>

          <div className="form-field-group width-3">
            <label htmlFor="status">Статус</label>
            <div className="custom-select-box status-select-wrapper">
              <select id="status" defaultValue="vip">
                <option value="budget">💸 Бюджетный</option>
                <option value="medium">⚖️ Средний</option>
                <option value="vip">🏆 VIP</option>
              </select>
            </div>
          </div>

        </div>

        <div className="form-submit-actions">
          <button type="submit" className="action-btn submit-btn">Изменить поставщика</button>
          <button type="button" className="action-btn cancel-btn" onClick={handleGoBack}>Отмена</button>
        </div>
      </form>

    </div>
  )
}