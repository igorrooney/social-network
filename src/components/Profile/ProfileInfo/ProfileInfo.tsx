import React, { FC, ChangeEvent } from 'react'
// Connect
import { useProfileConnect } from 'modules/profile/profile.connect'
// Components
import Spinner from 'components/Spinner'
import ProfileStatus from './ProfileStatus'
import ProfileInfoForm from './ProfileInfoForm'
// Styles
import classes from './ProfileInfo.module.scss'
import userPhoto from 'assets/images/user.jpg'
// Types
import { ProfileType } from 'types/types'

const ProfileInfo: FC<Props> = ({ isOwner }) => {
  const {
    // Selectors
    isLoading,
    profile,
    status,
    editMode,
    // Actions
    updateProfileInfo,
    setEditMode,
    uploadPhoto,
    setNewStatus,
  } = useProfileConnect()
  
  if (isLoading) {
    return <Spinner />
  }
  const onSubmit = async(formData: ProfileType) => {
    await updateProfileInfo(formData)
    setEditMode()
  }

  const onSetNewPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const file: File = (target.files as FileList)[0]
    uploadPhoto(file)
  }

  const Contact: FC<ContactType> = ({ contactKey, contactValue }) => {
    return (
      <div className={classes.contact}>
        <b>{contactKey}:</b>
        {contactValue}
      </div>
    )
  }


  let profileInfo = {}
  if (profile !== null) {
    const contactsKeys = Object.keys(profile.contacts)

    profileInfo = (
      <div>
        <h3>{profile.fullName}</h3>
        <div>
          <b>About me:</b>
          {/* props.profile.aboutMe */}
        </div>
        <div>
          <b>Looking for a job:</b>
          {profile.lookingForAJob ? ' yes' : ' no'}
        </div>
        {profile.lookingForAJob && (
          <div>
            <b>Looking for a job description:</b>
            {profile.lookingForAJobDescription}
          </div>
        )}
        <div>
          <b>Contacts:</b>
          {contactsKeys.map(key => {
            if (profile !== null) {
              return (
                <Contact
                  key={key}
                  contactKey={key}
                  contactValue={profile.contacts[key]}
                />
              )
            }
            return null
          })}
        </div>
        <ProfileStatus
          status={status}
          setNewStatus={setNewStatus}
          isOwner={isOwner}
        />

        {isOwner && (
          <div>
            <button onClick={setEditMode}>Edit profile</button>
          </div>
        )}
      </div>
    )

    return (
      <div className={classes.timelineCover}>
        <div className={classes.timelineNavBar + ' hidden-sm hidden-xs'}>
          <div className="row">
            <div className="col-md-4">
              <div className={classes.profileInfo}>
                <img
                  src={profile.photos.large || userPhoto}
                  alt=""
                  className={'img-responsive ' + classes.profilePhoto}
                />{' '}
                {isOwner && (
                  <input type="file" onChange={onSetNewPhoto} />
                )}
                {editMode ? (
                  <div>
                    <ProfileInfoForm
                      onSubmit={onSubmit}
                      initialValues={profile}
                      profile={profile}
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
    )
  }
  return null
}


type ContactType = {
  contactKey: string
  contactValue: string
}
type Props = {
  isOwner: boolean
}

export default ProfileInfo
