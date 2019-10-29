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
  ...props
}) => {
  return (
    <div className="container">
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        onSetCurrentPage={onSetCurrentPage}
        currentPage={currentPage}
      />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          {users.map(u => (
            <User key={u.id} user={u} {...props} />
          ))}
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Users;
