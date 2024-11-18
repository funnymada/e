import React from 'react';
import {clearCartItems} from "../redux/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import '../App.css'
import CartCard  from "../components/CartCard";
import {useModal} from '../context/ModalContext';
import AlertPopUp from "../components/AlertPopUp";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.list);
    const { openModal } = useModal();
    const totalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price*item.qta), 0);
    }
    const handleBuyNow = () => {
        dispatch(clearCartItems())
        openModal(<AlertPopUp errorMessage={"Complimenti! acquisto avvenuto, hai speso " + totalPrice() + " €"} status={"successful"} />);
    }
    return (
        <div style={styles.pageBorder}>
            <h1 style={styles.element}>Cart</h1>
             <div style={styles.pageContainer}>
                <div>

                    <div style={styles.cardsSection}>
                        {cartItems.map((item) => (
                            <CartCard key={item.id + item.name} item={item}/>
                        ))}
                    </div>
                </div>
                <div style={styles.rightSection}>
                    <h2>Total price</h2>
                    <h1>{totalPrice()} €</h1>
                </div>
                <button className={'buyNowButton'} onClick={() => handleBuyNow()}>Buy Now!</button>
            </div>
        </div>
    )
}

const styles = {
    pageBorder: {
        width: '100%',
    },
    pageContainer: {
        flexDirection: 'row',
        display: 'flex',
        gap: '20px',
        padding: '5%'
    },
    cardsSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        width: '180%',
        marginRight: '10%',
    },
    rightSection: {
        marginLeft: '40%',
        width: '180%',
        borderRadius: '10px',
        padding: '20px',

    },
    element: {
        marginLeft: '5px',
        marginRight: '5px',
        alignItems: 'center',
    },
}
export default Cart