import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';

import AuthForm from '../../components/AuthForm/AuthForm';
import { register } from '../../redux/AuthSlice/ops';

const RegistrationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        username: yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(7, 'Password must be at least 7 characters').required('Password is required'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleSubmit = ({ username, email, password }, { resetForm }) => {
        dispatch(register({ username, email, password }))
            .unwrap()
            .then(data => {
                toast.success(`Registration is success ${data.user.name}, welcome!`);
                console.log({ data });
                navigate('/');
            })
            .catch(() => toast.error('Credentials invalid'));

        resetForm();
    };

    const initialValues = {
        username: '',
        password: '',
        email: '',
        confirmPassword: '',
    };

    return <AuthForm type="register" title="Registration" onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={initialValues} />;
};

export default RegistrationPage;
