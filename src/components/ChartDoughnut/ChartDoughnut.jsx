import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import s from './ChartDoughnut.module.css';
import { useSelector } from 'react-redux';
import { selectSummary } from '../../redux/Statistics/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

// const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

const ChartDoughnut = ({ data, expenseTotal, incomeTotal }) => {
  const total = useSelector(selectSummary);
  console.log(total);
  const doughnutData = {
    datasets: [
      {
        data: data.map(expense => expense.total),
        backgroundColor: data.map(expense => expense.color),
        borderColor: data.map(expense => expense.color),
      },
    ],
  };

  return (
    <div className={s.doughnut}>
      {(!expenseTotal && !incomeTotal && (
        <div>
          <p>Add some expenses and incomes to see the chart</p>
          <p>Your balance is ₴ {total} </p>
        </div>
      ))
      || (!expenseTotal && incomeTotal && (
      <div>
        <p>Add some expenses</p>
        <p>Your income is ₴ {incomeTotal}</p>
      </div>
      )) || (
        <div>
          <p>₴ {expenseTotal} </p>
        </div>
      )}
      <Doughnut data={doughnutData} />
    </div>
  );
};

export default ChartDoughnut;
