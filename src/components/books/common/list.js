import React, { Fragment } from 'react';

function List(props) {
  const { list } = props;
  return (
    <Fragment>
      {list.length === 0 ? <p>No book found</p> : null}
      <ul>
        {list.map((book, index) => (
          <li key={index}>
            {book.id}
            {book.name}
            {book.category}
            {book.createAt}
            {book.updatedAt}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default List;
