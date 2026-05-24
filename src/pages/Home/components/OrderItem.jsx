
export default function OrderItem({ klientname, klientord, status, price , classbox }) {
    return (
        <div className="orderitem">
            <div className="orderitem_klient">
                <h4 className="orderitem_klientname">{klientname}</h4>
                <p className="orderitem_klientord">{klientord}</p>
            </div>
            <div className={classbox}>
                <h5 className="orderitem_status">{status}</h5>
            </div>
            <h5 className="orderitem_price">{price}</h5>
        </div>
    )
}
