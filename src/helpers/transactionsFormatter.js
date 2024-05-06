export function getFormattedTransactions(transactions, categories) {
    return transactions.map(transaction => getFormattedTransaction(transaction, categories)).toSorted((a, b) => b.date.localeCompare(a.date));
}
function getFormattedTransaction(transaction, categories) {
    const { transactionDate: date, amount: sum, categoryId, type, comment, id } = transaction;
    const newTransaction = { id, date, type: type === 'EXPENSE' ? '-' : '+', category: getCategoryName(categoryId, categories), comment, sum: Math.abs(sum) };
    return newTransaction;
}

function getCategoryName(id, categories) {
    const cat = [...categories].find(item => item.id === id);
    return cat?.name || 'Invalid';
}

export function getHeadTransaction() {
    return ['date', 'type', 'category', 'comment', 'sum'];
}

export function getStyleByType(type) {
    const currentColor = type === '-' ? 'var(--red-color)' : 'var(--yellow-color)';
    return {
        color: currentColor,
    };
}
