import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../common/Layout';

function CreateBook(props) {
  const navigate = useNavigate();
  const { error, createBook, handleInputChange, validationErrors } = props;

  return (
    <Layout>
      <Fragment>
        <h1>Add Book</h1>
        {error && <span>{error}</span>}
        <form onSubmit={(e) => createBook(e)}>
          <div>
            <label>Name:</label>
            <input
              type='text'
              name='name'
              onChange={(e) => handleInputChange(e)}
            />
            {validationErrors.name && (
              <span className='error'>{validationErrors.name}</span>
            )}
          </div>
          <div>
            <label>category:</label>
            <input
              type='category'
              name='category'
              onChange={(e) => handleInputChange(e)}
            />
            {validationErrors.category && (
              <span className='error'>{validationErrors.category}</span>
            )}
          </div>
          <button type='submit'>Submit</button>
          <button type='submit' onClick={() => navigate('/books')}>
            Back
          </button>
        </form>
      </Fragment>
    </Layout>
  );
}

export default CreateBook;
