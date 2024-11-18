import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login, selectError, selectLoading, selectUser} from '../redux/authslice';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(login(credentials))
            navigate('/')
        }catch (error) {
            console.log(error);
        }
    };
    const user = useSelector(selectUser);
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);
    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" disabled={loading} className={'button2'}>
                    {loading ? 'Loading...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Login;
