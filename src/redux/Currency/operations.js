import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsdEuroValues } from './currencyApi';
import { setDataToLocalStorage, getCurrencyDataFromLocalStorage } from '../../helpers/currencyApiHelpers';

export const getCurrency = createAsyncThunk('currency', async (_, thunkAPI) => {
    try {
        const storedData = getCurrencyDataFromLocalStorage();
        if (storedData) return storedData;
        const data = await fetchUsdEuroValues();
        setDataToLocalStorage(data);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
