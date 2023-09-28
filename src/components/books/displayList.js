import React, { Fragment } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

function List(props) {
  const navigate = useNavigate();
  const { list } = props;

  const handleRowClick = (bookId) => {
    // Navigate to the details page or any other route you want
    navigate(`/books/${bookId}`);
  };

  const handleCreateClick = () => {
    // Navigate to the details page or any other route you want
    navigate(`/books/create`);
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
        <button
          onClick={() => handleCreateClick()}
          style={{
            alignSelf: 'flex-start',
            marginBottom: '10px',
            marginLeft: '500px', // Thêm marginLeft để đẩy nút ra sát góc trái của bảng
          }}
        >
          Add Book
        </button>
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
