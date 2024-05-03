import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import s from './DashboardPage.module.css';
import Currency from '../../components/Currency/Currency';
import useMedia from '../../hooks/useMedia';

function DashboardPage() {
    const { isMobile } = useMedia();
    //TODO if location is home
    return (
        <>
            <Header />
            {isMobile && <Navigation />}

            <div className={s.container}>
                {/*TODO if location is home */}
                {isMobile && <div>Balance</div>}
                <div className={s.column_narrow}>
                    {!isMobile && <Navigation />}
                    <div>Balance</div>
                    <Currency />
                </div>
                <div className={`${s.column} ${s.temp_1}`}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default DashboardPage;
