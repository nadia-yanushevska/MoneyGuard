import s from './ModalAddTransaction.module.css';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';

function ModalAddTransaction() {
    return (
        <div className={s.modal_Wrap}>
            <div className={s.modal}>
                <h2>Add transaction</h2>
                <AddTransactionForm />
            </div>
        </div>
    );
}

export default ModalAddTransaction;
