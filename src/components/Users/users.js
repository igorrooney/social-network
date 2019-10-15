/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './users.module.scss';
import userPhoto from '../../assets/images/user.jpg';

const User = props => {
  return (
    <div className={classes.user}>
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <img
            className={classes.profilePhoto}
            src={props.user.photos.small || userPhoto}
            alt="userPhoto"
          />
        </div>
        <div className="col-md-7 col-sm-7">
          <h5>{props.user.name}</h5>
          <p>{props.user.status}</p>
        </div>
        <div className="col-md-3 col-sm-3">
          {props.user.followed ? (
            <button
              className="btn btn-primary pull-right"
              onClick={() => props.unfollow(props.user.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              className="btn btn-primary pull-right"
              onClick={() => props.follow(props.user.id)}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Users = props => {
  const pages = Math.ceil(props.totalCount / props.pageSize);
  let pagesCount = [];

  for (let i = 1; i <= pages; i++) {
    pagesCount.push(i);
  }

  let renderUsers = props.users.map(user => {
    return (
      <User
        key={user.id}
        user={user}
        unfollow={props.unfollow}
        follow={props.follow}
      />
    );
  });

  const pagination = (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pagesCount.map(page => {
          return (
            <li
              key={page}
              className="page-item"
              onClick={() => props.onSetCurrentPage(page)}
            >
              <a
                className={`page-link ${page === props.currentPage &&
                  classes.paginationActive}`}
                href="#"
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <div>
      {pagination}
      {renderUsers}
    </div>
  );
};

export default Users;
