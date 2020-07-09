/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import classes from './pagination.module.scss';
// Connect
import { useUsersConnect } from 'modules/users/users.connect'

const Pagination = () => {
  const {
    totalCount,
    pageSize,
    currentPage,
    portionSize = 10,
    portion,
    // Actions
    setPortion,
    requestUsers,
  } = useUsersConnect()

  const [portionNumber, setPortionNumber] = useState(portion)

  const pages = Math.ceil(totalCount / pageSize)
  let pagesCount = []
  for (let i = 1; i <= pages; i++) {
    pagesCount.push(i)
  }
  const portionCount = Math.ceil(pages / portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  return (
    <nav aria-label="Page navigation">
      <ul className={classes.pagination}>
        <li 
          className={'page-item ' + (portionNumber <= 1 && 'disabled')}
        >
          <button
            className="page-link"
            href="#"
            tabIndex="-1"
            onClick={() => {
              setPortion(portionNumber - 1)
              setPortionNumber(portionNumber - 1)
            }}
          >
            Previous
          </button>
        </li>
        {pagesCount.filter(page => (
          page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )).map(page => {
            return (
              <li
                key={page}
                className="page-item"
                onClick={() => requestUsers(page, pageSize)}
              >
                <a
                  href="#"
                  className={`page-link ${page === currentPage &&
                    classes.paginationActive}`}
                >
                  {page}
                </a>
              </li>
            )
          })}
        <li
          className={
            'page-item ' + (portionCount <= portionNumber && 'disabled')
          }
        >
          <button
            className="page-link"
            href="#"
            onClick={() => {
              setPortion(portionNumber + 1)
              setPortionNumber(portionNumber + 1)
            }}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
