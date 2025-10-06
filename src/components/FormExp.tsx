import { Field, Form, Formik, type FormikHelpers } from 'formik';
import DropMenu from './DropMenu';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addExpense,
  type Expense,
} from '../redux/expenses/expenseSlice';

interface MyFprmValues {
  name: string;
  as: string;
  amount: string;
}

const initialValues: MyFprmValues = {
  name: '',
  as: '',
  amount: '',
};
const FormExp = () => {
  // const [expense, setExpense] = useState<MyFprmValues[]>([]);
  const dispatch = useDispatch();

  const handleSubmit = (
    values: MyFprmValues,
    { resetForm }: FormikHelpers<MyFprmValues>,
  ) => {
    const newExpense: Expense = {
      id: Date.now().toString(),
      category: values.as,
      description: values.name,
      amount: parseFloat(values.amount) || 0,
      date: new Date().toISOString().substring(0, 10),
    };
    dispatch(addExpense(newExpense));

    console.log('Dispatching new expense:', newExpense);

    resetForm();
  };

  return (
    <div className="flex gap-12">
      <h3>Add New Expenses</h3>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="name">
            <Field id="name" placeholder="Name" name="name" />
          </label>
          <label htmlFor="as">
            <DropMenu />
          </label>
          <label htmlFor="amount">
            <Field id="amount" name="amount" placeholder="Amount" />
          </label>
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormExp;
