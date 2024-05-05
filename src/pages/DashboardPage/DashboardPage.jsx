import { Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

import useMedia from '../../hooks/useMedia';
import { selectIsEditModalOpen, selectIsAddModalOpen } from '../../redux/Modals/slice';

import s from './DashboardPage.module.css';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

const Navigation = lazy(() => import('../../components/Navigation/Navigation'));
const Currency = lazy(() => import('../../components/Currency/Currency'));
const Balance = lazy(() => import('../../components/Balance/Balance'));
const ModalAddTransaction = lazy(() => import('../../components/ModalAddTransaction/ModalAddTransaction'));
const ModalEditTransaction = lazy(() => import('../../components/ModalEditTransaction/ModalEditTransaction'));

function DashboardPage() {
    const { isMobile } = useMedia();

    const isEditOpen = useSelector(selectIsEditModalOpen);
    const isAddOpen = useSelector(selectIsAddModalOpen);

    return (
        <>
            <Header />
            <Suspense fallback={<Loader />}>
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
            </Suspense>
        </>
    );
}

export default DashboardPage;
