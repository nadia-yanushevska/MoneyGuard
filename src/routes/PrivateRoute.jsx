import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    //TODO temp value replace with select
    const isLoggedIn = true;
    // Зробити true
    return isLoggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
