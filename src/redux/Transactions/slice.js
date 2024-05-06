import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getTransactions, addTransactions, editTransactions, deleteTransactions } from './operations';

const initialState = {
    isTransLoading: false,
    isTransError: null,
    transactions: [],
};

const slice = createSlice({
    name: 'transactions',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getTransactions.fulfilled, (state, { payload }) => {
                state.transactions = payload;
            })
            .addCase(addTransactions.fulfilled, (state, { payload }) => {
                state = state.transactions.push(payload);
            })
            .addCase(editTransactions.fulfilled, (state, { payload }) => {
                const transactionIndex = state.transactions.findIndex(transaction => {
                    return transaction.id === payload.id;
                });
                if (transactionIndex !== -1) {
                    state.transactions[transactionIndex] = payload;
                }
            })
            .addCase(deleteTransactions.fulfilled, (state, { payload }) => {
                state.transactions = state.transactions.filter(transaction => {
                    return transaction.id !== payload;
                });
            })
            .addMatcher(isAnyOf(getTransactions.fulfilled, addTransactions.fulfilled, editTransactions.fulfilled, deleteTransactions.fulfilled), state => {
                state.isTransLoading = false;
                state.isTransError = null;
            })
            .addMatcher(isAnyOf(getTransactions.pending, addTransactions.pending, editTransactions.pending, deleteTransactions.pending), state => {
                state.isTransLoading = true;
                state.isTransError = null;
            })
            .addMatcher(isAnyOf(getTransactions.rejected, addTransactions.rejected, editTransactions.rejected, deleteTransactions.rejected), (state, { payload }) => {
                state.isTransLoading = false;
                state.isTransError = payload;
            });
    },
});

export const transactionsReducer = slice.reducer;
