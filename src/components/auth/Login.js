import { useState } from 'react';
import axios from '../common/Api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      await axios.post('/login', {
        username,
        password,
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
        <button onClick={login}>Login</button>
      </div>
    </>
  );
}

export default Login;
