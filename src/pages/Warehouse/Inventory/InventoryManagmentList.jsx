import InventoryManagmentListItem from "./InventoryManagment/InventoryManagmentListItem"

export default function InventoryManagmentList() {
    return (
        <div className='inventorymanagmentlist'>
            <div className="materialslist_info">
                <h5 className="materialslist_info_text col_number">№</h5>
                <h5 className="materialslist_info_text col_name">Наименование</h5>
                <h5 className="materialslist_info_text col_phone">Цена продажи (сом/м)</h5>
                <h5 className="materialslist_info_text col_status">Количество (м)</h5>
                <h5 className="materialslist_info_text col_gender">Статус</h5>
                <h5 className="materialslist_info_text col_actions">Цвет(а)</h5>
                <h5 className="materialslist_info_text col_actions">Действия</h5>
            </div>
            <InventoryManagmentListItem id="1" name=' ООО ТехноПром' price="1200" quantity="450" statusbox="materialsmanagmentlistitem_status" status="В наличии" />
            <InventoryManagmentListItem id="2" name=' ООО ТехноПром' price="1200" quantity="450" statusbox="materialsmanagmentlistitem_status" status="В наличии" />
            <InventoryManagmentListItem id="3" name=' ООО ТехноПром' price="1200" quantity="450" statusbox="materialsmanagmentlistitem_status" status="В наличии" />
            <InventoryManagmentListItem id="4" name=' ООО ТехноПром' price="1200" quantity="450" statusbox="materialsmanagmentlistitem_status" status="В наличии" />
            <InventoryManagmentListItem id="5" name=' ООО ТехноПром' price="1200" quantity="450" statusbox="materialsmanagmentlistitem_status" status="В наличии" />
            <InventoryManagmentListItem id="6" name=' ООО ТехноПром' price="1200" quantity="450" statusbox="materialsmanagmentlistitem_status" status="В наличии" />
            <InventoryManagmentListItem id="7" name=' ООО ТехноПром' price="1200" quantity="450" statusbox="materialsmanagmentlistitem_status" status="В наличии" />
            <InventoryManagmentListItem id="8" name=' ООО ТехноПром' price="1200" quantity="450" statusbox="materialsmanagmentlistitem_status" status="В наличии" />
        </div>
    )
}
