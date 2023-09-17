import React, { Fragment } from 'react';

function Error(props) {
  console.log(props);
  const error = props.msg;
  return <Fragment>{<p>{error}</p>}</Fragment>;
}

export default Error;
