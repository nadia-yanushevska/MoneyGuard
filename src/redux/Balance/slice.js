import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalBalance: 0,
};

const slice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        setTotalBalance(state, { payload }) {
            state.totalBalance = payload;
        },
    },
});

export const setTotalBalance = slice.actions;

export const balanceReducer = slice.reducer;
