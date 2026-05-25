import React, { useState, useRef } from 'react';
import '../../../../../assets/scss/pages/_materialupdate.scss';
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

const MaterialUpdate = () => {
  const [formData, setFormData] = useState({
    title: 'ДСП Дуб Сонома',
    salePrice: '450.00',
    quantity: '150',
    purchasePrice: '300.00',
    buyer: 'ОсОО "Иван-Строй"'
  });

  const [selectedColors, setSelectedColors] = useState(['red', 'blue', 'pink']);
  const [buyerSearch, setBuyerSearch] = useState('ОсОО "Иван-Строй"');
  const [isBuyerDropdownOpen, setIsBuyerDropdownOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=400'); // Дефолтное фото дерева
  
  const fileInputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Выбор цвета по клику на круг (добавить/убрать галочку)
  const handleColorToggle = (colorId) => {
    setSelectedColors((prev) =>
      prev.includes(colorId) ? prev.filter((id) => id !== colorId) : [...prev, colorId]
    );
  };

  // Удаление цвета через крестик на теге снизу
  const handleRemoveColorTag = (colorId) => {
    setSelectedColors((prev) => prev.filter((id) => id !== colorId));
  };

  // Загрузка новой картинки взамен старой
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
    const updatedData = {
      ...formData,
      colors: selectedColors,
      image: imagePreview
    };
    console.log('Сохранение обновленного материала:', updatedData);
  };

  return (
    <div className="material-update-container">
      <BackList />

      <form className="material-form" onSubmit={handleSubmit}>
        <div className="form-main-layout">
          
          {/* Блок с полями ввода */}
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

          {/* Блок фотографии (Превью + Действие) */}
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

        {/* Выбор цветов */}
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

        {/* Зона отображения выбранных тегов с крестиками */}
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

export default MaterialUpdate;