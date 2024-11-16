import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    const [modalContent, setModalContent] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (content) => {
        setModalContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {isOpen && modalContent && (
                <Modal>{modalContent}</Modal>
            )}
        </ModalContext.Provider>
    );
};

const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div style={overlayStyle}>
            <div style={modalStyle}>
                {children}
            </div>
        </div>,
        document.body
    );
};

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
};

const modalStyle = {
    backgroundColor: '#fff',
    color: '#000000',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};



// import React, { createContext, useState } from 'react';
//
// export const ModalContext = createContext();
//
// export const ModalProvider = ({ children }) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//
//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);
//     return (
//         <ModalContext.Provider value={{
//             isModalOpen,
//             openModal,
//             closeModal
//         }}>
//             {children}
//         </ModalContext.Provider>
//     );
// };
