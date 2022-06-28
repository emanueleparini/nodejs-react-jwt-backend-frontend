import React, { useEffect, useState } from 'react';
import authAxios from './authAxios';
import Routes from './components/Routes';
import './App.css';

export const MyContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwt') || null;

    if (token) {
      authAxios.post('/auth/me', {
        token
      }).then(response => {
        setUser(response.data.user);
      })
    }
  }, [user]);

  return (
    <MyContext.Provider value={{user, setUser}}>
      <Routes />
    </MyContext.Provider>
  );
}

export default App;
