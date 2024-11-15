import storage from "redux-persist/lib/storage";
import authReducer from './authslice';
import itemsReducer from './itemSlice';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";


const persistConfig = {
    key: 'root',
    storage
};
const persistedReducerAuth = persistReducer(persistConfig, authReducer);
const persistedReducerItem = persistReducer(persistConfig, itemsReducer);

const store = configureStore({
    reducer: {
        items: persistedReducerItem,
        auth: persistedReducerAuth,
            middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    },
});
const persistor = persistStore(store);
export { store, persistor };


