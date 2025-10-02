import { Field, Form, Formik, type FormikHelpers } from 'formik';
import DropMenu from './DropMenu';
import { useState } from 'react';

interface MyFprmValues {
  name: string;
  as: string;
  amount: string;
}

const initialValues = {
  name: '',
  as: '',
  amount: '',
};
const FormExp = () => {
  const [expense, setExpense] = useState<MyFprmValues[]>([]);

  const handleSubmit = (
    values: MyFprmValues,
    { resetForm }: FormikHelpers<MyFprmValues>,
  ) => {
    setExpense([...expense, values]);
    console.log(values);

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

      <div>
        {expense.map((exp, index) => (
          <li key={index}>
            {/* {`${exp.name} - ${exp.as} - ${exp.amount}`} */}
            {exp.name} - {exp.as} -{exp.amount}
          </li>
        ))}
      </div>
    </div>
  );
};

export default FormExp;
