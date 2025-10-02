// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email('Невірний формат пошти')
//     .required("Обов'язкове поле"),
//   password: Yup.string()
//     .min(6, 'Мінімум 6 символів')
//     .required("Обов'язкове поле"),
// });

const AuthForm = () => {
  // const [isRegistering, setIsRegistering] = useState(false);
  // const [error, setError] = useState(null);
  // const formik = useFormik({
  //   initialValues: { email: '', password: '' },
  //   validationSchema: validationSchema,
  //   onSubmit: async (values) => {
  //     setError(null);
  //     try {
  //       if (isRegistering) {
  //         await registerUser(values.email, values.password);
  //         alert('Реєстрація успішна! Ви увійшли.');
  //       } else {
  //         await loginUser(values.email, values.password);
  //         alert('Вхід успішний!');
  //       }
  //       // Тут ви можете перенаправити користувача на сторінку трекера
  //     } catch (err) {
  //       // Firebase помилки будуть тут (наприклад, "auth/user-not-found")
  //       setError(
  //         err.message
  //           .replace('Firebase: Error (auth/', '')
  //           .replace(').', ''),
  //       );
  //     }
  //   },
  // });
  // return (
  //   <form onSubmit={formik.handleSubmit}>
  //     <h2>{isRegistering ? 'Реєстрація' : 'Вхід'}</h2>
  //     {error && <p style={{ color: 'red' }}>Помилка: {error}</p>}
  //     {/* Поле Email (Formik) */}
  //     <input
  //       id="email"
  //       name="email"
  //       type="email"
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       value={formik.values.email}
  //       placeholder="Email"
  //     />
  //     {formik.touched.email && formik.errors.email ? (
  //       <div>{formik.errors.email}</div>
  //     ) : null}
  //     {/* Поле Password (Formik) */}
  //     <input
  //       id="password"
  //       name="password"
  //       type="password"
  //       onChange={formik.handleChange}
  //       onBlur={formik.handleBlur}
  //       value={formik.values.password}
  //       placeholder="Пароль"
  //     />
  //     {formik.touched.password && formik.errors.password ? (
  //       <div>{formik.errors.password}</div>
  //     ) : null}
  //     <button type="submit">
  //       {isRegistering ? 'Зареєструватись' : 'Увійти'}
  //     </button>
  //     <button
  //       type="button"
  //       onClick={() => setIsRegistering(!isRegistering)}
  //     >
  //       {isRegistering
  //         ? 'Вже є акаунт? Увійти'
  //         : 'Немає акаунту? Реєстрація'}
  //     </button>
  //   </form>
  // );
};

export default AuthForm;
