import { useDispatch, useSelector } from 'react-redux';
import ChartDoughnut from '../ChartDoughnut/ChartDoughnut';
import s from './Statistics.module.css';
import { selectSummary } from '../../redux/Statistics/selectors';
import coloredCategoriesMap from './coloredCategoriesMap';
import StatisticsTable from './StatisticsTable';
import { useEffect } from 'react';
import { getTransactionsSummaryByPeriod } from '../../redux/Statistics/operations';
import { getCurrentMonthYear } from '../../helpers/dateHelper';

function Statistics() {
  const transactions = useSelector(selectSummary);
  console.log(transactions.categoriesSummary);
  const expense = transactions.categoriesSummary
    ? transactions.categoriesSummary.filter(transaction => transaction.type === 'EXPENSE')
    : [];

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
  //TODO: Change div-s to components, remove temp classes
  return (
    <div className={s.container}>
      <div className={s.column}>
        <h2 className={s.heading}>Statistics</h2>
        <ChartDoughnut
          data={data}
          expenseTotal={expenseTotal}
          incomeTotal={incomeTotal}
        />
      </div>

      <div className={s.column}>
        <div className={s.temp_selectors}>Selectors</div>
        <StatisticsTable
          data={data}
          expenseTotal={expenseTotal}
          incomeTotal={incomeTotal}
        />
      </div>
    </div>
  );
}

export default Statistics;
