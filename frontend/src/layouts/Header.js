import React, { useContext } from 'react';
import authAxios from '../authAxios';
import { MyContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();

    authAxios.post('/logout');
    localStorage.removeItem('jwt');

    setUser(null);
  };

  const resetPassword = (e) => {
    e.preventDefault();
    navigate(`/${user}/change-password`);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Test Project</a>
        
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {user} &nbsp;
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#" onClick={resetPassword}>Reset Password</a></li>
            <li><a className="dropdown-item" href="#" onClick={logout}>Log Out</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
