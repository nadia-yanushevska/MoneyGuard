import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import Statistics from './components/Statistics/Statistics';
import Currency from './components/Currency/Currency';
import Home from './components/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

import { refreshThunk } from './redux/Auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import useMedia from './hooks/useMedia';
{
    /* Приклад підключення іконки */
}

// import { Icon } from './Icons';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refreshThunk());
    }, [dispatch]);

    const { isMobile } = useMedia();

    return (
        <>
            {/* Приклад підключення іконки */}

            {/* <a href="./sprite.svg" className="red">
                <Icon id="#icon-email" className="small"></Icon>
            </a> */}
            {/* Приклад підключення іконки */}
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
                                    <div>Balance</div>
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
