import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import s from './LoginForm.module.css';
const LoginForm = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Email is required'),
                password: Yup.string().min(6, 'Password must be at least 6 characters').max(12, 'Password must be at most 12 characters').required('Password is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2));
                // Your backend API call logic here
                setSubmitting(false);
            }}
        >
            <Form className={s.form}>
                <div className={s.label}>
                    <label>Email:</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div className={s.label}>
                    <label>Password:</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </div>
                <Link className={s.link} to="/registration">
                    <button className={s.button_reg}>Registration</button>
                </Link>
                <Link className={s.link} to="/login">
                    <button className={s.button_log}>Login</button>
                </Link>
            </Form>
        </Formik>
    );
};

export default LoginForm;
