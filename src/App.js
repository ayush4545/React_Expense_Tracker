import './App.css';
import React, { useState } from 'react'

import ExpenseItem from './Component/ExpenseItem'
import NewExpense from './Component/NewExpense'
// import Typical from 'react-typical'
import ExpenseFilter from './Component/ExpenseFilter';
import ExpensesChart from './Component/ExpensesChart'
function App() {
  const [filteredYear, setFilteredYear] = useState('2020')

  const [expenses, setExpense] = useState([
    {
      id: 1,
      title: "Car Insurance",
      date: new Date(2020, 2, 2),
      price: 290.4,
    },

    {
      id: 2,
      title: "Grocery purchased",
      date: new Date(2021, 2, 12),
      price: 2000,
    },

    {
      id: 3,
      title: "Cycle Repaired",
      date: new Date(2021, 5, 2),
      price: 100,
    },

    {
      id: 4,
      title: "Course Purchased",
      date: new Date(2021, 7, 27),
      price: 385,
    },

  ]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: expenses.length + 1
    }

    setExpense((oldExpense) => {
      return [expenseData, ...oldExpense]
    })


    console.log(expenseData)
  }


  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <NewExpense onSaveExpenseData={saveExpenseData} />
      <div className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length !== 0 ? filteredExpenses.map((item, index) => (
          <ExpenseItem key={item.id} title={item.title} amount={item.price} date={item.date} />
        )) : <p>No Expense Found</p>}
      </div>

    </div>
  );
}

export default App;
