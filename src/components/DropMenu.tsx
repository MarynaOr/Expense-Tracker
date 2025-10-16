import { Field } from 'formik';

const DropMenu = () => {
  return (
    <div>
      <label htmlFor="as">
        <Field
          as="select"
          id="category-select"
          placeholder="select"
          name="category"
          required
        >
          <option value="" disabled>
            Оберіть опцію
          </option>
          <option value="Food & Drinks">
            🥘 Food & Drinks (їжа, кафе, супермаркет)
          </option>
          <option value="Housing & Utilities">
            🏠 Housing & Utilities (оренда, комунальні, інтернет)
          </option>
          <option value="Transport">
            🚗 Transport (пальне, проїзд, таксі)
          </option>
          <option value="Health & Fitness">
            ❤️ Health & Fitness (аптека, лікар, спортзал)
          </option>
          <option value="Entertainment">
            🎉 Entertainment (кіно, ігри, підписки)
          </option>
          <option value="Shopping">
            🛒 Shopping (одяг, техніка, покупки)
          </option>
          <option value="Education">
            📚 Education (курси, книги, навчання)
          </option>
          <option value="Loan / Credit Payments">
            💳 Loan / Credit Payments (погашення кредитів, банківські
            платежі)
          </option>
          <option value="Other">📂 Other (все інше)</option>
        </Field>
      </label>
    </div>
  );
};

export default DropMenu;
