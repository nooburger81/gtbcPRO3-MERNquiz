import React, { useState } from 'react';
import Signin from './Login.jsx';
import Signup from './Register';
import axios from 'axios';
import store from './store/index';
import Toast from './toast/Toast';
import Nugget from '../assets/nuggies.png';
// import SignIn from './Login';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [tab, setTab] = useState('signin');

    const Signin = (email, password) => {
        console.log(email, password);
        axios.post('/api/users/login', {email, password}).then(res => {
            if (res.data.success) {
                store.dispatch({
                    type: 'login',
                    _id: res.data.user._id,
                    user: res.data.user,
                    token: res.data.token
                });
                // this.props.history.push('/dashboard');
            } else {
                setShowToast(true);
                // setTimeout(() => {
                //     setShowToast: (false)
                // }, 3000);
            }
        }).catch(err => {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false)
            }, 3000);
        })
    };

    const Signup = ({ firstName, lastName, email, password }) => {
        console.log(firstName, lastName, email, password);
        axios.post('/api/users/register', {firstName, lastName, email, password}).then((res) => {
            if (res.data.success) {
                setTab('signin');
            }
        }).catch(err => {
            console.log(err);
        })
    };

   const changeTab = () => {
        setTab(tab === 'signup' ? 'signin' : 'signup');
    };

        let page = tab === 'signin' ? <signIn signIn={Signin}/> : <signUp signUp={Signup}/>

        return (
            <div className="auth-wrapper">
                <Toast model={showToast} message="Incorrect login, Please Try Again" backgroundColor="#FF4539" />
                <div className="left">
                    <img src={Nugget} alt='chicken nugget'/>
                </div>

                <div className="right">
                    <div className="header">
                        Whatchoo Know 'Bout Me?'
                    </div>
                    <div className="sub-header">
                        A Friendly Quiz Game
                    </div>
                    {page}
                    <div className="new" onClick={changeTab}>
                        {tab === 'signin' ? 'New to WKBM? Sign up here' : 'Already have an account with us? Sign in'}
                    </div>
                </div>
            </div>
        )
    };

export default Auth