import { configureStore } from '@reduxjs/toolkit';

import notes from './notes'

export const store = configureStore({
    reducer: {
        notes
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});