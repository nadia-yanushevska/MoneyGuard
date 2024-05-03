import { Formik, Form } from 'formik';
import PasswordStrengthBar from 'react-password-strength-bar';
import { Link } from 'react-router-dom';

import CustomField from '../CustomField/CustomField';

import style from './authForm.module.css';

const AuthForm = ({ type, validationSchema, initialValues, onSubmit }) => {
    return (
        <div className={`${type === 'register' ? style.register : style.login} ${style.formWrapper}`}>
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
                {({ values: { confirmPassword } }) => (
                    <Form className={style.form}>
                        {type == 'register' && <CustomField type="text" name="username" placeholder="Name" />}
                        <CustomField type="text" name="email" placeholder="E-mail" />
                        <CustomField type="password" name="password" placeholder="Password" />
                        {type === 'register' && <CustomField type="password" name="confirmPassword" placeholder="Confirm password" />}
                        {type === 'register' && <PasswordStrengthBar password={confirmPassword} />}

                        <button className={style.button_main} type="submit">
                            {type === 'register' ? 'Register' : 'Login'}
                        </button>

                        <Link to={type === 'register' ? '/login' : '/register'}>
                            <button className={style.button_secondary} type="submit">
                                {type === 'register' ? 'Login' : 'Register'}
                            </button>
                        </Link>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AuthForm;
