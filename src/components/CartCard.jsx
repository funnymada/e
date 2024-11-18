import React from 'react';
import {useNavigate} from "react-router-dom";
import '../App.css';
import './style.css'
import {removeCartItem} from "../redux/cartSlice";
import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

const  CardCart = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCardClick = (id) => {
        navigate(`/Detail/${id}`);
    };

    return (
        <div style={styles.cardContainer}>
            <div onClick={() => handleCardClick(item.id)}>
                <h2 style={styles.element}>Nome: {item.name}</h2>
                <p>Prezzo: {item.price} €</p>
                <p>Brand: {item.brand}</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faPlus} />
                <p>{item.qta}</p>
                <FontAwesomeIcon icon={faMinus} />
                <button className="button1" onClick={() => dispatch(removeCartItem(item))}>-</button>
            </div>
        </div>
    );
}

const styles = {
    cardContainer: {
        backgroundColor: '#3c3939',
        borderRadius: '10px',
        border: '2px solid black',
        margin: '10px 0',
        padding: '15px',
        width: '200px',
        display: 'block',
    },
    element: {
        marginLeft: '5px',
        marginRight: '5px',
    }
};

export default CardCart;
