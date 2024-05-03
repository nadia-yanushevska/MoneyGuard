import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTransactions } from '../../redux/Transactions/operations';
import { getTransactionsCategories } from '../../redux/Statistics/operations';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTransactions());
        dispatch(getTransactionsCategories());
    }, [dispatch]);
    return <div>Home</div>;
}

export default Home;
