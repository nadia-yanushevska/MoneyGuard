import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
// import LoginPage from "./pages/LoginPage/LoginPage";
// import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Statistics from './components/Statistics/Statistics';
import Currency from './components/Currency/Currency';
import Home from './components/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import { useMediaQuery } from 'react-responsive';
import ChartDoughnut from './components/ChartDoughnut/ChartDoughnut';

{
    /* Приклад підключення іконки */
}

// import { Icon } from './Icons';

function App() {
    const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
    return (
        <>
            {/* Приклад підключення іконки */}

            {/* <a href="./sprite.svg" className="red">
                <Icon id="#icon-email" className="small"></Icon>
            </a> */}
            {/* Приклад підключення іконки */}

            {/* <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <DashboardPage />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<Home />} />
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
            </Routes> */}
            <ChartDoughnut/>
        </>
    );
}

export default App;
