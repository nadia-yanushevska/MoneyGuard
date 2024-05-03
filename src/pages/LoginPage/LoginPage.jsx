import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthForm from '../../components/AuthForm/AuthForm';
import { login } from '../../redux/AuthSlice/ops';
// import toast from 'react-hot-toast';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(7, 'Password must be at least 7 characters').required('Password is required'),
    });

    const handleSubmit = values => {
        dispatch(login(values))
            .unwrap()
            .then(data => {
                toast.success(`Welcome ${data.user.name}`);
                navigate('/');
            })
            .catch(() => toast.error('Credentials invalid'));
    };

    const initialValues = {
        password: '',
        email: '',
    };

    return <AuthForm title="Login" initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema} />;
};

export default LoginPage;
