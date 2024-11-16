import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectUser} from "../redux/authslice";

export function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    useEffect(() => {
        if (!user) {
            navigate('/Login');
        }
    }, [user, navigate]);
    const handleBack = (id) => {
        navigate(`/`);
    };
    return (
        <div>
            <p>prodotto numero: {id}</p>
            <button onClick={() => handleBack()} style={styles.button}>back</button>
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