import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from '../../components/ModalEditTransaction/ModalEditTransaction';
function DashboardPage() {
    return (
        <div>
            <Header />
            <ModalAddTransaction />
            {/* <ModalEditTransaction /> */}
            Dashboard
            <Outlet />
            {/* <Navigation /> */}
        </div>
    );
}

export default DashboardPage;
