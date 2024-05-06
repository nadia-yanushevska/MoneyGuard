import { useDispatch, useSelector } from 'react-redux';
import { selectTransError, selectTransLoading, selectTransactions } from '../../redux/Transactions/selectors';
import { selectCategories } from '../../redux/Statistics/selectors';
import { getFormattedTransactions, getHeadTransaction } from '../../helpers/transactionsFormatter';

import s from './TransactionList.module.css';
import Loader from '../Loader/Loader';
import TransactionItem from '../TransactionItem/TransactionItem';
import FormButton from '../common/FormButton/FormButton';
import { openAddModal } from '../../redux/Modals/slice';
import useMedia from '../../hooks/useMedia';

function TransactionList() {
    const reduxTransactions = useSelector(selectTransactions);
    const isLoading = useSelector(selectTransLoading);
    const isError = useSelector(selectTransError);
    const categories = useSelector(selectCategories);

    const { isMobile } = useMedia();
    const dispatch = useDispatch();

    return (
        <>
            {isLoading && <Loader />}
            {isError && <p className={s.text}>Oops, something went wrong...</p>}
            {!isLoading && reduxTransactions.length === 0 ? (
                <div className={s.container}>
                    <p>No transactions available yet.</p> <p> Let&#39;s add your first transaction:</p>
                    <FormButton type="button" text={'Add transaction'} variant={'multiColorButton'} handlerFunction={() => dispatch(openAddModal())} />
                </div>
            ) : (
                <>
                    {!isMobile && (
                        <ul className={s.head_row}>
                            {getHeadTransaction().map((value, idx) => {
                                return (
                                    <li key={idx} className={s.row_item}>
                                        {value}
                                    </li>
                                );
                            })}
                            <li className={s.row_item}></li>
                        </ul>
                    )}
                    <ul className={s.list}>
                        {getFormattedTransactions(reduxTransactions, categories).map(({ id, ...item }) => {
                            return <TransactionItem key={id} id={id} transaction={item} />;
                        })}
                    </ul>
                </>
            )}
        </>
    );
}

export default TransactionList;
