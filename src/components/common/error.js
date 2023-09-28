import React, { Fragment } from 'react';

function Error(props) {
  const error = props.msg;
  return (
    <Fragment>
      {
        <p>
          {error ? (
            error
          ) : (
            <div>
              <h1>404 - Not Found</h1>
              <p>The page you are looking for does not exist.</p>
            </div>
          )}
        </p>
      }
    </Fragment>
  );
}

export default Error;
