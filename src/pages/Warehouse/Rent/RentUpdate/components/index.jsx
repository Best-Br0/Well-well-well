import React, { useState, useRef } from 'react';
import BackList from '../../../../../components/BackList';

const RentUpdate = () => {
  const [formData, setFormData] = useState({
    title: 'ДСП Дуб Сонома',
    rentalPrice: '450.00',
    quantity: '150'
  });

  // Дефолтное превью текстуры дерева из макета редактирования
  const [imagePreview, setImagePreview] = useState('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=400');
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Сохранение изменений аренды:', { ...formData, image: imagePreview });
  };

  return (
    <div className="rent-update-container">
      <BackList />

      <form className="rent-form" onSubmit={handleSubmit}>
        <div className="form-main-layout">
          
          {/* Левая колонка с инпутами */}
          <div className="inputs-column">
            <div className="form-row">
              <div className="form-group">
                <label>Наименование</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Введите название материала"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Цена аренды</label>
                <div className="input-with-badge">
                  <input
                    type="number"
                    name="rentalPrice"
                    placeholder="0.00"
                    value={formData.rentalPrice}
                    onChange={handleChange}
                  />
                  <span className="badge">сом</span>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Количество (шт)</label>
                <div className="input-with-badge">
                  <input
                    type="number"
                    name="quantity"
                    placeholder="0"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                  <span className="badge">шт</span>
                </div>
              </div>
              {/* Пустой флекс-элемент для сохранения сетки */}
              <div className="form-group empty-group"></div>
            </div>
          </div>

          {/* Правая колонка: Разделенная зона фото (Превью + Кнопка загрузки) */}
          <div className="photo-column">
            <div className="upload-zone-wrapper">
              {imagePreview && (
                <div className="preview-container">
                  <img src={imagePreview} alt="Preview" className="preview-img" />
                </div>
              )}
              <div className="upload-action-zone" onClick={triggerFileInput}>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
                <div className="upload-content">
                  <div className="upload-icon">🖼️</div>
                  <p className="upload-title">Загрузить новое фото</p>
                  <p className="upload-hint">PNG, JPG до 5 МБ</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Кнопки действий */}
        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Сохранить
          </button>
          <button type="button" className="btn-cancel">
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentUpdate;