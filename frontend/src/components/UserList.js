import React from 'react';
import { useNavigate } from 'react-router-dom';
import authAxios from '../authAxios';

const UserList = ({users}) => {

  const navigate = useNavigate();
  
  const changePermission = (e, username) => {
    e.preventDefault();
    navigate(`/${username}/change-role`, {replace: true});
  };
  
  const changePassword = (e, username) => {
    e.preventDefault();
    navigate(`/${username}/change-password`, {replace: true});
  };

  const revokeToken = async (e, username) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to revoke user\'s token')) {
      await authAxios.post(`/${username}/revoke-token`);
    }
  };

  return (
    <div className='container mt-5'>
      <h3 className='mb-3'>User List</h3>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <td>#</td>
            <td>Username</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <a className='me-2' href='#' onClick={(e) => changePermission(e, user.username)}>Change Permission</a>
                <a className='me-2' href='#' onClick={(e) => changePassword(e, user.username)}>Change Password</a>
                <a className='' href='#' onClick={(e) => revokeToken(e, user.username)}>Revoke Token</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
