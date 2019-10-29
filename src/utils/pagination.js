/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './pagination.module.scss';

const Pagination = ({
  totalCount,
  pageSize,
  onSetCurrentPage,
  currentPage
}) => {
  const pages = Math.ceil(totalCount / pageSize);
  let pagesCount = [];
  for (let i = 1; i <= pages; i++) {
    pagesCount.push(i);
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pagesCount.map(page => {
          return (
            <li
              key={page}
              className="page-item"
              onClick={() => onSetCurrentPage(page)}
            >
              <a
                href="#"
                className={`page-link ${page === currentPage &&
                  classes.paginationActive}`}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
