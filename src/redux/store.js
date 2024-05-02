import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './AuthSlice/slice';
import { transactionsReducer } from './Transactions/slice';
import { statisticsReducer } from './Statistics/slice';
import { currencyReducer } from './Currency/slice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        transactions: transactionsReducer,
        statistics: statisticsReducer,
        currency: currencyReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

    // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
