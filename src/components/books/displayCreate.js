import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateBook(props) {
  const navigate = useNavigate();
  const { error, createBook, handleInputChange, valCheck } = props;

  const handleSubmit = (e) => {
    createBook(e);
  };

  const handleInput = (e) => {
    handleInputChange(e);
  };

  const handleBack = (e) => {
    navigate('/books');
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
        <h1>Add Book</h1>
        {error && <span>{error}</span>}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Name:</label>
            <input type='text' name='name' onChange={(e) => handleInput(e)} />
            {valCheck.name && <span className='error'>{valCheck.name}</span>}
          </div>
          <div>
            <label>category:</label>
            <input
              type='category'
              name='category'
              onChange={(e) => handleInput(e)}
            />
            {valCheck.category && (
              <span className='error'>{valCheck.category}</span>
            )}
          </div>
          <button type='submit'>Submit</button>
          <button type='submit' onClick={(e) => handleBack(e)}>
            Back
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default CreateBook;
