import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

function ExpenseItem(props) {
  const amount = props.amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
      </Card>
    </li>
  )
}

export default ExpenseItem
