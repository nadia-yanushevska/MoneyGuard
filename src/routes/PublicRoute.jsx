import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
    //TODO temp value replace with select
    const isLoggedIn = true;

    // Зробити true
    return isLoggedIn ? <Navigate to="/" /> : children;
}

export default PublicRoute;
