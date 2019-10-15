import React, { Component } from 'react';
import classes from './users.module.scss';
import * as axios from 'axios';
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

class Users extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCountPages(response.data.totalCount);
      });
  }

  onSetCurrentPage = page => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCountPages(response.data.totalCount);
      });
  };

  render() {
    const pages = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pagesCount = [];

    for (let i = 1; i <= pages; i++) {
      pagesCount.push(i);
    }

    return (
      <div className={classes.users}>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {pagesCount.map(page => {
              return (
                <li
                  key={page}
                  className="page-item"
                  onClick={() => this.onSetCurrentPage(page)}
                >
                  <a
                    className={`page-link ${page === this.props.currentPage &&
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
        {this.props.users.map(user => (
          <User
            key={user.id}
            user={user}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
          />
        ))}{' '}
      </div>
    );
  }
}

export default Users;
