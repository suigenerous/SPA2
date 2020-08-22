import React from "react";
import Order from './Order'

export default function OrderStatus(props) {
    const {orders} = props
    console.log(orders)

    return (
        <div className = 'orderStatusContainer'>
            <h2>Order Status</h2>
            <div className = 'ordersContainer'>
                {orders.map(order => {
                        return <Order key={order.id} order={order}/>
                        }
                    )
                }
            </div>
        </div>
    )
}