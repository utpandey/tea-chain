import React, { useState } from 'react';
import { onLogin } from '../components/authapi';
import {Link} from 'react-router-dom';
// import './Login.scss';
// import './Login.style.scss';

const Signin = () => {

    const [{username,password}, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [error,setError] = useState('');

    const login = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await onLogin({
            username,
            password
        })

        if(response && response.error){
            setError(response.error);
        }
    }

    return(
        <div className="body">
        <div className="session">
        <div className="left"/>
            <div className="log-in authform" onSubmit={login}>
                <h4><span>Sign In</span></h4>
                <p>Welcome back! Log in to your account</p>
                <input type="text" placeholder="Username" value={username} onChange={(event) => setCredentials({
                    username: event.target.value,
                    password
                })}/>
                <input type="password" placeholder="Password" value={password} onChange={(event) => setCredentials({
                    username,
                    password: event.target.value,
                })}/>
                <button type="button">Login</button>
                {error.length > 0 &&<p>{error}</p>}
                <p>Need an account? <Link to="/register">Register now</Link></p>
            
            </div>
        </div>
        </div>
    )
}

export default Signin;