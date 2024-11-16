import React, {useContext, useEffect} from 'react';
import Card from './Card';
import { selectUser } from '../redux/authslice';
import {useNavigate} from "react-router-dom";
import {useSelector } from 'react-redux';
import '../App.css';
import LogoutButton from "./logoutButton";
import AddModal from "./AddModal";
import {useModal} from '../context/ModalContext';

export function Products(){
    let nomeBenv = "";
    const { openModal } = useModal()
    const items = useSelector((state) => state.items.list);
    const navigate = useNavigate();
    const handleOpenModal = () => {
        openModal(<AddModal />);
    };
    const user = useSelector(selectUser);
    useEffect(() => {
        if (!user) {
            navigate('/Login');
        }else{
        nomeBenv = user.username;
        }
    }, [user, navigate]);

    return (
        <div className="app">
            benvenuto {nomeBenv} <br/>
            <LogoutButton/>
            <div>
                <button className={'button2'} onClick={handleOpenModal}>ADD PRODUCT</button>
            </div>
            <div className="cardContainer">
                {items.map((item) => (
                    <Card key={item.id+item.name} item={item}/>
                ))}
            </div>
        </div>
    );
}