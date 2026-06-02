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
            <ClientsManagmentListItem id="1" name=' ООО ТехноПром' number="+996 555 123 456" gender="M" /> 
            <ClientsManagmentListItem id="2" name='Елена Магомедова' number="+996 700 987 654" gender="Ж" />
            <ClientsManagmentListItem id="3" name='Бакыт Токтосунов' number="+996 700 987 654" gender="M" />
            <ClientsManagmentListItem id="4" name='Марина Соколова' number="+996 700 987 654" gender="M" />
            <ClientsManagmentListItem id="5" name='Ильяс Рахимов' number="+996 700 987 654" gender="Ж" />
            <ClientsManagmentListItem id="6" name='Гульнара Асанова' number="+996 700 987 654" gender="M" />
            <ClientsManagmentListItem id="7" name='Виктор Цой' number="+996 700 987 654" gender="M" />
            <ClientsManagmentListItem id="8" name='Мамытова' number="+996 700 987 654" gender="Ж" />
        </div>
    )
}

