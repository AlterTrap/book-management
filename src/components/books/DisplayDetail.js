import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../common/Layout';

function DisplayDetail(props) {
  const navigate = useNavigate();
  const { state, delBooks } = props;

  const handleUpdateClick = (bookId) => {
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
    <Layout>
      <Fragment>
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
          <button type='submit' onClick={() => navigate('/books')}>
            Back
          </button>
        </form>
      </Fragment>
    </Layout>
  );
}

export default DisplayDetail;
