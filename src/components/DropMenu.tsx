import { Field } from 'formik';

const DropMenu = () => {
  return (
    <div>
      <label htmlFor="as">
        <Field as="select" id="as" placeholder="select" name="as">
          <option>🥘 Food & Drinks (їжа, кафе, супермаркет)</option>
          <option>
            🏠 Housing & Utilities (оренда, комунальні, інтернет)
          </option>
          <option>🚗 Transport (пальне, проїзд, таксі)</option>
          <option>
            ❤️ Health & Fitness (аптека, лікар, спортзал)
          </option>
          <option>🎉 Entertainment (кіно, ігри, підписки)</option>
          <option>🛒 Shopping (одяг, техніка, покупки)</option>
          <option>📚 Education (курси, книги, навчання)</option>
          <option>
            💳 Loan / Credit Payments (погашення кредитів, банківські
            платежі)
          </option>
          <option>📂 Other (все інше)</option>
        </Field>
      </label>
      <button>Add</button>
    </div>
  );
};

export default DropMenu;
