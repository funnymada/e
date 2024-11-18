import React from 'react';
import {useNavigate} from "react-router-dom";
import '../App.css';
import './style.css'
import {removeItem} from "../redux/itemSlice";
import {useDispatch} from "react-redux";
import {faCartShopping, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddToCartModal from "./AddToCartModal";
import { useModal } from "../context/ModalContext";

function Card({item}) {
    const navigate = useNavigate();
    const { openModal } = useModal();
    const dispatch = useDispatch();
    const handleCardClick = (e, id) => {
        e.preventDefault();
        navigate(`/Detail/${item.id}`);
    };
    const handleOpenModal = (item) => {
        openModal(<AddToCartModal item={item} />);
    };
    return (
        <div style={styles.cardContainer} >
            <div onClick={(e) => handleCardClick(e,item.id)}>
                <h2 style={styles.element}>Nome: {item.name}</h2>
                <p> Prezzo:   {item.price} €</p>
                <p> Brand: {item.brand}</p>
            </div>
            <div>
                <button className={'button1'} onClick={() => dispatch(removeItem(item))}>
                    <FontAwesomeIcon
                        icon={faTrash} size={'xs'} />
                </button>
                <button className={'buttonAddCart'} onClick={() => handleOpenModal(item)}><FontAwesomeIcon icon={faCartShopping} size={'xs'}/></button>
            </div>
        </div>
    );
}
const styles = {
    cardContainer: {
        backgroundColor: '#3c3939',
        borderRadius: '15%',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 3,
        marginTop: 20,
        marginRight: 50,
        marginLeft: 50,
        width: 300
    },
    element: {
        marginLeft: 10,
        marginRight: 10,
    },
}
export default Card;