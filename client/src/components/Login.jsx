import React, { useState } from 'react';

const Login = () => {
    const { email, setEmail } = useState
    const { password, setPassword } = useState

        return ( 
            <div className="sign-in-wrapper">
                <div className="form">
                    <div className="input-wrapper">
                        <div>Email Address</div> 
                        <input className="input" type="text" placeholder="Email Address" value={this.state.email} onChange={ e => this.setState({ email: e.target.value }) } />
                    </div>
                    <div className="input-wrapper">
                      <div>Password</div> 
                      <input className="input" type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                    </div>
            
                    <div className="btn" onClick={() => this.props.signIn(this.state.email, this.state.password)}>Sign in</div> 
                </div> 
            </div>
        )
    }

    export default Login;