import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import OrderItem from './OrderItem';

export default function Order() {
    return (
        <div className="order">
            <div className="order_wrapper">
                <h3 className="order_title">Последние 5 заказов</h3>
                <button className="order_btn">
                    Все заказы
                    <ChevronRightIcon className='order_icon' />
                </button>
            </div>
            <div className="order_catefory">
                <h5 className="order_category_h5">Клиент</h5>
                <h5 className="order_category_h5">Статус</h5>
                <h5 className="order_category_h5">Сумма</h5>
            </div>
            <OrderItem klientname="Алексей Морозов" klientord="ORD-8821" status="Оплачено" price="45,200 сом" classbox="orderitem_box" />
            <OrderItem klientname="Мария Иванова" klientord="ORD-8822" status="В работе" price="12,800 сом" classbox="orderitem_box" />
            <OrderItem klientname="ООО  Декор-Плюс" klientord="ORD-8823" status="Оплачено" price="156,000 сом" classbox="orderitem_box" />
            <OrderItem klientname="Елена Смирнова" klientord="ORD-8824" status="Новый" price="8,400 сом" classbox="orderitem_box" />
            <OrderItem klientname="Дмитрий Волков" klientord="ORD-8825" status="В работе" price="22,100 сом" classbox="orderitem_box" />
        </div>
    )
}
