import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.b.goit.study/api';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    console.log('credet', credentials);
    try {
        const { data } = await axios.post('auth/sign-up', credentials);
        token.set(data.token);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.massage);
    }
});

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('auth/sign-in', credentials);
        token.set(data.token);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.massage);
    }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        const { data } = await axios.delete('auth/sign-out');
        token.unset();
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.massage);
    }
});

export const fetchCurrentUser = createAsyncThunk('users/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    token.set(persistedToken);
    try {
        const { data } = await axios.get('/users/current');
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.massage);
    }
});
