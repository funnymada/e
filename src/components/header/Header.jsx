import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import LogoutButton from "../logoutButton";
import AddModal from "../AddModal";
import { useModal } from "../../context/ModalContext";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/authslice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { openModal } = useModal();
    const handleOpenModal = () => {
        openModal(<AddModal />);
    };
    const user = useSelector(selectUser);
    const isLogged = user != null;

    return (
        <header className="header">
            <div className="logo">
                <h1>e-commerce</h1>
            </div>
            {isLogged && (
                <nav className="nav-menu">
                    <ul>
                        <li><Link to="/"><FontAwesomeIcon icon={faHouse} size={'2x'}/></Link></li>
                    </ul>
                </nav>
            )}
            {isLogged && (
                <div>
                    <button className="button2" onClick={handleOpenModal}>ADD PRODUCT</button>
                    <LogoutButton />
                </div>
            )}
        </header>
    );
};

export default Header;
