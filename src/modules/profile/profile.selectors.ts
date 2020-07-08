import { ProfileInitialStateType } from './profile.reducer'
import { createSelector } from 'reselect'

const profileSlice = (
  state: { profilePage: ProfileInitialStateType}
) => state.profilePage

export const selectPosts = createSelector(
  profileSlice,
  profileState => profileState.posts
)

export const selectProfile = createSelector(
  profileSlice,
  profileState => profileState.profile
)

export const selectStatus = createSelector(
  profileSlice,
  profileState => profileState.status
)

export const selectEditMode = createSelector(
  profileSlice,
  profileState => profileState.editMode
)

export const selectIsLoading = createSelector(
  profileSlice,
  profileState => profileState.isLoading
)

export const selectNewTextPost = createSelector(
  profileSlice,
  profileState => profileState.newTextPost
)
