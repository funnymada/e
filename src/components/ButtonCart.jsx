import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";

const ButtonCart = () => {
    const navigate = useNavigate();
    const handleCart = () => {
        navigate(`/Cart`);
    };
    return (
        <div style={styles.ButtonContainer} onClick={() => handleCart()}>
            <button style={styles.ButtonTp}><FontAwesomeIcon size={'2x'} icon={faCartShopping}/></button>
        </div>
    )

};
const styles = {
    ButtonContainer: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        alignItems: 'center',
        backgroundColor: '#eaa000',
        borderRadius: '50%',
        padding: '10px',
        zIndex: 1000,
        cursor: 'pointer'
    },
    ButtonTp: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '5px'
    }
}

export default ButtonCart;
