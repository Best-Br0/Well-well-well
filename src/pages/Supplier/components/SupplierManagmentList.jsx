import SupplierManagmentListItem from "./SupplierManagmentListItem"

export default function SupplierManagmentList() {
    return (
        <div className='suppliermanagmentlist'>
            <div className="suppliermanagmentlist_info">
                <p className='suppliermanagmentlist_info_th'>№</p>
                <p className='suppliermanagmentlist_info_th'>НАЗВАНИЯ КОМПАНИИ / ИМЯ</p>
                <p className='suppliermanagmentlist_info_th'>КОНТАКТНОЕ ЛИЦО</p>
                <p className='suppliermanagmentlist_info_th'>ТЕЛЕФОН</p>
                <p className='suppliermanagmentlist_info_th'>ПОЛ</p>
                <p className='suppliermanagmentlist_info_th'>ДЕЙСТВИЯ</p>
            </div>
            <SupplierManagmentListItem id="1" compani=' ООО ТехноПром' name="Иван сергейов" number="+996 555 123 456" gender="M" />
            <SupplierManagmentListItem id="2" compani='Елена Магомедова' name="г. Ош, мкр. Анар 12/4" number="+996 700 987 654" gender="Ж" />
            <SupplierManagmentListItem id="3" compani='Бакыт Токтосунов' name="г. Бишкек, пр. Чуй 201   " number="+996 777 456 789" gender="M" />
            <SupplierManagmentListItem id="4" compani='Марина Соколова' name="г. Каракол, ул. Ленина 45" number="+996 550 333 222" gender="M" />
            <SupplierManagmentListItem id="5" compani='Ильяс Рахимов' name="г. Бишкек, ул. Токтогула 88" number="+996 555 777 888" gender="Ж" />
            <SupplierManagmentListItem id="6" compani='Гульнара Асанова' name="г. Джалал-Абад, ул. Пушкина 10" number="+996 701 555 444" gender="M" />
            <SupplierManagmentListItem id="7" compani='Виктор Цой' name="г. Бишкек, ул. Ахунбаева 144" number="+996 772 000 111" gender="M" />
            <SupplierManagmentListItem id="8" compani='Айпери Мамытова' name="г. Нарын, ул. Орозбакова 5" number="+996 999 111 000" gender="Ж" />
        </div>
    )
}
