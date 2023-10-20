import { useEffect, useState } from 'react';
import { useContext } from 'react';
import axios from '../components/common/Api';
// import { useNavigate } from 'react-router-dom';

const { createContext } = require('react');

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await axios.post('/check-auth');

      console.log('res', res);

      if (res.data.user) {
        setUser(res.data.user);
      } else {
        setUser(null);
        // navigate('/login');
      }
    } catch (e) {
      console.log('error', e);
      setUser(null);
    }
  };

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
