import s from './ModalAddTransaction.module.css';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTransactionsCategories } from '../../redux/Statistics/operations';

function ModalAddTransaction() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTransactionsCategories());
    }, [dispatch]);
    return (
        <div className={s.modal_Wrap}>
            <div className={s.modal}>
                <div className={s.modal_close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M1 1L17 17" stroke="#FBFBFB" />
                        <path d="M1 17L17 0.999999" stroke="#FBFBFB" />
                    </svg>
                </div>
                <h2>Add transaction</h2>
                <AddTransactionForm />
            </div>
        </div>
    );
}

export default ModalAddTransaction;
