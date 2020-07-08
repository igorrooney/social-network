import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
// Selectors
import * as profileSelectors from './profile.selectors'
// Actions
import * as profileActions from './profile.actions'
// Types
import { ProfileType } from 'types/types'

const selectors = createSelector(
  (state: any) => state,
  state => ({
    posts: profileSelectors.selectPosts(state),
    profile: profileSelectors.selectProfile(state),
    status: profileSelectors.selectStatus(state),
    editMode: profileSelectors.selectEditMode(state),
    isLoading: profileSelectors.selectIsLoading(state),
    newTextPost: profileSelectors.selectNewTextPost(state),
  })
)

export const useProfileConnect = () => {
  const dispatch = useDispatch()
  const {
    posts,
    profile,
    status,
    editMode,
    isLoading,
    newTextPost,
  } = useSelector(state => selectors(state))

  const addPost = useCallback(
    (post: string, img: string, id: number) => (
      dispatch(profileActions.addPost(post, img, id)
    )),
    [dispatch]
  )

  const setEditMode = useCallback(
    () => dispatch(profileActions.setEditMode()),
    [dispatch]
  )

  const getProfile = useCallback(
    (id: number) => dispatch(profileActions.getProfile(id)),
    [dispatch]
  )

  const getStatus = useCallback(
    (id: number) => dispatch(profileActions.getStatus(id)),
    [dispatch]
  )

  const setNewStatus = useCallback(
    (text: string) => dispatch(profileActions.setNewStatus(text)),
    [dispatch]
  )

  const uploadPhoto = useCallback(
    (photo: File) => dispatch(profileActions.uploadPhoto(photo)),
    [dispatch]
  )

  const updateProfileInfo = useCallback(
    (profile: ProfileType) => dispatch(profileActions.updateProfileInfo(profile)),
    [dispatch]
  )

  return {
    // Selectors
    posts,
    profile,
    status,
    editMode,
    isLoading,
    newTextPost,
    // Actions
    getProfile,
    getStatus,
    setNewStatus,
    uploadPhoto,
    updateProfileInfo,
    setEditMode,
    addPost,
  }
}
