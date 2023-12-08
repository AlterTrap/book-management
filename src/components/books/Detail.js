import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../common/Error';
import API from '../common/Api';
import DisplayDetail from './DisplayDetail';

function DetailBook() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    id: '',
    name: '',
    category: '',
  });
  const [error, setError] = useState('');
  const { id } = useParams();

  // get data from server (side effect codes)
  useEffect(() => {
    const getDataBooks = async () => {
      const params = {};

      if (!isNaN(id)) {
        params.id = id;
      } else {
        return setError('Bad Request');
      }

      try {
        const res = await API.get('books', { params: params });

        setState({
          id: res.data.list[0].id,
          name: res.data.list[0].name,
          category: res.data.list[0].category,
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

  const delBooks = async (bookId) => {
    try {
      await API.delete(`books/${bookId}`);

      navigate('/books', { replace: true });
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Book Not Found');
      } else if (err.response.status === 500) {
        setError('Internal server error, please try again later');
      }
    }
  };

  if (error) {
    return <Error msg={error} />;
  } else {
    return <DisplayDetail state={state} delBooks={delBooks} />;
  }
}

export default DetailBook;
