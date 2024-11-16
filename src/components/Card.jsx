import React from 'react';
import {useNavigate} from "react-router-dom";
import '../App.css';
import './style.css'
import {removeItem} from "../redux/itemSlice";
import {useDispatch} from "react-redux";
function Card({item}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCardClick = (id) => {
        navigate(`/Detail/${id}`);
    };
    return (
        <div style={styles.cardContainer} >
            <div onClick={() => handleCardClick(item.id)}>
                <h2 style={styles.element}>Nome: {item.name}</h2>
                <p> Prezzo:   {item.price} €</p>
                <p> Brand: {item.brand}</p>
            </div>
           <button className={'button1'} onClick={() => dispatch(removeItem(item))}>-</button>
        </div>
    );
}
const styles = {
    cardContainer: {
        justifyContent: 'center',
        borderRadius: '15%',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 3,
        marginTop: 20,
        width: 300
    },
    element: {
        marginLeft: 10,
        marginRight: 10,
    },
}
export default Card;