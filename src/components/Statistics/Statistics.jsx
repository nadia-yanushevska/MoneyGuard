import { useDispatch, useSelector } from 'react-redux';
import ChartDoughnut from '../ChartDoughnut/ChartDoughnut';
import s from './Statistics.module.css';
import { selectSummary } from '../../redux/Statistics/selectors';
import coloredCategoriesMap from './coloredCategoriesMap';
import StatisticsTable from './StatisticsTable';
import { useEffect } from 'react';
import { getTransactionsSummaryByPeriod } from '../../redux/Statistics/operations';
import { getCurrentMonthYear } from '../../helpers/dateHelper';
import StatisticsSelector from '../StatisticsSelector/StatisticsSelector';

function Statistics() {
    const transactions = useSelector(selectSummary);
    const expense = transactions.categoriesSummary ? transactions.categoriesSummary.filter(transaction => transaction.type === 'EXPENSE') : [];

    const expenseTotal = transactions.expenseSummary;
    const incomeTotal = transactions.incomeSummary;

    const data = expense.map(item => ({
        ...item,
        color: coloredCategoriesMap.get(item.name),
    }));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTransactionsSummaryByPeriod(getCurrentMonthYear()));
    }, [dispatch]);
    return (
        <div className={s.container}>
            <div className={s.column}>
                <h2 className={s.heading}>Statistics</h2>
                <ChartDoughnut data={data} expenseTotal={expenseTotal} incomeTotal={incomeTotal} />
            </div>

            <div className={s.column}>
                <StatisticsSelector />
                <StatisticsTable data={data} expenseTotal={expenseTotal} incomeTotal={incomeTotal} />
            </div>
        </div>
    );
}

export default Statistics;
