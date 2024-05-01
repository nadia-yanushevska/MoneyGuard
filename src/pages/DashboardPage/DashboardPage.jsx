<<<<<<< Updated upstream
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navigation from '../../components/Navigation/Navigation';
=======
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';
>>>>>>> Stashed changes

function DashboardPage() {
    return (
        <div>
            <Header />
            <ModalAddTransaction />
            Dashboard
            <Outlet />
            <Navigation />
        </div>
    );
}

export default DashboardPage;
