import React, { useEffect, useState } from 'react';
import authAxios from '../authAxios';
import UserList from '../components/UserList';

const Dashboard = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    authAxios.get('/users').then(response => setUsers(response.data.users));
  }, []);

  return (
    <>
      <UserList users={users} />
    </>
  );
};

export default Dashboard;
