import React, { useState, useRef } from 'react';
import BackList from '../../../../../components/BackList';

const AVAILABLE_COLORS = [
  { id: 'white', name: 'Белый', hex: '#ffffff', border: true },
  { id: 'black', name: 'Черный', hex: '#000000' },
  { id: 'gray', name: 'Серый', hex: '#64748b' },
  { id: 'red', name: 'Красный', hex: '#ef4444' },
  { id: 'orange', name: 'Оранжевый', hex: '#f97316' },
  { id: 'yellow', name: 'Желтый', hex: '#eab308' },
  { id: 'green', name: 'Зеленый', hex: '#22c55e' },
  { id: 'light-green', name: 'Салатовый', hex: '#84cc16' },
  { id: 'emerald', name: 'Изумрудный', hex: '#10b981' },
  { id: 'light-blue', name: 'Голубой', hex: '#06b6d4' },
  { id: 'blue', name: 'Синий', hex: '#3b82f6' },
  { id: 'dark-blue', name: 'Темно-синий', hex: '#1d4ed8' },
  { id: 'purple', name: 'Фиолетовый', hex: '#a855f7' },
  { id: 'magenta', name: 'Пурпурный', hex: '#d946ef' },
  { id: 'pink', name: 'Розовый', hex: '#ec4899' },
  { id: 'burgundy', name: 'Бордовый', hex: '#991b1b' },
  { id: 'brown', name: 'Коричневый', hex: '#78350f' },
  { id: 'beige', name: 'Бежевый', hex: '#fef08a' },
  { id: 'gold', name: 'Золотой', hex: '#eab308' },
  { id: 'silver', name: 'Серебряный', hex: '#cbd5e1' }
];

const BUYERS_MOCK = ['Иванов Иван', 'Иванченко Петр', 'ОсОО "Иван-Строй"', 'Алексей Петров', 'ООО Вектор'];

const MaterialAdd = () => {
  const [formData, setFormData] = useState({
    title: '',
    salePrice: '',
    quantity: '',
    purchasePrice: '',
    buyer: ''
  });

  const [selectedColors, setSelectedColors] = useState(['red', 'blue', 'pink']);
  const [buyerSearch, setBuyerSearch] = useState('');
  const [isBuyerDropdownOpen, setIsBuyerDropdownOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  
  const fileInputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Логика переключения цветов (круглые кнопки)
  const handleColorToggle = (colorId) => {
    setSelectedColors((prev) =>
      prev.includes(colorId) ? prev.filter((id) => id !== colorId) : [...prev, colorId]
    );
  };

  // Удаление цвета через крестик на теге
  const handleRemoveColorTag = (colorId) => {
    setSelectedColors((prev) => prev.filter((id) => id !== colorId));
  };

  // Логика загрузки изображения
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

  // Фильтрация списка покупателей
  const filteredBuyers = BUYERS_MOCK.filter((buyer) =>
    buyer.toLowerCase().includes(buyerSearch.toLowerCase())
  );

  const handleSelectBuyer = (buyerName) => {
    setBuyerSearch(buyerName);
    setFormData((prev) => ({ ...prev, buyer: buyerName }));
    setIsBuyerDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      colors: selectedColors,
      image: imagePreview
    };
    console.log('Отправка данных нового материала:', finalData);
  };

  return (
    <div className="material-add-container">
      <BackList />

      <form className="material-form" onSubmit={handleSubmit}>
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
                <label>Цена продажи (за метр)</label>
                <div className="input-with-badge">
                  <input
                    type="number"
                    name="salePrice"
                    placeholder="0.00"
                    value={formData.salePrice}
                    onChange={handleChange}
                  />
                  <span className="badge">сом</span>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Количество (метры)</label>
                <div className="input-with-badge">
                  <input
                    type="number"
                    name="quantity"
                    placeholder="0"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                  <span className="badge">м</span>
                </div>
              </div>
              <div className="form-group">
                <label>Цена покупки за метр</label>
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
              <div className="form-group full-width dropdown-group" ref={dropdownRef}>
                <label>Покупатель</label>
                <div className="search-input-wrapper">
                  <span className="search-icon">🔍</span>
                  <input
                    type="text"
                    placeholder="Иван"
                    value={buyerSearch}
                    onChange={(e) => {
                      setBuyerSearch(e.target.value);
                      setIsBuyerDropdownOpen(true);
                    }}
                    onFocus={() => setIsBuyerDropdownOpen(true)}
                  />
                  <span className={`arrow-icon ${isBuyerDropdownOpen ? 'open' : ''}`}>⌃</span>
                </div>

                {isBuyerDropdownOpen && (
                  <ul className="dropdown-list">
                    {filteredBuyers.length > 0 ? (
                      filteredBuyers.map((buyer, idx) => (
                        <li key={idx} onClick={() => handleSelectBuyer(buyer)}>
                          {buyer}
                        </li>
                      ))
                    ) : (
                      <li className="no-result">Ничего не найдено</li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Правая колонка: Загрузка фото */}
          <div className="photo-column">
            <div 
              className={`upload-zone ${imagePreview ? 'has-image' : ''}`} 
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
                <img src={imagePreview} alt="Preview" className="preview-img" />
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

        {/* Секция выбора цветов */}
        <div className="colors-section">
          <label className="section-label">Цвета</label>
          <div className="colors-grid">
            {AVAILABLE_COLORS.map((color) => {
              const isChecked = selectedColors.includes(color.id);
              return (
                <div key={color.id} className="color-picker-item">
                  <button
                    type="button"
                    className={`color-circle ${color.border ? 'with-border' : ''} ${isChecked ? 'checked' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => handleColorToggle(color.id)}
                  >
                    {isChecked && <span className="checkmark">✓</span>}
                  </button>
                  <span className="color-name">{color.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Секция выбранных тегов цветов */}
        <div className="selected-tags-zone">
          {selectedColors.map((colorId) => {
            const colorMeta = AVAILABLE_COLORS.find((c) => c.id === colorId);
            if (!colorMeta) return null;
            return (
              <div key={colorId} className="color-tag">
                <span className="tag-circle" style={{ backgroundColor: colorMeta.hex }} />
                <span className="tag-name">{colorMeta.name}</span>
                <button
                  type="button"
                  className="tag-remove-btn"
                  onClick={() => handleRemoveColorTag(colorId)}
                >
                  ✕
                </button>
              </div>
            );
          })}
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

export default MaterialAdd;