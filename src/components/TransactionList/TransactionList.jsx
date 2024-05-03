import { useSelector } from 'react-redux';
import s from './TransactionList.module.css';
import { selectTransactions } from '../../redux/Transactions/selectors';
import TransactionItem from '../TransactionItem/TransactionItem';
import { selectCategories } from '../../redux/Statistics/selectors';
import { getFormattedTransactions } from '../../helpers/transactionsFormatter';

function TransactionList() {
    const reduxTransactions = useSelector(selectTransactions);
    const categories = useSelector(selectCategories);
    console.log(reduxTransactions);

    const transactions = getFormattedTransactions(reduxTransactions, categories);
    return (
        <>
            {transactions.length === 0 ? (
                <p>No transactions available.</p>
            ) : (
                <ul className={s.list}>
                    {transactions.map(({ id, ...item }, idx) => {
                        console.log(id);
                        return <TransactionItem key={id} id={id} transaction={item} first={idx === 0} />;
                    })}
                </ul>
            )}
        </>
    );
}

export default TransactionList;
