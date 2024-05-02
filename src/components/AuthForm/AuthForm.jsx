import { Formik, Form } from 'formik';
import CustomField from '../CustomField/CustomField';
import { Link } from 'react-router-dom';

const AuthForm = ({ title, type, validationSchema, initialValues, onSubmit }) => {
    return (
        <div className="formWrapper flexCenter">
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    {type == 'register' && <CustomField type="text" name="username" placeholder="Enter your name" />}
                    <CustomField type="text" name="email" placeholder="Enter your email" />
                    <CustomField type="password" name="password" placeholder="Enter your password" />
                    {type == 'register' && <CustomField type="password" name="confirmPassword" placeholder="Enter your password" />}

                    <button type="submit">{title}</button>
                    <p>
                        You {type === 'register' ? 'already have an account?' : "don't have an account?"}{' '}
                        <Link to={type === 'register' ? '/login' : '/register'}> {type === 'register' ? 'Login' : 'Register'}</Link>
                    </p>
                </Form>
            </Formik>
        </div>
    );
};

export default AuthForm;
