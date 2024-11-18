import React, {useState} from 'react';
import { useModal } from '../context/ModalContext';
import {addCartItem} from "../redux/cartSlice";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

const AddToCartModal = ({item}) => {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const [qta, setQta] = useState(1);

    const handleAddToCart = () => {
        const newItem = {
            id: Date.now(),
            name: item.name,
            brand: item.brand,
            price: item.price,
            qta: qta
        };
            dispatch(addCartItem(newItem));
            closeModal();
    };
    const increment = () => {
        setQta(qta + 1);
    };

    const decrement = () => {
        if (qta > 1) {
            setQta(qta - 1);
        }
    };
    return (
        <div>
            <span style={styles.titleContainer}>Quantity</span>
            <div style={styles.cardContainer}>
                <FontAwesomeIcon
                    style={styles.element}
                    icon={faPlus}
                    onClick={increment}
                />
                <span style={styles.quantity}>{qta}</span>
                <FontAwesomeIcon
                    style={styles.element}
                    icon={faMinus}
                    onClick={decrement}
                />
            </div>
            <div className="centeredButton">
                <button className={'button2'} onClick={() => handleAddToCart()}>Add To Cart</button>
                <button className={'buttonClose'} onClick={() => closeModal()}>Close</button>
            </div>
        </div>
    );
};
const styles = {
    titleContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '5px'
    },
    cardContainer: {
        borderRadius: '10px',
        border: '2px solid black',
        padding: '5px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: 'fit-content',
        margin: '0 auto',
        marginBottom: '10px',
    },
    element: {
        cursor: 'pointer',
        padding: '5px',
    },
    quantity: {
        fontSize: '1.2rem',
        minWidth: '20px',
        textAlign: 'center'
    }
};

export default AddToCartModal;
