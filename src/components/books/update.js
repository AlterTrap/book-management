import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../common/error';
import API from '../common/api';
import UpdateBook from '../common/update';

function Update() {
  const [state, setState] = useState({
    name: '',
    category: '',
  });
  const [error, setError] = useState('');
  const [valCheck, setValCheck] = useState('');
  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getDataBooks = async () => {
      const params = {};

      if (!isNaN(id)) {
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

    setValCheck(newErrors);

    // Check if there are any validation errors
    return Object.keys(newErrors).length === 0;
  };

  const updateBook = async (e) => {
    e.preventDefault();

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
        return <Error msg={'Internal server error, please try again later'} />;
      } else if (err.response.status === 409) {
        setError(err.response.data);
      }
    }
  };

  return (
    <UpdateBook
      updateBook={updateBook}
      error={error}
      handleInputChange={handleInputChange}
      valCheck={valCheck}
      state={state}
    />
  );
}

export default Update;
