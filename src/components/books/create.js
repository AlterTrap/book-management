import React, { useState } from 'react';
import Error from '../common/error';
import API from '../common/api';
import List from '../common/list';
import CreateBook from '../common/create';

function Create() {
  const [state, setState] = useState({
    name: '',
    category: '',
  });
  const [error, setError] = useState('');
  const [list, setList] = useState([]);
  const [valCheck, setValCheck] = useState('');

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

  // get data from server (side effect codes)
  const getBooks = async () => {
    try {
      const res = await API.get('books');

      setList(res.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Book Not Found');
      } else if (err.response.status === 500) {
        setError('Internal server error, please try again later');
      }
    }
  };

  const createBook = async (e) => {
    e.preventDefault();

    const data = {
      name: state.name,
      category: state.category,
    };

    if (!validateForm()) {
      return; // Don't proceed with the request if there are validation errors
    }

    try {
      await API.post(`books/`, data);

      getBooks();
    } catch (err) {
      if (err.response.status === 500) {
        return <Error msg={'Internal server error, please try again later'} />;
      } else if (err.response.status === 409) {
        setError(err.response.data);
      }
    }
  };

  if (list.length !== 0) {
    return <List list={list} />;
  } else {
    return (
      <CreateBook
        createBook={createBook}
        error={error}
        handleInputChange={handleInputChange}
        valCheck={valCheck}
      />
    );
  }
}

export default Create;
