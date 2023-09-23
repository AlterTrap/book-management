import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../common/error';
import API from '../common/api';
import Detail from '../common/detail';

function DetailBook() {
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
          id: res.data[0].id,
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

  if (error) {
    return <Error msg={error} />;
  } else {
    return <Detail state={state} />;
  }
}

export default DetailBook;
