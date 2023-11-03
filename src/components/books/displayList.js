import React, { Fragment } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

function List(props) {
  const navigate = useNavigate();
  const { list } = props;

  const handleRowClick = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  const handleCreateClick = () => {
    navigate(`/books/create`);
  };

  const handleLogoutClick = async () => {
    await localStorage.removeItem('jwtToken');
    navigate(`/login`);
  };

  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between', // This will push buttons to the sides
            width: '40%',
            marginBottom: '10px',
          }}
        >
          <button onClick={() => handleCreateClick()}>Add Book</button>
          <button onClick={() => handleLogoutClick()}>Log Out</button>
        </div>
        <table
          border='1'
          style={{
            alignSelf: 'center',
          }}
        >
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
              <tr key={book.id} onClick={() => handleRowClick(book.id)}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.category}</td>
                <td>{format(new Date(book.createdAt), 'MM/dd/yyyy')}</td>
                <td>{format(new Date(book.updatedAt), 'MM/dd/yyyy')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default List;
