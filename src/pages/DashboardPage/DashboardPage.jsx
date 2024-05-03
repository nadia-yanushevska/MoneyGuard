import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import s from './DashboardPage.module.css';
import Currency from '../../components/Currency/Currency';
import useMedia from '../../hooks/useMedia';

function DashboardPage() {
    const { isMobile } = useMedia();
    return (
        <>
            <Header />
            {isMobile && <Navigation />}

            <div className={s.container}>
                <div className={s.column_narrow}>
                    <Navigation />
                    <div>Balance</div>
                    <Currency />
                </div>
                <div className={`${s.column}`}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default DashboardPage;
