import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import { NavLink, Link } from 'react-router-dom';
import Header from '../../../../components/Header';
import RentsManagmentList from './RentsManagmentList';
import MaterialsPaginarion from '../../Materials/components/MaterialsPagination';
export default function RentManagment() {
    return (
        <>
            <Header title="Управление арендой" />
            <div className="rentmanagment">
                <div className="materials_wrapper">
                    <div className="materials_search">
                        <input className='materials_inp' type="text" placeholder='Поиск по имени, телефону, адресу' />
                        <div className="materials_filter">
                            <h5 className="materials_filter_text">Фильтр</h5>
                            <KeyboardArrowDownIcon />
                        </div>
                    </div>
                    <Link to="" style={{ textDecoration: 'none' }}>
                        <button className="materials_add">
                            <AddIcon className="materials_addicon" />
                            <h5 className="materials_add_text">Добавить материал</h5>
                        </button>
                    </Link>
                </div>
                <RentsManagmentList />
            </div>
            <MaterialsPaginarion />
        </>
    )
}
