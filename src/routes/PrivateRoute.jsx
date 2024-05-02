import { Navigate } from 'react-router-dom';

import { selectIsLogIn } from '../redux/AuthSlice/selectors';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
    const isLoggedIn = useSelector(selectIsLogIn);

    return isLoggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
