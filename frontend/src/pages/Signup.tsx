import React, { useState } from 'react';
import { onRegister } from '../components/authapi';
import {Link} from 'react-router-dom';


const Signup = () =>{

    const [{username, password, repeatPassword}, setRegisterData] = useState({
        username: '',
        password: '',
        repeatPassword: ''
    })

    const [error, setError] = useState('')

    const register= async (event: React.FormEvent) =>{
        event.preventDefault();
        if(password === repeatPassword){
            const response = await onRegister({
                username,
                password
            })

        if(response && response.error){
            setError(response.error);
        }

        }else{
            setError('password and repeat password must match')
        }
    }

    return(
        <div className="body">
            <div className="session">
            <div className="left"/>
                <div className="log-in authform" onSubmit={register}>
                    <h4><span>Sign Up</span></h4>
                    <p>Welcome! Create your account</p>
                    <input type="text" value={username} placeholder="Username" name="username" onChange={(event) => setRegisterData({
                        username: event.target.value,
                        password,
                        repeatPassword
                    })}/>
                    
                    <input type="password" value={password} placeholder="Password" name="password" onChange={(event) => setRegisterData({
                        username,
                        password: event.target.value,
                        repeatPassword
                    })}/>
                    
                    <input type="password" value={repeatPassword} placeholder="Repeat password" name="repeatPassword" onChange={(event) => setRegisterData({
                        username,
                        password,
                        repeatPassword: event.target.value,
                    })}/>
                    <button type="button">Register</button>
                    {error.length > 0 && <p>{error}</p>}
                    <p>Already have an account? <Link to="/signin">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup;