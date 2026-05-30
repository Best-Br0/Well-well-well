import React, { useState } from 'react';
import "../../../../assets/scss/pages/_suppilerForm.scss";

export default function SupplierForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    age: '25',
    gender: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="supplier-section">
      <div className="container">
        <button type="button" className="back-button">
          <span className="arrow">←</span> Назад к списку
        </button>

        <form onSubmit={handleSubmit} className="supplier-form">
          <div className="form-row">
            <div className="form-group grid-6">
              <label>Название компании / Имя поставщика</label>
              <input
                type="text"
                name="companyName"
                placeholder="Введите название"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group grid-6">
              <label>Контактное лицо</label>
              <input
                type="text"
                name="contactPerson"
                placeholder="ФИО контактного лица"
                value={formData.contactPerson}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group grid-6">
              <label>Телефон</label>
              <input
                type="text"
                name="phone"
                placeholder="+996 (___) __-__-__"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group grid-3">
              <label>Возраст</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className="form-group grid-3">
              <label>Пол</label>
              <div className="select-wrapper">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden>Выбрать</option>
                  <option value="male">Мужской</option>
                  <option value="female">Женский</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group grid-12">
              <label>Адрес</label>
              <input
                type="text"
                name="address"
                placeholder="г. Бишкек, ул. ..."
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Добавить поставщика
            </button>
            <button type="button" className="btn-cancel">
              Отмена
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}