import { type Expense } from '../redux/expenses/expenseSlice';

const Expenses = ({
  category,
  description,
  amount,
  date,
}: Expense) => {
  return (
    <>
      <div>
        <p>Description: {description} </p>
        <p>Amount: {amount} </p>

        <p> {category} </p>
        <p>Date: {date} </p>

        <button>Видалити</button>
      </div>
    </>
  );
};

export default Expenses;
