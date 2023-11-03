import React, { Fragment } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';

function DisplayLogin(props) {
  const navigate = useNavigate();
  const { error, login, handleInputChange, valCheck } = props;
  const { user } = useAuth();

  const handleSubmit = (e) => {
    login(e);
  };

  const handleInput = (e) => {
    handleInputChange(e);
  };

  const handlRegister = (e) => {
    navigate('/register');
  };

  return user ? (
    <Navigate to='/books' replace={true} />
  ) : (
    <Fragment>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <h1>Login</h1>
        {error && <span>{error}</span>}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Username:</label>
            <input
              type='text'
              name='username'
              onChange={(e) => handleInput(e)}
            />
            {valCheck.username && (
              <span className='error'>{valCheck.username}</span>
            )}
          </div>
          <div>
            <label>Password:</label>
            <input
              type='password'
              name='password'
              onChange={(e) => handleInput(e)}
            />
            {valCheck.password && (
              <span className='error'>{valCheck.password}</span>
            )}
          </div>
          <button type='submit'>Login</button>
          <button type='submit' onClick={(e) => handlRegister(e)}>
            Register
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default DisplayLogin;
