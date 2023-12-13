import React from 'react';

function Pagination({
  currentPage,
  totalPages,
  handlePrev,
  handleNext,
  handlePageClick,
}) {
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
    <div>
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Prev
      </button>
      <span>{renderPageNumbers()}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
