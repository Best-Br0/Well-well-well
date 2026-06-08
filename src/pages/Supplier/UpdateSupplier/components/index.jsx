import React, { useState } from 'react';
import BackList from '../../../../components/BackList';

const SupplierUpdate = () => {
  const [formData, setFormData] = useState({
    companyName: 'Иванов Иван Иванович',
    contactPerson: 'Пётр Емельяненко',
    phone: '+996 (556) 12-22-32',
    age: '25',
    gender: 'м',
    address: 'Бишкек'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value;
    let digits = input.replace(/\D/g, '');

    if (digits.startsWith('996')) {
      digits = digits.substring(3);
    }

    digits = digits.substring(0, 9);

    let formattedPhone = '+996';
    if (digits.length > 0) {
      formattedPhone += ' (' + digits.substring(0, 3);
    }
    if (digits.length >= 4) {
      formattedPhone += ') ' + digits.substring(3, 5);
    }
    if (digits.length >= 6) {
      formattedPhone += '-' + digits.substring(5, 7);
    }
    if (digits.length >= 8) {
      formattedPhone += '-' + digits.substring(7, 9);
    }

    setFormData((prev) => ({
      ...prev,
      phone: formattedPhone
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные для отправки:', formData);
  };

  const handleCancel = () => {
    console.log('Действие отменено');
  };

  return (
    <div className="supplier-container">
      <BackList />
      <form className="supplier-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group large">
            <label htmlFor="companyName">Название компании / Имя поставщика</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group large">
            <label htmlFor="contactPerson">Контактное лицо</label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group large">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="+996 (FFF) FF-FF-FF"
            />
          </div>

          <div className="form-group small">
            <label htmlFor="age">Возраст</label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div className="form-group small">
            <label htmlFor="gender">Пол</label>
            <div className="select-wrapper">
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="м">м</option>
                <option value="ж">ж</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="address">Адрес</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Изменить поставщика
          </button>
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupplierUpdate;