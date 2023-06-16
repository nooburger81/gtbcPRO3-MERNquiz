import React from 'react';
import { UserProvider, useUserContext } from './UserContext';

const App = () => {
  return (
    <UserProvider>
      <MainComponent />
    </UserProvider>
  );
};

const MainComponent = () => {
  const { state, dispatch } = useUserContext();

  const handleLogin = () => {
    // Dispatch login action
    dispatch({
      type: 'login',
      token: 'your_token',
      _id: 'your_id',
      user: { name: 'John Doe' }
    });
  };

  return (
    <div>
      <h1>User: {state.user ? state.user.name : 'Not logged in'}</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default App;
