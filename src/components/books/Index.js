import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import List from '../common/list';
import Error from '../common/error';
import API from '../common/api';

function Index() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const category = searchParams.get('category');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  // get data from server (side effect codes)
  useEffect(() => {
    const getBooks = async () => {
      const params = {};

      if (name && name.trim('')) params.name = name;

      if (category && category.trim('')) params.category = category;

      try {
        const res = await API.get('books', { params: params });

        setList(res.data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError('Book Not Found');
        } else if (err.response.status === 500) {
          setError('Internal server error, please try again later');
        }
      }
    };

    getBooks();
  }, []);

  if (error) {
    return <Error msg={error} />;
  } else {
    return <List list={list} />;
  }
}

export default Index;
