import React, { useState } from 'react';
import './login.css';
import api from '../services/api';
import logo from '../assets/logo.svg';


export default function Login({ history }){
    const [username, setUsername] = useState('');

    async function handSubmit(e){
        e.preventDefault();

        const response = await api.post('/devs',{
            username,
        });

        const { _id} = response.data;

        history.push(`/dev/${_id}`);
    }

    
    return(
    <div className="login-container">
        <form onSubmit={handSubmit}>
            <img src={logo} alt="Tindev"/>
            <input type="text" 
                placeholder="Digite seu usuário do Github"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>
        
    </div>
    );
}