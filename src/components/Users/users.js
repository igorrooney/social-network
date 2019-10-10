import React from 'react';
import classes from './users.module.scss';

const User = props => {
  return (
    <div className={classes.user}>
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <img
            className={classes.profilePhoto}
            src={props.user.photoAvatar}
            alt="avatar"
          />
        </div>
        <div className="col-md-7 col-sm-7">
          <h5>{props.user.fullName}</h5>
          <p>{props.user.currentJob}</p>
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
  debugger;
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoAvatar:
          'http://mythemestore.com/friend-finder/images/users/user-15.jpg',
        fullName: 'Sophia Page',
        currentJob: 'Software Engineer',
        followed: true,
        location: {
          city: 'Kyiv',
          country: 'Ukraine'
        }
      },
      {
        id: 2,
        photoAvatar:
          'http://mythemestore.com/friend-finder/images/users/user-16.jpg',
        fullName: 'Emma Johnson',
        currentJob: 'Model at Fashion',
        followed: false,
        location: {
          city: 'Kharkiv',
          country: 'Ukraine'
        }
      },
      {
        id: 3,
        photoAvatar:
          'http://mythemestore.com/friend-finder/images/users/user-17.jpg',
        fullName: 'Nora Wilson',
        currentJob: 'Writer at Newspaper',
        followed: true,
        location: {
          city: 'Lviv',
          country: 'Ukraine'
        }
      }
    ]);
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
