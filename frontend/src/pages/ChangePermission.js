import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import authAxios from '../authAxios';

const ChangePermission = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const [role, setRole] = useState('admin');

  useEffect(() => {
    authAxios.get(`/${username}/role`).then(response => {
      setRole(response.data.role)
    });
  }, []);

  const changeRole = async (e) => {
    e.preventDefault();
    const response = await authAxios.put(
      `/${username}/change-role`,
      {
        role,
      }
    );
    
    navigate('/');
  };

  return (
    <form className='my-form mt-5' onSubmit={changeRole}>
      <h3 className='mb-4'>Change User Permission</h3>
      
      <label htmlFor="inputPassword" className="sr-only mb-2">User Role</label>
      <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
        <option value='user'>Normal User</option>
        <option value='admin'>Administrator</option>
      </select>

      <div className='text-center mt-4'>
        <button className="btn btn-primary btn-block px-4" type="submit">Change</button>
      </div>
    </form>
  );
};

export default ChangePermission;
