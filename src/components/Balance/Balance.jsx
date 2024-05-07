import { useEffect } from 'react';
import { selectUserBalance } from '../../redux/Auth/selectors';
import css from './Balance.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBalanceThunk } from '../../redux/Auth/operations';
import { formatter } from '../../helpers/formatBalance';

function Balance() {
    const dispatch = useDispatch();
    const balance = useSelector(selectUserBalance);

    useEffect(() => {
        dispatch(getBalanceThunk());
    }, [dispatch]);

    return (
        <div className={css.balance}>
            <h3>Your balance</h3>
            <p>
                ₴ <span>{balance ? formatter.format(balance) : '0.00'}</span>
            </p>
        </div>
    );
}

export default Balance;
