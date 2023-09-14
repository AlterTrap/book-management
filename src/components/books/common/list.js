import React, { Fragment } from 'react';
import { format } from 'date-fns';

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
            {format(new Date(book.updatedAt), 'MM/dd/yyyy')}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default List;
