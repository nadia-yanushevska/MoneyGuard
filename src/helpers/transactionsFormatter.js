import { nanoid } from '@reduxjs/toolkit';

export function getFormattedTransactions(transactions, categories) {
    console.log('HERE', transactions, categories);
    const headArr = [{ date: 'date', sum: 'sum', category: 'category', type: 'type', comment: 'comment', id: nanoid() }];
    const formattedTransactions = transactions.map(transaction => getFormattedTransaction(transaction, categories));
    return headArr.concat(formattedTransactions);
}
function getFormattedTransaction(transaction, categories) {
    const { transactionDate: date, amount: sum, categoryId, type, comment, id } = transaction;
    const newTransaction = { id, date, type, category: getCategoryName(categoryId, categories), comment, sum };
    return newTransaction;
}

function getCategoryName(id, categories) {
    const cat = [...categories].find(item => item.id === id);
    return cat?.name || 'Invalid';
}
