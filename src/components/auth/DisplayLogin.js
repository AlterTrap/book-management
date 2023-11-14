import React, { Fragment } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

function DisplayLogin(props) {
  const navigate = useNavigate();
  const { error, login, handleInputChange, validationErrors, user } = props;

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
        <form onSubmit={(e) => login(e)}>
          <div>
            <label>Username:</label>
            <input
              type='text'
              name='username'
              onChange={(e) => handleInputChange(e)}
            />
            {validationErrors.username && (
              <span className='error'>{validationErrors.username}</span>
            )}
          </div>
          <div>
            <label>Password:</label>
            <input
              type='password'
              name='password'
              onChange={(e) => handleInputChange(e)}
            />
            {validationErrors.password && (
              <span className='error'>{validationErrors.password}</span>
            )}
          </div>
          <button type='submit'>Login</button>
          <button type='submit' onClick={(e) => navigate('/register')}>
            Register
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default DisplayLogin;
