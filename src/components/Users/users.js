import React from 'react';
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
            src={props.user.photoAvatar || userPhoto}
            alt="avatar"
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
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => props.setUsers(response.data.items));
  }
  return (
    <div className={classes.users}>
      {props.users.map(user => (
        <User
          key={user.id}
          user={user}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
};
export default Users;
