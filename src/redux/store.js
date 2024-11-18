import storage from "redux-persist/lib/storage";
import authReducer from './authslice';
import itemsReducer from './itemSlice';
import cartReducer from './cartSlice';
import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    auth: authReducer,
    items: itemsReducer,
    cart: cartReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
        reducer: persistedReducer,
            middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
const persistor = persistStore(store);
export { store, persistor };


