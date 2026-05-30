import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import { NavLink, Link } from 'react-router-dom';
import ClientsManagmentList from './ClientsManagmentList';

export default function ClientsManagment() {
    return (
        <div className="clientsmanagment">
            <div className="clientsmanagment_wrapper">
                <div className="clientsmanagment_search">
                    <input className='clientsmanagment_inp' type="text" placeholder='Поиск по имени, телефону, адресу' />
                    <div className="clientsmanagment_filter">
                        <h5 className="clientsmanagment_filter_text">Фильтр</h5>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <Link to="/employee/create" style={{ textDecoration: 'none' }}>
                    <button className="clientsmanagment_add">
                        <AddIcon className="clientsmanagment_addicon" />
                        <h5 className="clientsmanagment_add_text">Добавить клиента</h5>
                    </button>
                </Link>
            </div>
            <ClientsManagmentList />
        </div>
    )
}
