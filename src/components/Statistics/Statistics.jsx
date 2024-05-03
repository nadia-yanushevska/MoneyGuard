import { Doughnut } from 'react-chartjs-2';
import s from './Statistics.module.css'
import { useSelector } from 'react-redux';
import { selectSummary } from '../../redux/Statistics/selectors';

const coloredCategoriesMap = new Map([
    ['Car', 'rgb(255, 104, 109)'],
    ['Products', 'rgb(255, 157, 137)'],
    ['Main expenses', 'rgb(254, 208, 87)'],
    ['Leisure', 'rgb(91, 255, 167)'],
    ['Other expenses', 'rgb(0, 173, 95)'],
    ['Education', 'rgb(115, 222, 255)'],
    ['Self care', 'rgb(170, 154, 255)'],
    ['Child care', 'rgb(242, 250, 92)'],
    ['Household products', 'rgb(114, 61, 239)'],
    ['Entertainment', 'rgb(201, 79, 130)'],
  ]);


function Statistics() {
  const transactions = useSelector(selectSummary);

  const expense = transactions.categoriesSummary
    ? transactions.filter(transaction => transaction.type === 'EXPENSE')
    : [];

    const expenseTotal = transactions.expenseSummary
    const incomeTotal = transactions.incomeSummary

    const data = expense.map(item => ({
        ...item,
        color: coloredCategoriesMap.get(item.name),
      }));

  return (
    <div className={s.wrapper}>
      <div className={s.doughnut_wrapper}>
        <div className={s.title}>
          <h2>Statistics</h2>
          <Doughnut />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
