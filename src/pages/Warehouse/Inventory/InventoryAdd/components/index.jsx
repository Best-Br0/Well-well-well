import React, { useState, useRef } from 'react';
import '../../../../../assets/scss/pages/_inventoryadd.scss';
import BackList from '../../../../../components/BackList';

const InventoryAdd = () => {
  const [formData, setFormData] = useState({
    title: '',
    purchasePrice: '',
    quantity: ''
  });

  const [imagePreview, setImagePreview] = useState(null);
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
    console.log('Добавление нового инвентаря:', { ...formData, image: imagePreview });
  };

  return (
    <div className="inventar-add-container">
      <BackList />

      <form className="inventar-form" onSubmit={handleSubmit}>
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
              {/* Пустой блок для сохранения пропорций сетки */}
              <div className="form-group empty-group"></div>
            </div>
          </div>

          {/* Правая колонка: Загрузка изображения */}
          <div className="photo-column">
            <div 
              className={`upload-zone ${imagePreview ? 'has-preview' : ''}`} 
              onClick={triggerFileInput}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                style={{ display: 'none' }}
              />
              
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="uploaded-preview" />
              ) : (
                <div className="upload-content">
                  <div className="upload-icon">🖼️</div>
                  <p className="upload-title">Загрузить фото</p>
                  <p className="upload-hint">PNG, JPG до 5 МБ</p>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Кнопки действий */}
        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Добавить
          </button>
          <button type="button" className="btn-cancel">
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default InventoryAdd;