import React from 'react';
import {clearCartItems} from "../redux/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import '../App.css'
import CartCard  from "../components/CartCard";
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.list);

    const totalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price*item.qta), 0);
    }
    console.log(totalPrice())
    return (
        <div style={styles.pageContainer}>
            <div style={styles.cardsSection}>
                {cartItems.map((item) => (
                    <CartCard key={item.id + item.name} item={item}/>
                ))}
            </div>
            <button className={'buyNowButton'} onClick={() => dispatch(clearCartItems())}>Buy Now!</button>
        </div>
    )
}

const styles = {
    pageContainer: {
        display: 'flex',
        gap: '20px',
        padding: '20px',
    },
    cardsSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        width: '250px',
    },
    rightSection: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        padding: '20px',
    }
}
export default Cart