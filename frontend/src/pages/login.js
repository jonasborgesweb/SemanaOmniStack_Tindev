import React, { useState } from 'react';
import './login.css';
import logo from '../assets/logo.svg';


export default function Login(){
    const [username, setUsername] = useState('');

    function handSubmit(e){
        e.preventDefault();

        console.log(username);
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