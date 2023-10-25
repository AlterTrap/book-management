import { useState } from 'react';
import axios from '../common/Api';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useAuth } from '../../providers/AuthProvider';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCfm, setPasswordCfm] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const register = async () => {
    try {
      const res = await axios.post('/register', {
        username,
        passwordCfm,
        password,
      });

      const token = res.data.token;

      localStorage.setItem('jwtToken', token);

      const decodedToken = jwtDecode(token);
      setUser({
        id: decodedToken.id,
        username: decodedToken.username,
      });

      navigate('/books');
    } catch (e) {
      console.log('error', e);
      const errors = e.response.data;

      const msg = typeof errors === 'string' ? errors : errors[0];
      alert(msg);
    }
  };

  return (
    <>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='passwordCfm'>Password Confirm</label>
        <input
          type='password'
          id='passwordCfm'
          placeholder='password confirm'
          value={passwordCfm}
          onChange={(e) => setPasswordCfm(e.target.value)}
        />
      </div>
      <div>
        <button onClick={register}>Register</button>
      </div>
    </>
  );
}

export default Register;
