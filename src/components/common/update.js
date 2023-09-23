import React, { Fragment } from 'react';

function UpdateBook(props) {
  console.log(props);
  const { error, updateBook, handleInputChange, valCheck, state } = props;

  const handleSubmit = (e) => {
    updateBook(e);
  };

  const handleInput = (e) => {
    handleInputChange(e);
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
        <h1>Update Book</h1>
        {error && <span>{error}</span>}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Name:</label>
            <input
              type='text'
              name='name'
              value={state.name}
              onChange={(e) => handleInput(e)}
            />
            {valCheck.name && <span className='error'>{valCheck.name}</span>}
          </div>
          <div>
            <label>category:</label>
            <input
              type='category'
              name='category'
              value={state.category}
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

export default UpdateBook;
