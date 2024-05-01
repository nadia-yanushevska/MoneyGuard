import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import s from './RegisterForm.module.css';

const RegistrationForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    name: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string().min(2, 'Must be at least 2 characters').max(20, 'Must be up to 20 characters').required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                    password: Yup.string().min(6, 'Password must be at least 6 characters').max(12, 'Password must be at most 12 characters').required('Required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className={s.form}>
                    <p className={s.title}>Money Guard</p>
                    <div className={s.label}>
                        <Field className={s.input} type="email" name="email" placeholder="E-mail" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className={s.label}>
                        <Field className={s.input} type="text" name="name" placeholder="Name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div className={s.label}>
                        <Field className={s.input} type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div className={s.label}>
                        <Field className={s.input} type="password" name="confirmPassword" placeholder="Confirm password" />
                        <ErrorMessage name="confirmPassword" component="div" />
                    </div>
                    <button type="submit" className={s.button_reg}>
                        Registration
                    </button>
                    <Link className={s.link} to="/login">
                        <button className={s.button_log}>Login</button>
                    </Link>
                </Form>
            </Formik>
        </>
    );
};

export default RegistrationForm;