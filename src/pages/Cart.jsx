import React from 'react';
import {clearCartItems} from "../redux/cartSlice";
import {useDispatch} from "react-redux";
import '../App.css'

const Cart = () => {
    const dispatch = useDispatch();
    return (
        <div>

            <button className={'buyNowButton'} onClick={() => dispatch(clearCartItems())}>Buy Now!</button>
        </div>
    )
}

export default Cart



