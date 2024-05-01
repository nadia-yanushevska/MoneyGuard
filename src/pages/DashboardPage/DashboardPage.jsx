import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';

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
