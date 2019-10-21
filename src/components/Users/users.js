/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './users.module.scss';
import userPhoto from '../../assets/images/user.jpg';

const User = props => {
  return (
    <div className={classes.user}>
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <NavLink to={`/profile/${props.user.id}`}>
            <img
              className={classes.profilePhoto}
              src={props.user.photos.small || userPhoto}
              alt="userPhoto"
            />
          </NavLink>
        </div>
        <div className="col-md-7 col-sm-7">
          <h5>{props.user.name}</h5>
          <p>{props.user.status}</p>
        </div>
        <div className="col-md-3 col-sm-3">
          {props.user.followed ? (
            <button
              disabled={props.isFetching.some(id => id === props.user.id)}
              className="btn btn-primary pull-right"
              onClick={() => {
                props.unfollowUser(props.user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.isFetching.some(id => id === props.user.id)}
              className="btn btn-primary pull-right"
              onClick={() => {
                props.followUser(props.user.id);
              }}
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

  const renderUsers = props.users.map(u => (
    <User key={u.id} user={u} {...props} />
  ));

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
                href="#"
                className={`page-link ${page === props.currentPage &&
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

  return (
    <div className="container">
      {pagination}
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">{renderUsers}</div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Users;
