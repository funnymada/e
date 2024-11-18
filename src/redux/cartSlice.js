import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'CartItems',
    initialState: {
        list: []
    },
    reducers: {
        addCartItem: (state, action) => {
            console.log(action.payload.id)
            state.list.push(action.payload);
        },
        removeCartItem: (state, action) => {
            state.list = state.list.filter(CartItem => CartItem.id !== action.payload.id);
        },
        updateCartItem: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
        clearCartItems: (state) => {
            state.list.splice(0, state.list.length)
        }
    },
});

export const { addCartItem, removeCartItem, updateCartItem,clearCartItems } = cartSlice.actions;
export default cartSlice.reducer;