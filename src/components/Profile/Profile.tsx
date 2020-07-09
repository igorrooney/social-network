import React, { FC, useEffect, useCallback, useMemo, useRef } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
// Connect
import { useProfileConnect } from 'modules/profile/profile.connect'
import { useAuthConnect } from 'modules/auth/auth.connect'
// Components
import MyPosts from './MyPosts'
import ProfileInfo from './ProfileInfo'

const Profile: FC = () => {
  const {
    // Selectors
    profile,
    // Actions
    getProfile,
    getStatus,
  } = useProfileConnect()
  const {
    // Selectors
    userId: authUserId,
  } = useAuthConnect()

  const history = useHistory()
  const { userId } = useParams()
  const currentUserId = useRef(userId)

  const refreshProfile = useCallback(() => {
    if (!currentUserId.current) {
      currentUserId.current = authUserId
      if (!currentUserId.current) {
        return history.push('/login')
      }
    }
    getProfile(currentUserId.current)
    getStatus(currentUserId.current)
  }, [authUserId, getProfile, getStatus, history])

  const isOwner = useMemo(() => {
    if (profile) {
      if (authUserId === profile.userId) {
        return true
      }
    }
    return false
  }, [profile, authUserId])

  useEffect(() => {
    currentUserId.current = userId
    refreshProfile()
  }, [userId, refreshProfile])
  
  return (
    <div>
      <ProfileInfo 
        isOwner={isOwner}
      />
      <MyPosts />
    </div>
  )
}

export default Profile
