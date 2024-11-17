import React, {useEffect, useState} from 'react';
import Card from './Card';
import { selectUser } from '../redux/authslice';
import {useNavigate} from "react-router-dom";
import {useSelector } from 'react-redux';
import '../App.css';

export function Products(){
    const [nomeBenv, setNomeBenv] = useState("");
    const items = useSelector((state) => state.items.list);
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    useEffect(() => {
        if (!user) {
            navigate('/Login');
        }else{
            setNomeBenv(user.username);
            console.log(nomeBenv)
        }
    }, [user, navigate]);

    return (
        <div className="app">
            benvenuto {nomeBenv} <br/>
            <div className="cardContainer">
                {items.map((item) => (
                    <Card key={item.id+item.name} item={item}/>
                ))}
            </div>
        </div>
    );
}