/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Pagination from '../../utils/pagination';
import User from './user';

const Users = ({
  totalCount,
  pageSize,
  onSetCurrentPage,
  currentPage,
  users,
  portion,
  setCurrentPage,
  setPortion,
  ...props
}) => {
  return (
    <div className="container">
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        onSetCurrentPage={onSetCurrentPage}
        currentPage={currentPage}
        portion={portion}
        setCurrentPage={setCurrentPage}
        setPortion={setPortion}
      />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          {users.map(u => (
            <User key={u.id} user={u} {...props} />
          ))}
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Users;
