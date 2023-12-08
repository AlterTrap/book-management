import React, { useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import Layout from '../common/Layout';

function List(props) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { list, getBooks, totalPages } = props;

  const handleRowClick = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getBooks(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      getBooks(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    getBooks(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          style={{
            cursor: 'pointer',
            margin: '5px',
            textDecoration: currentPage === i ? 'underline' : 'none',
          }}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '40%',
          marginBottom: '10px',
        }}
      >
        <button onClick={() => navigate(`/books/create`)}>Add Book</button>
      </div>
      <table
        border='1'
        style={{
          alignSelf: 'center',
        }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {list.map((book) => (
            <tr key={book.id} onClick={() => handleRowClick(book.id)}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.category}</td>
              <td>{format(new Date(book.createdAt), 'MM/dd/yyyy')}</td>
              <td>{format(new Date(book.updatedAt), 'MM/dd/yyyy')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span>{renderPageNumbers()}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </Layout>
  );
}

export default List;
