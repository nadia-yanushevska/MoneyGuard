import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTransactions } from '../../redux/Transactions/operations';
import { getTransactionsCategories } from '../../redux/Statistics/operations';
import TransactionList from '../TransactionList/TransactionList';
import AddButton from '../AddButton/AddButton';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTransactions());
        dispatch(getTransactionsCategories());
    }, [dispatch]);
    return (
        <>
            <TransactionList />
            <AddButton></AddButton>
        </>
    );
}

export default Home;
