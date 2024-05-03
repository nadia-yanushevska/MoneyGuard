import { nanoid } from '@reduxjs/toolkit';

export function getFormattedTransactions(transactions, categories) {
    transactions = transactions.concat(transactions);
    return transactions.map(transaction => getFormattedTransaction(transaction, categories));
}
function getFormattedTransaction(transaction, categories) {
    const { transactionDate: date, amount: sum, categoryId, type, comment, id } = transaction;
    const newTransaction = { id, date, type: type === 'EXPENSE' ? '-' : '+', category: getCategoryName(categoryId, categories), comment, sum };
    return newTransaction;
}

function getCategoryName(id, categories) {
    const cat = [...categories].find(item => item.id === id);
    return cat?.name || 'Invalid';
}

export function getHeadTransaction() {
    return { id: nanoid(), date: 'date', type: 'type', category: 'category', comment: 'comment', sum: 'sum' };
}
