import { useEffect, useState, createContext } from 'react';
import { useContext } from 'react';
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    if (token) {
      // User is logged in
      const decodedToken = jwtDecode(token);
      setUser({
        id: decodedToken.id,
        username: decodedToken.username,
      });
    } else {
      // User is not logged in
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
