import Watch from "../../../../../assets/icons/watch.svg"
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function EmployeeManagementListItem({ id, name, addres, number, birth }) {
    return (
        <div className='employeemanagementlistitem'>
            <div className='employeemanagementlistitem_id'>{id}</div>
            <div className='employeemanagementlistitem_name'>{name}</div>
            <div className='employeemanagementlistitem_addres'>{addres}</div>
            <div className='employeemanagementlistitem_number'>{number}</div>
            <div className='employeemanagementlistitem_birth'>{birth}</div>
            <div className="employeemanagementlistitem_actions">
                <div className="employeemanagementlistitem_actions_watch">
                    <VisibilityOutlinedIcon className="employeemanagementlistitem_watchicons" />
                </div>
                <div className="employeemanagementlistitem_actions_edit">
                    <ModeOutlinedIcon className="employeemanagementlistitem_editicons" />
                </div>
                <div className="employeemanagementlistitem_actions_delete">
                    <DeleteOutlineOutlinedIcon className="employeemanagementlistitem_deleteicons" />
                </div>
            </div>
        </div>
    )
}