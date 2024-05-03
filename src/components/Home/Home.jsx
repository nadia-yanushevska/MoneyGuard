import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTransactions } from '../../redux/Transactions/operations';
import { getTransactionsCategories } from '../../redux/Statistics/operations';
import TransactionList from '../TransactionList/TransactionList';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTransactions());
        dispatch(getTransactionsCategories());
    }, [dispatch]);
    return (
        <>
            <TransactionList />
        </>
    );
}

export default Home;
