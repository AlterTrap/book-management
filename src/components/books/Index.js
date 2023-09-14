import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import List from '../books/common/list';
import API from '../books/common/api';

function Index() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const category = searchParams.get('category');
  const [list, setList] = useState([]);

  // get data from server (side effect codes)
  useEffect(() => {
    const getBooks = async () => {
      let res = {};
      if (!name && !category) {
        res = await API.get('books', {});
      } else {
        const params = {};

        if (name && name.trim('')) params.name = name;

        if (category && category.trim('')) params.category = category;

        try {
          res = await API.get('books', { params: params });
        } catch (err) {
          res = null;
        }
      }

      if (!res) {
        setList([]);
        return;
      }

      setList(res.data);
    };

    getBooks();
  }, []);

  return <List list={list} />;
}

export default Index;
