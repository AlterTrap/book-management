import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

function DisplayDetail(props) {
  const navigate = useNavigate();
  const { state, delBooks } = props;

  const handleUpdateClick = (bookId) => {
    // Navigate to the details page or any other route you want
    navigate(`/books/update/${bookId}`);
  };

  const handleDeleteClick = async (e, bookId) => {
    e.preventDefault();
    const userConfirmed = window.confirm(
      'Are you sure you want to delete this item?'
    );

    if (userConfirmed) {
      delBooks(bookId);
    } else {
      navigate(`/books/${bookId}`);
    }
  };

  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <h1>Book</h1>
        <form>
          <div>
            <label>Name: </label>
            <span>{state.name}</span>
          </div>
          <div>
            <label>Category: </label>
            <span>{state.category}</span>
          </div>
          <button type='submit' onClick={() => handleUpdateClick(state.id)}>
            Update
          </button>
          <button type='submit' onClick={(e) => handleDeleteClick(e, state.id)}>
            Delete
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default DisplayDetail;
