import { useDispatch } from 'react-redux';
import s from './Statistics.module.css';
import { useEffect } from 'react';
import { getTransactionsSummaryByPeriod } from '../../redux/Statistics/operations';
import { getCurrentMonthYear } from '../../helpers/dateHelper';

function Statistics() {
    //TODO: Change div-s to components, remove temp classes
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTransactionsSummaryByPeriod(getCurrentMonthYear()));
    }, [dispatch]);
    return (
        <div className={s.container}>
            <div className={s.column}>
                <h2 className={s.heading}>Statistics</h2>
                <div className={s.temp_chart}>Chart</div>
            </div>

            <div className={s.column}>
                <div className={s.temp_selectors}>Selectors</div>
                <div className={s.temp_table}>Table</div>
            </div>
        </div>
    );
}

export default Statistics;
