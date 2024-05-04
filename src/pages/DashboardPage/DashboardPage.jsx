import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import s from './DashboardPage.module.css';
import Currency from '../../components/Currency/Currency';
import useMedia from '../../hooks/useMedia';
import Balance from '../../components/Balance/Balance';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';
import ModalEditTransaction from '../../components/ModalEditTransaction/ModalEditTransaction';
import { useSelector } from 'react-redux';
import { selectIsEditModalOpen, selectIsAddModalOpen } from '../../redux/Modals/slice';

function DashboardPage() {
    const { isMobile } = useMedia();

    const isEditOpen = useSelector(selectIsEditModalOpen);
    const isAddOpen = useSelector(selectIsAddModalOpen);

    return (
        <>
            <Header />
            {isMobile && <Navigation />}
            {isAddOpen && <ModalAddTransaction />}
            {isEditOpen && <ModalEditTransaction />}
            <div className={s.container}>
                <div className={s.column_narrow}>
                    <Navigation />
                    <Balance />
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
