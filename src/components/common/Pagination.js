import React from 'react';

function Pagination({
  currentPage,
  totalPages,
  handlePrev,
  handleNext,
  handlePageClick,
}) {
  return (
    <div>
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Prev
      </button>
      <span>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <span
            key={pageNumber + 1}
            style={{
              cursor: 'pointer',
              margin: '5px',
              textDecoration:
                currentPage === pageNumber + 1 ? 'underline' : 'none',
            }}
            onClick={() => handlePageClick(pageNumber + 1)}
          >
            {pageNumber + 1}
          </span>
        ))}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
