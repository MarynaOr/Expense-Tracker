import { Field, Form, Formik, type FormikValues } from 'formik';
import DropMenu from './DropMenu';

const initialValues = {
  name: '',
  as: '',
  amount: '',
};
const FormExp = () => {
  const handleSubmit = (values: FormikValues) => {
    console.log('Form data:', values);
  };

  return (
    <div className="flex gap-12">
      <h3>Add New Expense</h3>

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
        </Form>
      </Formik>
    </div>
  );
};

export default FormExp;
