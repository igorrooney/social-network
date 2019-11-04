import React, { useState } from 'react';

import classes from './ProfileInfo.module.scss';
import Spinner from '../../Spinner';
import userPhoto from '../../../assets/images/user.jpg';
import ProfileStatus from './ProfileStatus';
import ProfileInfoForm from './ProfileInfoForm';

const ProfileInfo = props => {
  // const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Spinner />;
  }

  const onSubmit = formData => {
    props.updateProfileInfo(formData);
    //setEditMode(false);
  };

  const Contact = ({ contactKey, contactValue }) => {
    return (
      <div className={classes.contact}>
        <b>{contactKey}:</b>
        {contactValue}
      </div>
    );
  };

  const profileInfo = (
    <div>
      <h3>{props.profile.fullName}</h3>
      <div>
        <b>About me:</b>
        {props.profile.aboutMe}
      </div>
      <div>
        <b>Looking for a job:</b>
        {props.profile.lookingForAJob ? ' yes' : ' no'}
      </div>
      {props.profile.lookingForAJob && (
        <div>
          <b>Looking for a job description:</b>
          {props.profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>Contacts:</b>
        {Object.keys(props.profile.contacts).map(key => {
          return (
            <Contact
              key={key}
              contactKey={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div>
      <ProfileStatus
        status={props.status}
        setNewStatus={props.setNewStatus}
        userId={props.profile.userId}
      />{' '}
      {props.isOwner() && (
        <div>
          <button onClick={props.setEditMode}>Edit profile</button>
        </div>
      )}
    </div>
  );
  return (
    <div className={classes.timelineCover}>
      <div className={classes.timelineNavBar + ' hidden-sm hidden-xs'}>
        <div className="row">
          <div className="col-md-4">
            <div className={classes.profileInfo}>
              <img
                src={props.profile.photos.large || userPhoto}
                alt=""
                className={'img-responsive ' + classes.profilePhoto}
              />{' '}
              {props.editMode ? (
                <div>
                  <ProfileInfoForm
                    onSubmit={onSubmit}
                    initialValues={props.profile}
                    profile={props.profile}
                  />
                </div>
              ) : (
                profileInfo
              )}
            </div>
          </div>
          <div className="col-md-8">
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
              <li>
                <button className={classes.btnPrimary}>Add Friend</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
