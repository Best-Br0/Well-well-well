import React, { useState } from "react";
import { IMaskInput } from "react-imask";

const AddSupplierForm = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    age: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <div className="supplier-form-container">
      <button type="button" className="back-link" onClick={onBack}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Назад к списку
      </button>

      <form onSubmit={handleSubmit} className="supplier-form card">
        <div className="form-grid">
          <div className="form-group">
            <label>Название компании / Имя поставщика</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Введите название"
            />
          </div>

          <div className="form-group">
            <label>Контактное лицо</label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="ФИО контактного лица"
            />
          </div>

          <div className="form-group">
            <label>Телефон</label>
            <IMaskInput
              mask="+996 (000) 00-00-00"
              lazy={false}
              placeholderChar="_"
              value={formData.phone}
              unmask={false}
              onAccept={handlePhoneChange}
              name="phone"
            />
          </div>

          <div className="flex-row-group">
            <div className="form-group size-half">
              <label>Возраст</label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="25"
              />
            </div>

            <div className="form-group size-half">
              <label>Пол</label>
              <div className="select-wrapper">
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="" disabled hidden>Выбрать</option>
                  <option value="male">Мужской</option>
                  <option value="female">Женский</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Адрес</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="г. Бишкек, ул. ..."
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Добавить поставщика
          </button>
          <button type="button" className="btn-cancel" onClick={onBack}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSupplierForm;