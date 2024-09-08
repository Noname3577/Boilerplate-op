/* eslint-disable react-dom/no-missing-button-type */
import './Pagination.css';

import React from 'react';

// @ts-ignore
function Pagination({ currentPage, pageCount, setCurrentPage }) {
  return (
    <div className="pagination">
      {[...Array(pageCount)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={currentPage === index + 1 ? 'active' : 'btn_op'}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
