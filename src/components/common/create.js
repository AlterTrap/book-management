import React, { Fragment } from 'react';

function CreateBook(props) {
  const { error, createBook, handleInputChange, valCheck } = props;

  const handleSubmit = (e) => {
    createBook(e);
  };

  const handleInput = (e) => {
    handleInputChange(e);
  };

  return (
    <Fragment>
      <div>
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
        </form>
      </div>
    </Fragment>
  );
}

export default CreateBook;
