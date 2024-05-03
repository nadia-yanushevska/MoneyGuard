import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './Auth/slice';
import { transactionsReducer } from './Transactions/slice';
import { statisticsReducer } from './Statistics/slice';
import { currencyReducer } from './Currency/slice';
import { modalsReducer } from './Modals/slice';

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
        modals: modalsReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
