import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import { NavLink, Link } from 'react-router-dom';
import SupplierManagmentList from './SupplierManagmentList';

export default function SupplierManagment() {
    return (
        <section className="suppliermanagment">
            <div className="suppliermanagment_wrapper">
                <div className="suppliermanagment_search">
                    <input className='suppliermanagment_inp' type="text" placeholder='Поиск по имени, телефону, адресу' />
                    <div className="suppliermanagment_filter">
                        <h5 className="suppliermanagment_filter_text">Все годы</h5>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <Link to="/employee/create" style={{ textDecoration: 'none' }}>
                    <button className="suppliermanagment_add">
                        <AddIcon className="suppliermanagment_addicon" />
                        <h5 className="suppliermanagment_add_text">Добавить сотрудника</h5>
                    </button>
                </Link>
            </div>
            <SupplierManagmentList />
        </section>
    )
}
