import axios from 'axios';
import React from 'react';
import Auth from '/Users/maeven/Desktop/gtbcPRO3-MERNquiz/client/src/components/Auth.js';
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
      <Page />
      
    </div>
  );
}


}
export default App;
