const StatisticsTable = () => {
  return (
    <div>
      <div>
        <p>Category</p>
        <p>Sum</p>
      </div>
      <ul>
        {categoriesSummary.map((category, index) => (
          <li key={index}>
            <div>
              <span color={category.color} />
              <p>{category.name}</p>
            </div>
            <p>{formatCurrency(category.total)}</p>
          </li>
        ))}
      </ul>
      <div>
        <p>Expenses:</p>{' '}
        <span>
          {formatCurrency(expenseSummary)}
        </span>
      </div>
      <div>
        <p>Income:</p>{' '}
        <span>{formatCurrency(incomeSummary)}</span>{' '}
      </div>
    </div>
  );
};

export default StatisticsTable;
