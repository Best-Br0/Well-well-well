import Watch from "../../../../../assets/icons/watch.svg"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function EmployeeManagementListItem({ id, name, addres, number, birth }) {
    return (
        <div className='employeemanagementlistitem'>
            <div className='employeemanagementlistitem_id'>{id}</div>
            <div className='employeemanagementlistitem_name'>{name}</div>
            <div className='employeemanagementlistitem_addres'>{addres}</div>
            <div className='employeemanagementlistitem_number'>{number}</div>
            <div className='employeemanagementlistitem_birth'>{birth}</div>
            <div className="employeemanagementlistitem_actions">
                <img src={Watch} className="employeemanagementlistitem_watchicons" alt="" />
                <div className="employeemanagementlistitem_actions_box">
                    <EditIcon />
                </div>
                <DeleteIcon />
            </div>
        </div>
    )
}