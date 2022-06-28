import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import authAxios from '../authAxios';

const ChangePassword = () => {
  const navigate = useNavigate();
  const { username } = useParams();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const changePassword = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert('Password not matched. Try again!');
      return false;
    }

    const response = await authAxios.put(
      `/${username}/change-password`,
      {
        password,
      }
    );

    navigate('/');
  };

  return (
    <form className='my-form mt-5' onSubmit={changePassword}>
      <h3 className='mb-4'>Reset Password</h3>
      
      <label htmlFor="password" className="mb-2">New Password</label>
      <input
        type="password"
        id="password"
        className="form-control mb-3"
        placeholder="Password"
        required="required"
        onChange={e => setPassword(e.target.value)}
      />

      <label htmlFor="passwordConfirm" className="mb-2">Confirm Password</label>
      <input
        type="password"
        id="passwordConfirm"
        className="form-control mb-2"
        placeholder="Confirm password"
        required="required"
        onChange={e => setPasswordConfirm(e.target.value)}
      />

      <div className='text-center mt-4'>
        <button className="btn btn-primary btn-block px-4" type="submit">Reset Password</button>
      </div>
    </form>
  );
};

export default ChangePassword;
