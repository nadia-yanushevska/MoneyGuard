import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import s from './ChartDoughnut.module.css';
import { useSelector } from 'react-redux';
import { selectSummary } from '../../redux/Statistics/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    cutout: '75%',
};

const ChartDoughnut = ({ data, expenseTotal, incomeTotal }) => {
    const total = useSelector(selectSummary);

    const doughnutData = {
        datasets: [
            {
                data: !data.length ? [0] : data.map(expense => expense.total),

                backgroundColor: data.map(expense => expense.color),
                borderColor: data.map(expense => expense.color),
                borderWidth: 1,
                borderJoinStyle: 'round',
                borderAlign: 'inner',
            },
        ],
    };

    return (
        <div className={s.doughnut}>
            {(!expenseTotal && !incomeTotal && (
                <div>
                    <p>Add some expenses and incomes to see the chart</p>
                    <p>Your balance is ₴ {Math.abs(expenseTotal).toFixed(2)} </p>
                </div>
            )) ||
                (!expenseTotal && incomeTotal && (
                    <div>
                        <p>Add some expenses</p>
                        <p>Your income is ₴ {Math.abs(incomeTotal).toFixed(2)}</p>
                    </div>
                )) || (
                    <div>
                        <div className={s.balance}>₴ {Math.abs(expenseTotal).toFixed(2)}</div>
                        <Doughnut data={doughnutData} options={options} />
                    </div>
                )}
        </div>
    );
};

export default ChartDoughnut;
