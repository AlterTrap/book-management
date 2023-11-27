import React from 'react';
import { useAuth } from '../provider/AuthProvider';

const Layout = ({ children }) => {
  const { setUser } = useAuth();
  const handleLogout = async () => {
    await localStorage.removeItem('jwtToken');
    setUser(null);
  };

  return (
    <div>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '40%',
            marginBottom: '10px',
          }}
        >
          <button type='button' onClick={handleLogout}>
            Logout
          </button>
        </div>
        {children}
      </main>
    </div>
  );
};

export default Layout;
