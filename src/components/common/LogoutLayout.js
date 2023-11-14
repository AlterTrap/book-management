import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';

function LogoutLayout() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setUser(null);
    navigate('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutLayout;
