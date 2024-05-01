import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsdEuroValues } from "./currencyApi";

export const getCurrency = createAsyncThunk("currency", async (_, thunkAPI) => {
  try {
    const storedData = localStorage.getItem("lastCurrencyDate");

    if (storedData) {
      const parsedStoredData = JSON.parse(storedData);
      const now = Date.now();
      if (now - parsedStoredData.date < 3_600_000) {
        console.log({ parsedStoredData });
        return parsedStoredData.data;
      }
    }
    const data = await fetchUsdEuroValues();
    const x = {
      date: Date.now(),
      data,
    };
    localStorage.setItem("lastCurrencyDate", JSON.stringify(x));

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
