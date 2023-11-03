import React, { Fragment } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';

function DisplayRegister(props) {
  const navigate = useNavigate();
  const { error, register, handleInputChange, valCheck } = props;
  const { user } = useAuth();

  const handleSubmit = (e) => {
    register(e);
  };

  const handleInput = (e) => {
    handleInputChange(e);
  };

  const handleBack = (e) => {
    navigate('/login');
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
        <h1>Register</h1>
        {error && <span>{error}</span>}
        {valCheck.undefined && (
          <span className='error'>{valCheck.undefined}</span>
        )}
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
          <div>
            <label>Password confirm:</label>
            <input
              type='password'
              name='passwordCfm'
              onChange={(e) => handleInput(e)}
            />
            {valCheck.passwordCfm && (
              <span className='error'>{valCheck.passwordCfm}</span>
            )}
          </div>
          <button type='submit'>Register</button>
          <button type='submit' onClick={(e) => handleBack(e)}>
            Back
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default DisplayRegister;
