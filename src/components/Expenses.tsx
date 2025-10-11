import { useDispatch } from 'react-redux';
import {
  deleteExpense,
  type Expense,
} from '../redux/expenses/expenseSlice';

const Expenses = ({
  id,
  category,
  description,
  amount,
  date,
}: Expense) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p>Description: {description} </p>
        <p>Amount: {amount} </p>

        <p> {category} </p>
        <p>Date: {date} </p>

        <button onClick={() => dispatch(deleteExpense(id))}>
          Видалити
        </button>
      </div>
    </>
  );
};

export default Expenses;
