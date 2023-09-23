// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import Error from '../common/error';
// import API from '../common/api';

// function Delete() {
//   const navigate = useNavigate();
//   const [error, setError] = useState('');
//   const id = useParams();

//   const delBooks = async () => {
//     try {
//       await API.delete(`books/${id.id}`);

//       navigate('/books', { replace: true });
//     } catch (err) {
//       if (err.response && err.response.status === 404) {
//         setError('Book Not Found');
//       } else if (err.response.status === 500) {
//         setError('Internal server error, please try again later');
//       }
//     }
//   };

//   useEffect(() => {
//     delBooks();
//   }, []);

//   if (error) {
//     return <Error msg={error} />;
//   }
// }

// export default Delete;
