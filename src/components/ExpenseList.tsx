import FormExp from './FormExp';
import { selectExpenseList } from '../redux/expenses/selector';
import Expenses from './Expenses';
import { useAppSelextor } from '../redux/hooks';

const ExpenseList = () => {
  const expenses = useAppSelextor(selectExpenseList);

  return (
    <>
      <div>
        <FormExp />
        <ul>
          {expenses.length > 0 ? (
            expenses.map((expense) => {
              return (
                <li key={expense.id}>
                  <Expenses {...expense} />
                </li>
              );
            })
          ) : (
            <p>Немає витрат</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default ExpenseList;
