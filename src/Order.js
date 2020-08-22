import React from 'react'

export default function Order(props){
    const {order} = props

    return(
        <div className='orderContainer'>
            <p>{order.name}</p>
            <p>{order.pizzaSize}</p>
            <p>{order.toppings}</p>
            <p>{order.specialInstructions}</p>
        </div>
    )
}