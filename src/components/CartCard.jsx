import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeCartItem, incrementCartQta, decrementCartQta } from "../redux/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';

const CardCart = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCardClick = (id) => {
        navigate(`/Detail/${id}`);
    };

    const handleRemoveItem = () => {
        dispatch(removeCartItem(item.id));
    };
    return (
        <div style={styles.cardContainer}>
            <div onClick={() => handleCardClick(item.id)}>
                <h2 style={styles.element}>{item.name}</h2>
                <p>Prezzo: {item.price} €</p>
                <p>Brand: {item.brand}</p>
            </div>
            <div>
                <FontAwesomeIcon
                    style={styles.element}
                    icon={faPlus}
                    onClick={() => dispatch (incrementCartQta(item))}
                />
                <span style={styles.quantity}>{item.qta}</span>
                <FontAwesomeIcon
                    style={styles.element}
                    icon={faMinus}
                    onClick={() => dispatch(decrementCartQta(item))}
                />
            </div>
                <button className="button1" onClick={() => handleRemoveItem()}>-</button>
        </div>
    );
};

const styles = {
    cardContainer: {
        backgroundColor: '#3c3939',
        borderRadius: '10px',
        border: '2px solid black',
        padding: '15px',
        width: '100%',
        marginBottom: '15px',
    },
    element: {
        marginLeft: '5px',
        marginRight: '5px',
    },
};

export default CardCart;
