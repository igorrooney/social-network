import React from 'react';

import classes from './ProfileInfo.module.scss';
import Spinner from '../../Spinner';
import userPhoto from '../../../assets/images/user.jpg';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Spinner />;
  }

  return (
    <div className={classes.timelineCover}>
      <div className={classes.timelineNavBar + ' hidden-sm hidden-xs'}>
        <div className="row">
          <div className="col-md-3">
            <div className={classes.profileInfo}>
              <img
                src={props.profile.photos.large || userPhoto}
                alt=""
                className={'img-responsive ' + classes.profilePhoto}
              />

              <h3>{props.profile.fullName}</h3>
              <p className="text-muted">{props.profile.aboutMe}</p>
            </div>
          </div>
          <div className="col-md-9">
            <ul className={'list-inline ' + classes.profileMenu}>
              <li>
                <a href="timeline.html" className="active">
                  Timeline
                </a>
              </li>
              <li>
                <a href="timeline-about.html">About</a>
              </li>
              <li>
                <a href="timeline-album.html">Album</a>
              </li>
              <li>
                <a href="timeline-friends.html">Friends</a>
              </li>
            </ul>
            <ul className={'list-inline ' + classes.followMe}>
              <li>1, 299 people following her</li>
              <li>
                <button className={classes.btnPrimary}>Add Friend</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*<div className={classes.profileInfo}>
        <img
          src={
            props.profile.photos.large ||
            'https://iisy.fi/wp-content/uploads/2018/08/user-profile-male-logo.jpg'
          }
          alt="logo"
        />
        <div>
          <h3>{props.profile.fullName}</h3>
          <p>{props.profile.aboutMe}</p>
        </div>
        </div> */}
    </div>
  );
};

export default ProfileInfo;
