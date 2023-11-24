import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../common/Layout';

function UpdateBook(props) {
  const navigate = useNavigate();
  const { error, updateBook, handleInputChange, validationErrors, state } =
    props;

  return (
    <Layout>
      <h1>Update Book</h1>
      {error && <span>{error}</span>}
      <form onSubmit={(e) => updateBook(e)}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={state.name}
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
            value={state.category}
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
    </Layout>
  );
}

export default UpdateBook;
