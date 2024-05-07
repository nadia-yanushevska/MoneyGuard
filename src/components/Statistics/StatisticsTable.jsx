import s from './StatisticsTable.module.css';

const StatisticsTable = ({ data, expenseTotal, incomeTotal }) => {
    return (
        <div>
            <div className={s.table_head}>
                <p>Category</p>
                <p>Sum</p>
            </div>
            <div className={s.list_wrapper}>
                <ul>
                    {data.length
                        ? data.map((category, index) => (
                              <li key={index}>
                                  <div className={s.item_wrapper}>
                                      <p className={s.first_column}>
                                          <span className={s.span_indicator} style={{ backgroundColor: `${category.color}` }}></span>
                                          {category.name}
                                      </p>

                                      <p>{Math.abs(category.total).toFixed(2)}</p>
                                  </div>
                              </li>
                          ))
                        : ''}
                </ul>

                <div className={s.table_bottom}>
                    <p>Expenses:</p>
                    <span className={s.expense}>{Math.abs(expenseTotal).toFixed(2)}</span>
                </div>
                <div className={s.table_bottom}>
                    <p>Income:</p>
                    <span className={s.income}>{Math.abs(incomeTotal).toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default StatisticsTable;
