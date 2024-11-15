import React, {useContext, useEffect} from 'react';
import Card from './Card';
// import { selectUser } from '../redux/authslice';
// import {useNavigate} from "react-router-dom";
// import {useSelector } from 'react-redux';
import '../App.css';
import LogoutButton from "./logoutButton";
// import AddModal from "./AddModal";
// import { ModalContext } from '../context/ModalContext';

export function Products(){
    let nomeBenv = "";
    // const { openModal } = useContext(ModalContext);
    // const items = useSelector((state) => state.items.list);
    // const navigate = useNavigate();

    // const user = useSelector(selectUser);
    // useEffect(() => {
    //     if (!user) {
    //         navigate('/Login');
    //     }else{
    //     nomeBenv = user.username;
    //     }
    // }, [user, navigate]);

    return (
        <div className="app">
            benvenuto {nomeBenv} <br/>
        {/*    <LogoutButton/>*/}
        {/*    <div>*/}
        {/*        <button className={'button2'} onClick={() => openModal(<AddModal/>)}>ADD PRODUCT</button>*/}
        {/*    </div>*/}
        {/*    <div className="cardContainer">*/}
        {/*        {items.map((item) => (*/}
        {/*            <Card key={item} item={item}/>*/}
        {/*        ))}*/}
        {/*    </div>*/}
        </div>
    );
}