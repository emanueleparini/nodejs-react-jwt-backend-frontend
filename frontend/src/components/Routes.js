import React from 'react';
import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Signin from '../pages/Signin';
import Dashboard from '../pages/Dashboard';
import ChangePassword from '../pages/ChangePassword';
import ChangePermission from '../pages/ChangePermission';

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Layout><Dashboard /></Layout>} />
        <Route path='/auth/signin' element={<Signin />} />
        <Route path='/:username/change-password' element={<Layout><ChangePassword /></Layout>} />
        <Route path='/:username/change-role' element={<Layout><ChangePermission /></Layout>} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
