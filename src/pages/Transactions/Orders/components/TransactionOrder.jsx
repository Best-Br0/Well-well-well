export default function TransactionOrder({ order }) {


    return (
        <>
            <div className="transaction_order">
                <div className="main">
                    <div className="id_status">
                        <p className="id_title">{order?.id}</p>
                        <h1 className={`status_title ${order?.status?.status}`} >{order?.status?.which}</h1>
                    </div>
                    <div className="people_type">
                        <h1 className="people_title">{order?.people}</h1>
                        <div className="type">
                            <h1 className="title">{order?.type}</h1>
                        </div>
                    </div>
                    <div className="sum_paid_duty">
                        <div className="money">
                            <p className="text">Сумма:</p>
                            <h1 className="title sum">{order?.sum}</h1>
                        </div>
                        <div className="money">
                            <p className="text">Оплачено:</p>
                            <h1 className="title paid">{order?.paid}</h1>
                        </div>
                        {order?.duty ?
                            <div className="money">
                                <p className="text">Долг:</p>
                                <h1 className="title duty">{order?.duty}</h1>
                            </div>
                            : ""}
                    </div>
                    <div className="started_finished">
                        <h1 className="title">{order?.started}</h1>
                        <h1 className="title">{order?.finished}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}