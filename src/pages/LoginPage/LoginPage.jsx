import { useDispatch } from 'react-redux';
import { loginSchema } from '../../schemas/schemas';

import AuthForm from '../../components/AuthForm/AuthForm';
import { loginThunk } from '../../redux/Auth/operations';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(loginThunk(values))
            .unwrap()
            .then(data => {
                toast.success(`Welcome ${data.user.username}!`);
            })
            .catch(() => {
                toast.error('Invalid credentials');
            });
        resetForm();
    };

    const initialValues = {
        password: '',
        email: '',
    };

    return <AuthForm title="Login" initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema} />;
};

export default LoginPage;
