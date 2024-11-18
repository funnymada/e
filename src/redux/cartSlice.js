import { createSlice } from '@reduxjs/toolkit';
import {removeItem} from "./itemSlice";

const cartSlice = createSlice({
    name: 'CartItems',
    initialState: {
        list: [],
    },
    reducers: {
        addCartItem: (state, action) => {
            const existingItem = state.list.find(
                item =>
                    item.name === action.payload.name &&
                    item.brand === action.payload.brand &&
                    item.price === action.payload.price
            );
            if (existingItem) {
                existingItem.qta += action.payload.qta;
            } else {
                state.list.push(action.payload);
            }
        },
        removeCartItem: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload);
        },
        incrementCartQta: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.list[index].qta = state.list[index].qta +1;
            }
        },
        decrementCartQta: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.list[index].qta = state.list[index].qta - 1;
                if (state.list[index].qta <= 0){
                    removeItem(state, action);
                }
            }
        },
        clearCartItems: (state) => {
            state.list = [];
        },
    },
});

export const { addCartItem, removeCartItem,decrementCartQta, incrementCartQta, clearCartItems } = cartSlice.actions;
export default cartSlice.reducer;
