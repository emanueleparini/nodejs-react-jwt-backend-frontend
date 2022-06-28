import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { MyContext } from '../App';
import Header from './Header';

const Layout = (props) => {
  const {user} = useContext(MyContext);

  const authenticated = useMemo(() => {
    if (user) return true;
    return false;
  }, [user]);
  
  if (!authenticated) {
    return (
      <Navigate to='/auth/signin' />
    );
  }

  return (
    <>
      <Header />
      <div className='container'>
        {props.children}
      </div>
    </>
  );
};

export default Layout;
