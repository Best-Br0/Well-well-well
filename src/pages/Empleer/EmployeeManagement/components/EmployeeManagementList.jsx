import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import EmployeeManagementListItem from './EmployeeManagementListItem';
import { NavLink, Link } from 'react-router-dom';

export default function EmployeeManagementList() {
  return (
    <div className='employeemanagementlist'>
      <div className="employeemanagementlist_wrapper">
        <div className="employeemanagementlist_search">
          <input className='employeemanagementlist_inp' type="text" placeholder='Поиск по имени, телефону, адресу' />
          <div className="employeemanagementlist_filter">
            <h5 className="employeemanagementlist_filter_text">Все годы</h5>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <Link to="/employee/create" style={{ textDecoration: 'none' }}>
          <button className="employeemanagementlist_add">
            <AddIcon className="employeemanagementlist_addicon" />
            <h5 className="employeemanagementlist_add_text">Добавить сотрудника</h5>
          </button>
        </Link>
      </div>
      <div className="employeemanagementlist_info">
        <span className="info-item item-id">№</span>
        <span className="info-item item-name">ПОЛНОЕ ИМЯ</span>
        <span className="info-item item-address">АДРЕС</span>
        <span className="info-item item-phone">ТЕЛЕФОН</span>
        <span className="info-item item-birth">ГОД РОЖДЕНИЯ</span>
        <span className="info-item item-actions">ДЕЙСТВИЯ</span>
      </div>
      <div className="employeemanagementlist_user">
        <EmployeeManagementListItem id="1" addres="г. Бишкек, ул. Киевская 114" name="Александр Коновалов" number="+996 555 123 456" birth="1988" />
        <EmployeeManagementListItem id="2" addres="г. Бишкек, ул. Киевская 114" name="Александр Коновалов" number="+996 555 123 456" birth="1992" />
        <EmployeeManagementListItem id="3" addres="г. Бишкек, ул. Киевская 114" name="Александр Коновалов" number="+996 555 123 456" birth="1985" />
        <EmployeeManagementListItem id="4" addres="г. Бишкек, ул. Киевская 114" name="Александр Коновалов" number="+996 555 123 456" birth="1995" />
        <EmployeeManagementListItem id="5" addres="г. Бишкек, ул. Киевская 114" name="Александр Коновалов" number="+996 555 123 456" birth="1990" />
        <EmployeeManagementListItem id="6" addres="г. Бишкек, ул. Киевская 114" name="Александр Коновалов" number="+996 555 123 456" birth="1987" />
        <EmployeeManagementListItem id="7" addres="г. Бишкек, ул. Киевская 114" name="Александр Коновалов" number="+996 555 123 456" birth="1993" />
        <EmployeeManagementListItem id="8" addres="г. Бишкек, ул. Киевская 114" name="Александр Коновалов" number="+996 555 123 456" birth="1996" />
      </div>
      <hr className='employeemanagementlist_hr' />
    </div>
  )
}
