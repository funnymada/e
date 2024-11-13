import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authslice';
import { persistor } from '../redux/store';
import '../App.css';
const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        persistor.purge();
    };

    return <button className={'button2'}  onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;

