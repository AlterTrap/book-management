import React, { Fragment } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

function DisplayRegister(props) {
  const navigate = useNavigate();
  const { error, register, handleInputChange, validationErrors, user } = props;

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
        <h1>Register</h1>
        {error && <span>{error}</span>}
        {validationErrors.undefined && (
          <span className='error'>{validationErrors.undefined}</span>
        )}
        <form onSubmit={(e) => register(e)}>
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
          <div>
            <label>Password confirm:</label>
            <input
              type='password'
              name='passwordCfm'
              onChange={(e) => handleInputChange(e)}
            />
            {validationErrors.passwordCfm && (
              <span className='error'>{validationErrors.passwordCfm}</span>
            )}
          </div>
          <button type='submit'>Register</button>
          <button type='submit' onClick={() => navigate('/login')}>
            Back
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default DisplayRegister;
