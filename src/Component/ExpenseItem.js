import React from 'react'
import './ExpenseItem.css';
function ExpenseItem({id,title,amount,date}) {
    const month=date.toLocaleString('en-US',{month:'long'})
    const day=date.toLocaleString('en-US',{day:'2-digit'})
    const year=date.getFullYear();
    return (
        <div className="expense-item">
            <div className='date'>
            <div className='month'>{month}</div>
            <div className='year'>{year}</div>
            <div className='day'>{day}</div>
            </div>
            <div className="expense-item__description ">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem
