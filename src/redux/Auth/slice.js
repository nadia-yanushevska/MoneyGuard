import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { registerThunk, loginThunk, logoutThunk, refreshThunk, getBalanceThunk } from './operations';

const initialState = {
    user: {
        name: null,
        email: null,
        balance: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isAuthLoading: false,
    isAuthError: null,
};

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(logoutThunk.fulfilled, () => {
                return initialState;
            })
            .addCase(refreshThunk.pending, state => {
                state.isRefreshing = true;
                state.isAuthLoading = true;
                state.isLoggedIn = true;
            })
            .addCase(refreshThunk.rejected, state => {
                state.isRefreshing = false;
                state.isAuthLoading = false;
                state.isLoggedIn = false;
            })
            .addCase(refreshThunk.fulfilled, (state, { payload }) => {
                state.user.name = payload.username;
                state.user.email = payload.email;
                state.user.balance = payload.balance;

                state.isLoggedIn = true;
                state.isRefreshing = false;
                state.isAuthLoading = false;
            })
            .addCase(getBalanceThunk.fulfilled, (state, { payload }) => {
                state.user.balance = payload;
            })
            .addMatcher(isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled), (state, { payload }) => {
                state.user.name = payload.user.username;
                state.user.email = payload.user.email;
                state.user.balance = payload.user.balance;
                state.token = payload.token;
                state.isLoggedIn = true;
                state.isAuthLoading = false;
                state.isAuthError = null;
            })
            .addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending), state => {
                state.isAuthLoading = true;
                state.isAuthError = null;
            })
            .addMatcher(isAnyOf(loginThunk.rejected, registerThunk.rejected), (state, { payload }) => {
                state.isAuthLoading = false;
                state.isAuthError = payload;
            });
    },
});

export const authReducer = slice.reducer;
export const { updateBalance } = slice.actions;
