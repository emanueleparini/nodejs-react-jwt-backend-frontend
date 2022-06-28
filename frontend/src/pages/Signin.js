import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MyContext } from '../App';
import authAxios from '../authAxios';

const Signin = () => {
  const {user: currentUser, setUser} = useContext(MyContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await authAxios.post('/auth/sign-in', {
      username,
      password,
    });

    const { token, user } = response.data;
    localStorage.setItem('jwt', token || '');
    if (user) {
      setUser(user);
    }
  };

  if (currentUser) {
    return <Navigate to='/' />
  }

  return (
    <div className='h-100 d-flex justify-content-center align-items-center'>
      <form className='my-form' onSubmit={handleSubmit}>
        <h1 className='text-center mb-4'>LOG IN</h1>

        <label htmlFor="username">Username</label>
        <input
          type="username"
          id="username"
          className="form-control mb-3"
          placeholder="Username"
          required="required"
          autoFocus=""
          data-testid='username'
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control mb-4"
          placeholder="Password"
          required='required'
          data-testid='password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className='text-center'>
          <button className="btn btn-lg btn-primary btn-block px-4" type="submit" name='signin'>Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;

