import React, { useEffect, useState } from 'react';
import Error from '../common/error';
import API from '../common/api';
import DeleteList from '../common/deleteList';

function Delete() {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

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

  const delBooks = async (id) => {
    try {
      await API.delete(`books/${id}`);

      getBooks();
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Book Not Found');
      } else if (err.response.status === 500) {
        setError('Internal server error, please try again later');
      }
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  if (error) {
    return <Error msg={error} />;
  } else {
    return <DeleteList list={list} delBooks={delBooks} />;
  }
}

export default Delete;
