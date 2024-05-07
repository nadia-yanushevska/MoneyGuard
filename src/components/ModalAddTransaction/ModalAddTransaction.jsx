import Modal from 'react-modal';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
import { useDispatch, useSelector } from 'react-redux';
import s from './ModalAddTransaction.module.css';
import { selectIsAddModalOpen, closeAddModal } from '../../redux/Modals/slice';

Modal.setAppElement('#root');

function ModalAddTransaction() {
    const dispatch = useDispatch();

    const isAddOpen = useSelector(selectIsAddModalOpen);

    return (
        <Modal
            isOpen={isAddOpen}
            className={s.modal}
            overlayClassName={s.modal_Wrap}
            onRequestClose={() => {
                dispatch(closeAddModal());
            }}
        >
            <div
                className={s.modal_close}
                onClick={() => {
                    dispatch(closeAddModal());
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M1 1L17 17" stroke="#FBFBFB" />
                    <path d="M1 17L17 0.999999" stroke="#FBFBFB" />
                </svg>
            </div>
            <h2>Add transaction</h2>
            <AddTransactionForm />
        </Modal>
    );
}

export default ModalAddTransaction;
