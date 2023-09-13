import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../common/Table';

function Index() {
  const [list, setList] = useState([]);

  // get data from server (side effect codes)
  useEffect(() => {
    const getExamples = async () => {
      const res = await axios.get('http://localhost:3000/api/examples');

      if (!res) {
        setList([]);
        return;
      }

      setList(res.data);
    };

    getExamples();
  }, []);

  return <div>{/* <Table list={list} /> */}</div>;
}

export default Index;
