import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectUser} from "../redux/authslice";
import ButtonCart from "../components/ButtonCart";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faHourglass} from "@fortawesome/free-solid-svg-icons";
import '../components/style.css'
import '../App.css';
import AddToCartModal from "../components/AddToCartModal";
import {useModal} from "../context/ModalContext";

export function Detail() {
    const {id} = useParams();
    const items = useSelector((state) => state.items.list);
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const {openModal} = useModal();
    const [currentItem, setCurrentItem] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(id)
    useEffect(() => {
        if (!user) {
            navigate('/Login');
        }
    }, [user, navigate]);
    useEffect(() => {
        const item = items.find((i) => {
            return id === String(i.id)
        })
        setCurrentItem(item);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleBack = (id) => {
        navigate(`/`);
    };
    const handleOpenModal = (item) => {
        openModal(<AddToCartModal item={item} />);
    };
    if (loading) {
        return <p><FontAwesomeIcon
            className={'hourglass'}
            style={styles.element}
            icon={faHourglass}
            color={'#eaa000'}
        /></p>;
    }
    if (!currentItem) {
        return <p>Prodotto non trovato</p>;
    }
    return (
        <div className={'cardContainer'}>
            <div>
                <h1 style={{marginTop: '-5%'}}> {currentItem.name} </h1>
                <p>prodotto numero: {id}</p>
                <img className={'imageCard'} src={currentItem.url} alt={currentItem.name}/>
                <div>
                    <button onClick={() => handleBack()} style={styles.button}>back</button>
                    <button className={'buttonAddCart'} onClick={() => handleOpenModal(currentItem)}><FontAwesomeIcon
                        icon={faCartShopping} size={'xs'}/></button>
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