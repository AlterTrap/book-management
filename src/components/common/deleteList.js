import React, { Fragment } from 'react';
import { format } from 'date-fns';

function DeleteList(props) {
  const { list, delBooks } = props;

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this item?'
    );
    if (confirmDelete) {
      // Call the delBooks function passed from props
      delBooks(id);
    }
  };

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
            <th></th>
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
              <td>
                <button type='submit' onClick={() => handleDelete(book.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default DeleteList;
