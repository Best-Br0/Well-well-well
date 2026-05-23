import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Order() {
    return (
        <div className="order">
            <div className="order_wrapper">
                <h3 className="order_title">Последние 5 заказов</h3>
                <button className="order_btn">
                    Все заказы
                    <ChevronRightIcon className='order_icon'/>
                </button>
            </div>
            <div className="order_catefory">
                <h5 className="order_category_h5">Клиент</h5>
                <h5 className="order_category_h5">Статус</h5>
                <h5 className="order_category_h5">Сумма</h5>
            </div>
        </div>
    )
}
