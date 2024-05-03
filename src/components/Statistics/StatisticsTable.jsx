const StatisticsTable = ({ data, expenseTotal, incomeTotal }) => {

  return (
    <div>
      <div>
        <p>Category</p>
        <p>Sum</p>
      </div>
      <ul>
        {data.length ?
        data.map((category, index) => (
          <li key={index}>
            <div style={{backgroundColor: `${category.color}`}}>
              
              <p>{category.name}</p>
            </div>
            <p>{category.total}</p>
          </li>
        )) : [] && <p>No data</p>
        
        }
      </ul>
      <div>
        <p>Expenses:</p>
        <span>
          {expenseTotal}
        </span>
      </div>
      <div>
        <p>Income:</p>
        <span>{incomeTotal}</span>
      </div>
    </div>
  );
};

export default StatisticsTable;
