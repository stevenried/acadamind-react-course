import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({ listData }) => {
  if (listData.length === 0) {
    return <p className="expenses-list__fallback">No Expenses Found</p>
  }

  return (
    <ul className="expenses-list">
      {listData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  )
}

export default ExpensesList
