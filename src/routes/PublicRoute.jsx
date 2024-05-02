import { Navigate } from 'react-router-dom';

import { selectIsLogIn } from '../redux/AuthSlice/selectors';
import { useSelector } from 'react-redux';

function PublicRoute({ children }) {
    const isLoggedIn = useSelector(selectIsLogIn);

    return isLoggedIn ? <Navigate to="/" /> : children;
}

export default PublicRoute;
