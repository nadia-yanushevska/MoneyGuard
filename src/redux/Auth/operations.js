import { createAsyncThunk } from '@reduxjs/toolkit';
import { userTransactionsApi, setToken, removeToken } from '../../config/userTransactionsApi';

export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
    try {
        const { data } = await userTransactionsApi.post('/api/auth/sign-up', credentials);
        setToken(data.token);
        return data;
    } catch (error) {
        thunkApi.rejectWithValue(error.message);
    }
});

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await userTransactionsApi.post('/api/auth/sign-in', credentials);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        const { data } = await userTransactionsApi.delete('/api/auth/sign-out');
        removeToken();
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const refreshThunk = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
        setToken(savedToken);
    } else {
        return thunkApi.rejectWithValue("Token doesn't exist");
    }

    try {
        const { data } = await userTransactionsApi.get('/api/users/current');
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const getBalanceThunk = createAsyncThunk('getBalannce', async (_, thunkApi) => {
    try {
        const { data } = await userTransactionsApi.get('/api/users/current');
        return data.balance;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});
