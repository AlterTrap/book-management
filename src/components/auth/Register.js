import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useAuth } from '../provider/AuthProvider';
import jwtDecode from 'jwt-decode';
import DisplayRegister from './DisplayRegister';
import Error from '../common/Error';
import API from '../common/Api';
import { registerValidation } from '../../util/validation';

const Register = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    passwordCfm: '',
  });
  const [error, setError] = useState('');
  const [serverErr, setServerErr] = useState('');
  const [validationErrors, setValidationErrors] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const resetErrors = () => {
    setError('');
    setValidationErrors('');
  };

  const register = async (e) => {
    e.preventDefault();
    resetErrors();

    const data = {
      username: state.username,
      password: state.password,
      passwordCfm: state.passwordCfm,
    };

    try {
      registerValidation.parse(state);

      const response = await API.post('/register', data);

      const { token } = response.data;

      localStorage.setItem('jwtToken', token);

      const decodedToken = jwtDecode(token);
      setUser({
        id: decodedToken.id,
        username: decodedToken.username,
      });

      navigate('/books');
    } catch (err) {
      if (err.response && err.response.status === 500) {
        setServerErr('Internal server error, please try again later');
      } else if (err.response && err.response.status === 409) {
        setError(err.response.data);
        setValidationErrors({});
      } else if (err instanceof z.ZodError) {
        const errors = {};
        err.errors.map((validationError) => {
          errors[validationError.path[0]] = validationError.message;
          return null;
        });
        setValidationErrors(errors);
      }
    }
  };

  if (serverErr) {
    <Error msg={serverErr} />;
  } else {
    return (
      <DisplayRegister
        register={register}
        error={error}
        handleInputChange={handleInputChange}
        validationErrors={validationErrors}
        state={state}
        user={user}
      />
    );
  }
};

export default Register;
