import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useAuth } from '../provider/AuthProvider';
import jwtDecode from 'jwt-decode';
import DisplayRegister from './DisplayRegister';
import Error from '../common/Error';
import API from '../common/Api';

const registerValidation = z
  .object({
    username: z
      .string({ required_error: 'Username required' })
      .min(6, { message: 'Username not enough 6 letters' })
      .regex(/^[a-zA-Z0-9_-]+$/, { message: 'Username is invalid' }),
    password: z
      .string({ required_error: 'Password required' })
      .min(6, { message: 'Password not enough 6 letters' })
      .regex(/^[a-zA-Z0-9_-]+$/, { message: 'password is invalid' })
      .regex(new RegExp('.*[A-Z].*'), {
        message: 'Password require 1 upscale letter',
      }),
    passwordCfm: z
      .string({ required_error: 'Password confirm required' })
      .min(6, { message: 'Password confirm not enough 6 letters' })
      .regex(/^[a-zA-Z0-9_-]+$/, { message: 'password confirm is invalid' })
      .regex(new RegExp('.*[A-Z].*'), {
        message: 'Password confirm require 1 upscale letter',
      }),
  })
  .refine((data) => data.password === data.passwordCfm, {
    message: 'Password and Password Confirm do not match',
  });

const Register = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    passwordCfm: '',
  });
  const [error, setError] = useState('');
  const [serverErr, setServerErr] = useState('');
  const [valCheck, setValCheck] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

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
        setValCheck({});
      } else if (err instanceof z.ZodError) {
        const errors = {};
        err.errors.map((validationError) => {
          errors[validationError.path[0]] = validationError.message;
          return null;
        });
        setValCheck(errors);
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
        valCheck={valCheck}
        state={state}
      />
    );
  }
};

export default Register;
