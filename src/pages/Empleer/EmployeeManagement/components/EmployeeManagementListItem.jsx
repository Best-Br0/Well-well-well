import Watch from "../../../../assets/icons/watch.svg"
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from "react-router-dom";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function EmployeeManagementListItem({ id, name, addres, number, birth }) {
    return (
        <div className="employeemanagementlistitem">
            <div className='employeemanagementlistitem_id'>{id}</div>
            <div className='employeemanagementlistitem_name'>{name}</div>
            <div className='employeemanagementlistitem_addres'>{addres}</div>
            <div className='employeemanagementlistitem_number'>{number}</div>
            <div className='employeemanagementlistitem_birth'>{birth}</div>
            <div className="employeemanagementlistitem_actions">
                <Link to={`/employee-management/details/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="employeemanagementlistitem_actions_watch" style={{ cursor: 'pointer' }}>
                        <VisibilityOutlinedIcon className="employeemanagementlistitem_watchicons" />
                    </div>
                </Link>

                <Link to={`/update/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="employeemanagementlistitem_actions_edit">
                        <ModeOutlinedIcon className="employeemanagementlistitem_editicons" />
                    </div>
                </Link>

                <div className="employeemanagementlistitem_actions_delete">
                    <DeleteOutlineOutlinedIcon className="employeemanagementlistitem_deleteicons" />
                </div>
            </div>
        </div>
    )
}