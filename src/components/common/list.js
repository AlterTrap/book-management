import React, { Fragment } from 'react';
import { format } from 'date-fns';

function List(props) {
  const { list } = props;
  return (
    <Fragment>
      <table border='1'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {list.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.category}</td>
              <td>{format(new Date(book.createdAt), 'MM/dd/yyyy')}</td>
              <td>{format(new Date(book.updatedAt), 'MM/dd/yyyy')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default List;
