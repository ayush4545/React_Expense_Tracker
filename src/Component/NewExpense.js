import React, { useState } from 'react'
import './NewExpense.css'
function NewExpense({ onSaveExpenseData }) {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const [showNewExpense, setShowNewExpense] = useState(false)

    const useInputHandler = (e) => {
        const value = e.target.value
        const name = e.target.name

        setUserInput((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const expenseData = {
            title: userInput['enteredTitle'],
            price: userInput['enteredAmount'],
            date: new Date(userInput['enteredDate'])
        }


        onSaveExpenseData(expenseData)

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })

        setShowNewExpense(false)

    }
    return (
        <div className='new-expense'>
            {showNewExpense ?
                <form action="" onSubmit={submitHandler}>
                    <div className='new-expense__controls '>
                        <div className='new-expense__control'>
                            <label>Title</label>
                            <input type='text' placeholder='Enter the Title' value={userInput['enteredTitle']} onChange={useInputHandler} name='enteredTitle' />
                        </div>

                        <div className='new-expense__control'>
                            <label>Amount</label>
                            <input type='number' min='0.01' step='0.01' value={userInput['enteredAmount']} placeholder='Enter the Amount' name='enteredAmount' onChange={useInputHandler} />
                        </div>

                        <div className='new-expense__control'>
                            <label>Date</label>
                            <input type='date' min='2019-01-01' value={userInput['enteredDate']} max='2022-12-31' name='enteredDate' onChange={useInputHandler} />
                        </div>
                    </div>
                    <div className='new-expense__action'>
                        <button type='button' onClick={() => setShowNewExpense(false)}> Cancel </button>
                        <button type='submit'> Add Expense </button>
                    </div>
                </form>

                : <div className='new-expense__btn'>
                    <button type='button' onClick={() => setShowNewExpense(true)}> Add New Expense </button>
                </div>}

        </div>
    )
}

export default NewExpense
