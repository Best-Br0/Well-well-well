import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../../assets/scss/pages/_updatesuppiler.scss';

export default function UpdateSupplier() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: 'Иванов Иван Иванович',
    contactPerson: 'Пётр Емелянeнко',
    phone: '+996 (556) 12-22-32',
    age: '25',
    gender: 'м',
    address: 'Бишкек'
  });

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    if (phoneNumber.length <= 3) return '+996 ';
    if (phoneNumber.length <= 6) {
      return `+996 (${phoneNumber.slice(3)}`;
    }
    if (phoneNumber.length <= 8) {
      return `+996 (${phoneNumber.slice(3, 6)}) ${phoneNumber.slice(6)}`;
    }
    if (phoneNumber.length <= 10) {
      return `+996 (${phoneNumber.slice(3, 6)}) ${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8)}`;
    }
    return `+996 (${phoneNumber.slice(3, 6)}) ${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData((prev) => ({ ...prev, [name]: formatPhoneNumber(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <div className="container">
        <div className="supplier-container">
          <button type="button" className="supplier-container__back-btn" onClick={handleBack}>
            <span className="supplier-container__back-arrow">←</span> Назад к списку
          </button>

          <form className="supplier-form" onSubmit={handleSubmit}>
            <div className="supplier-form__row">
              <div className="supplier-form__field supplier-form__field--half">
                <label className="supplier-form__label">Название компании / Имя поставщика</label>
                <input
                  type="text"
                  name="companyName"
                  className="supplier-form__input"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              <div className="supplier-form__field supplier-form__field--half">
                <label className="supplier-form__label">Контактное лицо</label>
                <input
                  type="text"
                  name="contactPerson"
                  className="supplier-form__input"
                  value={formData.contactPerson}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="supplier-form__row">
              <div className="supplier-form__field supplier-form__field--half">
                <label className="supplier-form__label">Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  className="supplier-form__input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+996 (555) 12-34-56"
                />
              </div>

              <div className="supplier-form__field supplier-form__field--quarter">
                <label className="supplier-form__label">Возраст</label>
                <input
                  type="text"
                  name="age"
                  className="supplier-form__input"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              <div className="supplier-form__field supplier-form__field--quarter">
                <label className="supplier-form__label">Пол</label>
                <div className="supplier-form__select-wrapper">
                  <select
                    name="gender"
                    className="supplier-form__select"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="м">м</option>
                    <option value="ж">ж</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="supplier-form__row">
              <div className="supplier-form__field supplier-form__field--full">
                <label className="supplier-form__label">Адрес</label>
                <input
                  type="text"
                  name="address"
                  className="supplier-form__input"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="supplier-form__actions">
              <button type="submit" className="supplier-form__btn supplier-form__btn--submit">
                Изменить поставщика
              </button>
              <button type="button" className="supplier-form__btn supplier-form__btn--cancel" onClick={handleBack}>
                Отмена
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}