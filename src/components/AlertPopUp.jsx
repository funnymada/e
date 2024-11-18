import React, { useEffect, useRef } from 'react';
import { useModal } from '../context/ModalContext';

const AlertPopUp = ({ errorMessage, status}) => {
    const { closeModal } = useModal();
    const divRef = useRef(null);
    const color = status === 'successful' ? 'green' : status === 'danger' ? 'red' : 'defaultColor';
    console.log(color)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                closeModal();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeModal]);

    return (
        <div ref={divRef} className="alert-popup">
            <p style={{color: color}}>{errorMessage}</p>
        </div>
    );
};

export default AlertPopUp;
