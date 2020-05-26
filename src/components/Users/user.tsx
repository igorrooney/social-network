import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './users.module.scss'
import userPhoto from '../../assets/images/user.jpg'
import { UserType } from '../../types/types'

type Props = {
  user: UserType
  isFetching: boolean
  unfollowUser: (id: number) => void
  followUser: (id: number) => void
  followingInProgress: Array<number>
}

const User: FC<Props> = ({
  user,
  unfollowUser,
  followUser,
  followingInProgress
}) => {
  return (
    <div className={classes.user}>
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <NavLink to={`/profile/${user.id}`}>
            <img
              className={classes.profilePhoto}
              src={user.photos.small || userPhoto}
              alt="userPhoto"
            />
          </NavLink>
        </div>
        <div className="col-md-7 col-sm-7">
          <h5>{user.name}</h5>
          <p>{user.status}</p>
        </div>
        <div className="col-md-3 col-sm-3">
          {user.followed ? (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              className="btn btn-primary pull-right"
              onClick={() => {
                unfollowUser(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              className="btn btn-primary pull-right"
              onClick={() => {
                followUser(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default User
