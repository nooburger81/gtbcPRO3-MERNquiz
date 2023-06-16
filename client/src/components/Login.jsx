import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    return ( 
        <div className="sign-in-wrapper">
            <div className="form">
                <div className="input-wrapper">
                    <div>
                        Email Address
                    </div> 
                        <input className="input" type="text" placeholder="Email Address" value={email}
                    onChange={ e => setEmail(e.target.value) }/>
                    </div>
                    <div className="input-wrapper">
                    <div>
                        Password
                    </div> 
                        <input className="input" type="password" placeholder="Password" value={password}
                    onChange={ e => setPassword(e.target.value) }/>
                    </div>
                    <div className="btn" onClick={() => SignIn({ email, password })}>
                        Sign in
                    </div> 
                </div> 
            </div>
        )
    }

export default Login