import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

function DashboardPage() {
    return (
        <div>
            <Header />
            <ModalAddTransaction />
            Dashboard
            <Outlet />
            {/* <Navigation /> */}
        </div>
    );
}

export default DashboardPage;
