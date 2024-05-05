import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshThunk } from './redux/Auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import useMedia from './hooks/useMedia';
import './App.css';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Balance from './components/Balance/Balance';
import Currency from './components/Currency/Currency';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refreshThunk());
    }, [dispatch]);

    const { isMobile } = useMedia();

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <DashboardPage />
                        </PrivateRoute>
                    }
                >
                    <Route
                        index
                        element={
                            isMobile ? (
                                <>
                                    <Balance />
                                    <Home />
                                </>
                            ) : (
                                <Home />
                            )
                        }
                    />
                    <Route path="statistics" element={<Statistics />} />
                    <Route path="currency" element={isMobile ? <Currency /> : <Navigate to="/" />} />
                </Route>
                <Route
                    path="login"
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />
                <Route
                    path="register"
                    element={
                        <PublicRoute>
                            <RegistrationPage />
                        </PublicRoute>
                    }
                />

                <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
        </>
    );
}

export default App;
