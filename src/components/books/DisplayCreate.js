import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutLayout from '../common/LogoutLayout';

function CreateBook(props) {
  const navigate = useNavigate();
  const { error, createBook, handleInputChange, validationErrors } = props;

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
          <LogoutLayout />
        </form>
      </div>
    </Fragment>
  );
}

export default CreateBook;
