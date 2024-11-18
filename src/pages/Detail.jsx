import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectUser} from "../redux/authslice";
import ButtonCart from "../components/ButtonCart";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHourglass} from "@fortawesome/free-solid-svg-icons";
import '../components/style.css'
import '../App.css';

export function Detail() {
    const {id} = useParams();
    const items = useSelector((state) => state.items.list);
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!user) {
            navigate('/Login');
        }
    }, [user, navigate]);
    useEffect(() => {
        setItem(items.find(item => item.id === item.id));
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleBack = (id) => {
        navigate(`/`);
    };
    if (loading) {
        return <p><FontAwesomeIcon
            className={'hourglass'}
            style={styles.element}
            icon={faHourglass}
            color={'#eaa000'}
        /></p>;
    }
    if (!item) {
        return <p>Prodotto non trovato</p>;
    }
    return (

        <div>
            <div>
                <h1 style={{marginTop: '-5%'}}> {item.name} </h1>
                <p>prodotto numero: {id}</p>
                <img className={'imageCard'} src={item.url} alt={item.name}/>
                <div >
                    <button onClick={() => handleBack()} style={styles.button}>back</button>
                </div>
            </div>
            <ButtonCart/>
        </div>
    );
}

const styles = {
    button: {
        borderStyle: 'solid',
        borderRadius: 10,
        fontWeight: 'bold',
        borderColor: 'black',
        backgroundColor: '#eaa000',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
    }
}