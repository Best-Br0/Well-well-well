import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import OrderItem from './OrderItem';

export default function Rent() {
    return (
        <div className="rent">
            <div className="rent_wrapper">
                <h3 className="rent_title">Последние 5 заказов</h3>
                <button className="rent_btn">
                    Все заказы
                    <ChevronRightIcon className='rent_icon' />
                </button>
            </div>
            <div className="rent_catefory">
                <h5 className="rent_category_h5">Кто арендовал</h5>
                <h5 className="rent_category_h5">Срок аренды</h5>
                <h5 className="rent_category_h5">Сумма</h5>
            </div>
            <OrderItem klientname='Студия "Арт-Хаус"' klientord="RNT-102" status="01 Мар – 15 Мар" price="15,000 сом" classbox="orderitem_box2" />
            <OrderItem klientname="Иван Петров" klientord="RNT-103" status="05 Мар – 10 Мар" price="4,500 сом" classbox="orderitem_box2" />
            <OrderItem klientname="Театр Юного Зрителя" klientord="RNT-104" status="10 Мар – 10 Апр" price="85,000 сом" classbox="orderitem_box2" />
            <OrderItem klientname="Кристина Белова" klientord="RNT-105" status="12 Мар – 15 Мар" price="3,200 сом" classbox="orderitem_box2" />
            <OrderItem klientname='Отель "Плаза"' klientord="RNT-106" status="14 Мар – 28 Мар" price="42,000 сом" classbox="orderitem_box2" />
        </div>
    )
}
