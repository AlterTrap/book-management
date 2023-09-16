import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import List from '../books/common/list';
import Error from '../books/common/error';
import API from '../../api';

function Index() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const category = searchParams.get('category');
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

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
          setError(<Error />);
        }
      }
    };

    getBooks();
  }, []);

  if (error) {
    return error;
  } else {
    return <List list={list} />;
  }
}

export default Index;
