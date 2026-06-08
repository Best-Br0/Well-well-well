import React, { useState, useRef } from 'react';
import BackList from '../../../../../components/BackList';

const InventoryUpdate = () => {
  const [formData, setFormData] = useState({
    title: 'ДСП Дуб Сонома',
    purchasePrice: '450.00',
    quantity: '150'
  });

  // Исходное изображение текстуры из макета
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
    console.log('Сохранение обновленного инвентаря:', { ...formData, image: imagePreview });
  };

  return (
    <div className="inventar-update-container">
      <BackList />

      <form className="inventar-form" onSubmit={handleSubmit}>
        <div className="form-main-layout">
          
          {/* Левая колонка: Поля ввода */}
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
                <label>Цена покупки</label>
                <div className="input-with-badge">
                  <input
                    type="number"
                    name="purchasePrice"
                    placeholder="0.00"
                    value={formData.purchasePrice}
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
              {/* Заглушка для выравнивания флекс-сетки */}
              <div className="form-group empty-group"></div>
            </div>
          </div>

          {/* Правая колонка: Картинка 50% + Кнопка замены 50% */}
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

        {/* Кнопки сохранения/отмены */}
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

export default InventoryUpdate;