import { type Expense } from '../redux/expenses/expenseSlice';

const Expenses = ({ id, description, amount, date }: Expense) => {
  return (
    <>
      <div>
        <p>{id}</p>
        <p>Description: {description} </p>
        <p>Amount: {amount} </p>
        <p>Date: {date} </p>

        {/* <button>Видалити</button> */}
      </div>
    </>
  );
};

export default Expenses;
