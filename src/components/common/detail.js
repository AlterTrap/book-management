import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

function DetailBook(props) {
  const navigate = useNavigate();
  const { state } = props;

  const handleUpdateClick = (bookId) => {
    // Navigate to the details page or any other route you want
    navigate(`/books/update/${bookId}`);
  };

  const handleDeleteClick = (bookId) => {
    // Navigate to the details page or any other route you want
    navigate(`/books/delete/${bookId}`);
  };

  return (
    <Fragment>
      <div>
        <h1>Book</h1>
        <form>
          <div>
            <label>Name:</label>
            <input type='text' name='name' value={state.name} disabled />
          </div>
          <div>
            <label>Category:</label>
            <input
              type='text'
              name='category'
              value={state.category}
              disabled
            />
          </div>
          <button type='submit' onClick={() => handleUpdateClick(state.id)}>
            Update
          </button>
          <button type='submit' onClick={() => handleDeleteClick(state.id)}>
            Delete
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default DetailBook;
