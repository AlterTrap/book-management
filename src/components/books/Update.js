import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../common/Error';
import API from '../common/Api';
import UpdateBook from './DisplayUpdate';

function Update() {
  const [state, setState] = useState({
    id: '',
    name: '',
    category: '',
  });
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState('');
  const [serverError, setServerError] = useState('');
  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getDataBooks = async () => {
      const params = {};

      if (!isNaN(id.id)) {
        params.id = id.id;
      }

      try {
        const res = await API.get('books', { params: params });

        setState({
          name: res.data[0].name,
          category: res.data[0].category,
        });
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError('Book Not Found');
        } else if (err.response.status === 500) {
          setError('Internal server error, please try again later');
        }
      }
    };

    getDataBooks();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name (required)
    if (!state.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Validate email (required and valid format)
    if (!state.category.trim()) {
      newErrors.category = 'Category is required';
    }

    setValidationErrors(newErrors);

    // Check if there are any validation errors
    return Object.keys(newErrors).length === 0;
  };

  const resetErrors = () => {
    setError('');
    setValidationErrors('');
  };

  const updateBook = async (e) => {
    e.preventDefault();
    resetErrors();

    const data = {
      name: state.name,
      category: state.category,
    };

    if (!validateForm()) {
      return; // Don't proceed with the request if there are validation errors
    }

    try {
      const updatedId = id.id;
      await API.patch(`books/${updatedId}`, data);

      navigate('/books');
    } catch (err) {
      if (err.response.status === 500) {
        setServerError('Internal server error, please try again later');
      } else if (err.response.status === 409) {
        setError(err.response.data);
      }
    }
  };

  if (serverError) {
    <Error msg={serverError} />;
  } else {
    return (
      <UpdateBook
        updateBook={updateBook}
        error={error}
        handleInputChange={handleInputChange}
        validationErrors={validationErrors}
        state={state}
      />
    );
  }
}

export default Update;
