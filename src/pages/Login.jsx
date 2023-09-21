import styles from '@styles/pages/Login.module.css';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { object, string } from 'yup';
import { useAuth } from '../hooks/useAuth';

const loginSchema = object({
  email: string().email('Invalid email format').required('Required'),
  password: string().min(8).required('Required'),
});

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  async function handleSubmit(values) {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_DOMAIN}/sessions/providers/local`, {
      method: 'POST',
      body: JSON.stringify(values),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      const body = (await res.json()).error;
      setError(body);
    }
    const body = await res.json();

    auth.login(body.data.username);

    navigate('/app');
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <div>
      <div>
        <img
          className={`${styles['side-image']}`}
          src="notebook.jpg"
          alt="A notebook"
        />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <h1>Login Your Account</h1>
        {error ? <div>{error}</div> : null}
        <div className={`${styles['form--text-input']}`}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div className={`${styles['form--text-input']}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
