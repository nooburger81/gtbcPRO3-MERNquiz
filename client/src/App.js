import axios from 'axios';
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Auth from '/Users/maeven/Desktop/gtbcPRO3-MERNquiz/client/src/components/Auth.js';
import Login from "/Users/maeven/Desktop/gtbcPRO3-MERNquiz/client/src/components/Login.jsx";
import Register from '/Users/maeven/Desktop/gtbcPRO3-MERNquiz/client/src/components/Register.jsx'
import Page from '/Users/maeven/Desktop/gtbcPRO3-MERNquiz/client/src/components/Page.jsx'

import store from './components/store';

class App extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('_ID')) {
      axios.get(`/api/users/${localStorage.getItem('_ID')}`).then(res => {
        store.dispatch({
          user: res.data.user,
          type: 'set_user'
        })
      }).catch(er => {
        console.log(er);
      })
    }
  }

render() {
  return (
    <div>
      <Auth />
      <Login />
      <Register />
      <Page />
      
    </div>
  );
}


}
export default App;
