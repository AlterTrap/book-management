import React, { useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import Layout from '../common/Layout';
import Pagination from '../common/Pagination';

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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handlePageClick={handlePageClick}
      />
    </Layout>
  );
}

export default List;
