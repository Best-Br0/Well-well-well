import ClientsManagmentListItem from "./ClientsManagmentListItem"

export default function ClientsManagmentList() {
    return (
        <div className="clientsmanagmentlist">
            <div className="clientsmanagmentlist_info">
                <h5 className="clientsmanagmentlist_info_text col_number">№</h5>
                <h5 className="clientsmanagmentlist_info_text col_name">ПОЛНОЕ ИМЯ</h5>
                <h5 className="clientsmanagmentlist_info_text col_phone">ТЕЛЕФОН</h5>
                <h5 className="clientsmanagmentlist_info_text col_status">СТАТУС КЛИЕНТА</h5>
                <h5 className="clientsmanagmentlist_info_text col_gender">ПОЛ</h5>
                <h5 className="clientsmanagmentlist_info_text col_actions">ДЕЙСТВИЯ</h5>
            </div>
            <ClientsManagmentListItem />
        </div>
    )
}

