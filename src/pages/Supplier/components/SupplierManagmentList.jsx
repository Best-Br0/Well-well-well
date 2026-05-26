import SupplierManagmentListItem from "./SupplierManagmentListItem"

export default function SupplierManagmentList() {
    return (
        <div className='suppliermanagmentlist'>
            <table className="suppliermanagmentlist_info">
                <thead>
                    <tr>
                        <th className='suppliermanagmentlist_info_th'>№</th>
                        <th className='suppliermanagmentlist_info_th'>НАЗВАНИЯ КОМПАНИИ / ИМЯ</th>
                        <th className='suppliermanagmentlist_info_th'>КОНТАКТНОЕ ЛИЦО</th>
                        <th className='suppliermanagmentlist_info_th'>ТЕЛЕФОН</th>
                        <th className='suppliermanagmentlist_info_th'>ПОЛ</th>
                        <th className='suppliermanagmentlist_info_th'>ДЕЙСТВИЯ</th>
                    </tr>
                </thead>
            </table>
            <SupplierManagmentListItem />
        </div>
    )
}
