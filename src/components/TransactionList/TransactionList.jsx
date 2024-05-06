import { useDispatch, useSelector } from 'react-redux';
import { selectTransError, selectTransLoading, selectTransactions } from '../../redux/Transactions/selectors';
import { selectCategories } from '../../redux/Statistics/selectors';
import { getFormattedTransactions } from '../../helpers/transactionsFormatter';

import s from './TransactionList.module.css';
import Loader from '../Loader/Loader';
import TransactionItem from '../TransactionItem/TransactionItem';
import FormButton from '../common/FormButton/FormButton';
import { openAddModal } from '../../redux/Modals/slice';

function TransactionList() {
    const reduxTransactions = useSelector(selectTransactions);
    const isLoading = useSelector(selectTransLoading);
    const isError = useSelector(selectTransError);
    const categories = useSelector(selectCategories);

    const dispatch = useDispatch();

    return (
        <>
            {isLoading && <Loader />}
            {isError && <p>Oops, something went wrong...</p>}
            {!isLoading && reduxTransactions.length === 0 ? (
                <div className={s.container}>
                    <p>No transactions available yet.</p> <p> Let&#39;s add your first transaction:</p>
                    <FormButton type="button" text={'Add transaction'} variant={'multiColorButton'} handlerFunction={() => dispatch(openAddModal())} />
                </div>
            ) : (
                <ul className={s.list}>
                    {getFormattedTransactions(reduxTransactions, categories).map(({ id, ...item }, idx) => {
                        return <TransactionItem key={id} id={id} transaction={item} first={idx === 0} />;
                    })}
                </ul>
            )}
        </>
    );
}

export default TransactionList;
