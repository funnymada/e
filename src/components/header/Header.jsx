import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import LogoutButton from "../logoutButton";
import AddModal from "../AddModal";
import {useModal} from "../../context/ModalContext";

const Header = () => {
    const { openModal } = useModal()
    const handleOpenModal = () => {
        openModal(<AddModal />);
    };
    return (
        <header className="header">
            <div className="logo">
                <h1> e-commerce </h1>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
            <div>
                <button className={'button2'} onClick={handleOpenModal}>ADD PRODUCT</button>
                <LogoutButton/>
            </div>
        </header>
    );
};

export default Header;